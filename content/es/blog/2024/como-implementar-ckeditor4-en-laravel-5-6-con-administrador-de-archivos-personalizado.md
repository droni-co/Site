---
title: 'Cómo Implementar CKEditor4 en laravel con administrador de archivos personalizado'
description: 'Hace mucho tiempo realice la itegraicon de kcFinder en lugar de CKfinder para laravel con CKeditor y tuve un buen resultado, aunque actualmente utilizo otor metodo e incluso otro editor Wysiwyg aqui les dejo el tutorial.'
tags: ['Tutorial', 'Laravel', 'Ckeditor', 'vuejs']
created_at: '2023-02-25'
image: '/attachments/como-implementar-ckeditor4-en-laravel-5-6-con-administrador-de-archivos-personalizado.png'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
En mis proyectos suelo usar el editor CKeditor como editor WYSIWYG (What You See Is What You Get) para la parte de administración de contenidos y también para las cajas de comentarios, sin embargo si lo has usado sabrás que CKFinder, el plugin oficial para subir y administrar archivos en CkEditor es de pago y no siempre queremos realizar este pago. La alternativa que solía utilizar era la implementación de KcFinder que es una alternativa libre muy similar a CkFinder, pero la integración de la sesión con laravel no terminaba de convencerme, además me dio muchos problemas cuando actualice mis plataformas a Laravel 5.6, es por eso que decidí hacer la integración de los servicios con mi propio gestor de subidas de archivos vinculado a CKEditor, en este tutorial te enseñare a hacerlo de la misma manera que yo lo hice usando además de las librerías que ya indique el framework VeuJS2 que viene por defecto en laravel 5.x.

laravel-ckeditor-full.jpg

Voy a asumir que ya trabajas Laravel y tienes tu proyecto Montado, lo que vamos a hacer es crear un modelo con su respectiva migración que va a almacenar los archivos subidos.

```bash
$ php artisan make:model Attachment -m
```

Y a la migración le agrego unos atributos

``` php 
public function up()
  {
    Schema::create('attachments', function (Blueprint $table) {
      $table->increments('id');
      $table->unsignedInteger('user_id');
      $table->foreign('user_id')->references('id')->on('users');
      $table->string('file');
      $table->integer('size');
      $table->string('path');
      $table->string('thumbnail');
      $table->timestamps();
    });
}
```
Como ven estoy haciendo referencia a un user_id para llevar el control sobre el espacio en disco que consume cada usuario.

Ejecutamos la migración

$ php artisan migrate
Ahora vamos a implementar CK Editor, para hacerlo simplemente hago la instalación de este paquete https://github.com/dangvanthanh/vue-ckeditor2 con npm.

$ npm install vue-ckeditor2 --save
Y luego agrego en la vista el CDN de CKEditor 4
```html
<script src="//cdn.ckeditor.com/4.10.0/standard/ckeditor.js"></script>
```
Para que sea más fácil llamarlo en mis formularios de laravel/blade cree un componente de vue

``` vue
// EditorComponent.vue
<template>
  <div>
    <vue-ckeditor v-model="content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)" />
    <textarea :name="name" v-model="content" class="d-none"></textarea>
  </div>
</template>
```

``` vue
<script>
import VueCkeditor from 'vue-ckeditor2';

export default {
  props: ['name'],
  components: { VueCkeditor },
  data() {
    return {
      content: '',
      config: {
        height: 300,
        filebrowserBrowseUrl: '/attachments',
        filebrowserUploadUrl: '/attachments'
      }
    };
  },
  methods: {
    onBlur(editor) {
      //console.log(editor);
    },
    onFocus(editor) {
      //console.log(editor);
    }
  }
};
</script>
```
Como ven en la configuración de CKEditor estamos agregando estos params

``` javascript
filebrowserBrowseUrl: '/attachments',
filebrowserUploadUrl: '/attachments'
```

Son las url con los callbacks para el plugin de administrador de archivos.

Ahora si vamos a crear el administrador de archivos, simplemente creamos un controlador que administre el modelo Attachment

``` bash
$ php artisan make:controller AttachmentController --resources
```

Agregamos los sources para que nos cree los métodos index, create, store, edit, update y destroy. Y luego creamos un acceso en las rutas de nuestro proyecto

``` php
Route::resource('attachments', 'AttachmentController');
```

Así ya tendremos todas las opciones para administrar nuestros archivos, pero ya que los envió de las imágenes (es decir los métodos POST y PUT) son enviados por el plugin de CKEditor necesitamos desactivar la validación del campo CSRF de estas rutas, esto lo podemos hacer creando una excepción en el middleware de TokenVerification

``` php
app/Http/Middleware/VerifyCsrfToken.php
protected $except = [
  ‘attachments'
];
```

Volviendo al controlador de Attachments nos centraremos por ahora en dos métodos, el método index qué nos listará todas las imágenes del sitio, y el método store que recibirá las peticiones de CKeditor y subirá las imágenes.

``` php
public function index(Request $request)
  {
    $attachments = Attachment::all();
    return view('admin.attachments.index', compact('attachments'));
  }

  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'upload' => 'required|mimes:jpeg,bmp,png,doc,docx,pdf,xls,xlsx,csv'
    ]);
    $filename = str_slug(
      explode(
        '.', 
        $request->file('upload')
          ->getClientOriginalName())[0]
      ).'.'.$request->file('upload')
        ->getClientOriginalExtension();
    if(Attachment::where('user_id', Auth::user()->id)
      ->where('name', $filename)->first()) {
      $filename = str_slug(
        explode(
          '.',
          $request->file('upload')
            ->getClientOriginalName()
          )[0]).rand(10000,99999)
          .'.'.$request->file('upload')
          ->getClientOriginalExtension();
    }
    //Create thumbnail
    Image::make($request->file('upload'))->save('uploads/'.Auth::user()->id.'/'.$filename);
    Image::make($request->file('upload'))->widen(300)->save('uploads/'.Auth::user()->id.'/thumb-'.$filename);

    $attachment = new Attachment;
    $attachment->user_id = Auth::user()->id;
    $attachment->name = $filename;
    $attachment->file = $filename;
    $attachment->size = $request->file('upload')->getClientSize();
    $attachment->path = '/uploads/'.Auth::user()->id.'/'.$filename;
    $attachment->thumbnail = '/uploads/'.Auth::user()->id.'/thumb-'.$filename;
    $attachment->save();
    return response()->json([
      'uploaded' => 1,
      'fileName' => $filename,
      'url' => '/uploads/'.Auth::user()->id.'/'.$filename
    ]);
  }
```

En el método index solamente estamos llamando el listado completo de registros del modelo Attachment y lo pasamos en una variable a la vista.

Y en el método store que es más importante estamos usando varios elementos, primero mediante $request estamos obteniendo y procesando el archivo, validamos los mime type del archivo para que sea un archivo de imagen o documento válido, almacenamos el nombre del archivo en la variable $filename pasandola a slug con el helper de laravel str_slug(), validamos que no exista otro archivo con el mismo nombre y con la librería Intervention/Image almacenamos la imagen y creamos el thumbnail o imagen en miniatura con un prefijo. todo esto probablemente ya lo hayas hecho en tus proyectos, la parte importante es la respuesta del método, ya que debe enviar una respuesta a CKeditor, esta respuesta debe ser en formato json.

``` php
return response()->json([
    'uploaded' => 1,
    'fileName' => ‘nombreDelArchivo.jpg,
    'url' => '/rl/donde/queda/publicado.jpg'
]);
```

En caso de querer validar y devolver un error puedes hacerlo de esta manera:

``` php
return response()->json([
    'uploaded' => 0,
    error => [message’ => ‘Mensaje de error’]
]);
```

En este punto la función de cargar imagen ya debería estar funcionando, pero al ir a “Ver servidor” no funcionará ya que nos falta aún crear la vista attachments/index.blade.php

Aunque podríamos crear una vista simple con el listado de los adjuntos vamos a usar vue también para poder crear filtros y poder manipular de una manera más “elegante” el listado. De manera que crearemos otro componente en vue y lo llamaremos desde la vista.

``` vue
AttachmentsComponent.vue
<template>
  <div class="card-columns">
      <div class="card" v-for="attachment in attachmentsList">
        <a v-on:click="use(attachment)">
          <img :src="attachment.thumbnail" class="img-fluid">
        </a>
        <div class="card-footer">
          {{ attachment.name }}
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: ['attachments'],
  data() {
    return {
      attachmentsList: []
    };
  },
  mounted() {
    this.attachmentsList = this.attachments;
  },
  methods: {
    use(attachment) {
      window.opener.CKEDITOR.tools.callFunction( 1, attachment.path );
      window.close();
    }
  }
};
</script>

<style scoped>
  .card-columns {
    column-count: 5;
  }
</style>
```

Y en la vista simplemente llamamos el componente y le pasamos la colección de adjuntos:

``` vue
<attachments :attachments="{{ $attachments }}"></attachments>
```

Las opciones de eliminar y editar las dejo para tu creatividad.