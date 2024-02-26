---
title: 'Yii2 vs Laravel, Comparación sesgada'
description: 'Comparativa de los frameworks PHP Laravel y Yii2, partiendo de la experiencia que tuve trabajando con ellos. ¿Cuál es mejor? ¿Cuál es más fácil de aprender? ¿Cuál es más rápido? ¿Cuál es más seguro? ¿Cuál es más escalable? Estas y otras preguntas serán respondidas en esta comparativa.'
tags: ['Comparativa', 'Laravel', 'Yii2']
created_at: '2023-02-28'
image: '/attachments/yii2-vs-laravel-comparacion-sesgada.png'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
Desde hace ya unos 6 años vengo trabajando casi todos mis proyectos en Laravel, empecé con la versión 5.1 y hasta el día de hoy no me ha decepcionado. Lo he usado tanto para la creación de ecommerce, sitios sencillos, apis, back services, e incluso  más recientemente estuve experimentando con  consumo de SOAP y creación de paquetes para Laravel, sin embargo desde hace algún tiempo me vincule a otro proyecto indicando que tenía experiencia con Laravel (PHP) pero cuando aborde el proyecto me encontré con el framework Yii2, otro framework PHP que ofrece estructura MVC (Modelo Vista Controlador), enrutamiento organización de dependencias y en general todo lo que este tipo de frameworks suelen ofrecer, así que hoy me decidi a hacer una comparativa de estos dos frameworks partiendo de la experiencia que tuve trabajando con ellos, aunque debo decir que en cuestión de Yii2 estoy sesgado debido a que solo he trabajado con él en un proyecto específico y durante un periodo de tiempo limitado.

### Vamos por lo básico

Ambos frameworks son escritos en PHP y tienen orientación a objetos bajo el estándar MVC, hasta ahí podríamos decir que son iguales (para gustos los colores) aunque en Yii2 vemos que hay algunas cosas que no vienen por defecto (aunque se puede incluir) como un motor de plantillas o scaffolds, cuando me encontré por primera vez con Yii2 mi primera impresión es que se trataba de algo más similar a Lumen que al propio Laravel en lo relacionado a los paquetes que incluye por defecto. Por lo demás son básicamente lo mismo y trabajan por no decir que igual de una manera muy similar.

## Ahora sí, vamos con las diferencias

### El routing

Por venir de laravel estoy acostumbrado a manejar los archivos de rutas en los que puedo establecer la estructura de urls de mi aplicación o servicio, sin embargo en Yii2 si bien hay forma de crear archivos de configuración de rutas lo más usado es las rutas auto declaradas o automáticas que toman los parámetros de la uri para determinar el controlador y el método al que apuntan, entiendo que muchos otros frameworks como CakePHP lo trabajan de esta manera pero no deja de parecerme un poco incómodo no tener en un solo lugar el listado de todos los endpoints de mi aplicación. Adicional a eso en Laravel tenemos una clara distinción entre rutas para la web y rutas para el api, cosa que en Yii2 no encontré.

### El motor de plantillas y la integración con JS

Si bien es cierto que en las aplicaciones modernas se suele separar front y back comunicando estos mediante un API REST en muchos casos requerimos solo un sitio orientado a SEO que renderiza la vista desde el back, en el caso de laravel esto está muy bien pensado y solucionado mediante el motor de plantillas blade que hace muy fácil la escritura de ciclos y variables en las vistas de una manera limpia y organizada, adicional a ello tenemos una integración muy cómoda con VueJS y SCSS desde webpack, lo que hace que la compilación y agregado de nuevos paquetes npm sea muy fácil. Y en cambio del lado de Yii2 no contamos con un motor de plantillas nativo (tendremos que agregarlo) y su integración con js por defecto es con la librería jQuery, si bien Laravel también importa jquery para el funcionamiento de Bootstrap (que viene por defecto) está embebido dentro del archivo de script de VueJS. Esta es una de las cosas que mas me decepcionó de Yii2.

### Migraciones

Yii2 incluye migraciones y funcionan muy parecido que las migraciones de Laravel, sin embargo en Laravel la documentación te guia para que uses por defecto las migraciones y soportes de esta manera tu proyecto, lo que hace que desplegar y realizar una integración continua sea mucho más simple, sin embargo la interfaz de scaffolds de Yii2 (Gii) está pensada para trabajar con un DB preexistente dejando vincular modelos a tablas que no poseen una relación semántica, está punto que no me gusta podría contarse como una ventaja de Yii2 sobre Laravel ya que mediante este generator podrás crear un proyecto sobre una base de datos preexistente sin ninguna estructura o normalización estándar. Se podría considerar ideal para pasar un proyecto realizado en otro lenguaje o framework a Yii2.

### Scaffolding

Aquí tendremos pelea para rato ya que los defensores de Yii2 dirán que este framework incluye una interfaz web para generar los scaffolds (Modelos, Controladores, Vistas, etc), y si es cierto que es una herramienta muy completa, el problema que yo le veo es la creación de elementos del crud con criterios tan abiertos sin recomendar una convención, lo que viola el principio (CoC “Convention Over Configuration”) por un lado es cierto que es más fácil poder crear una estructura de modelos, vistas y controladores a gusto propio y esto hará que arrancar un proyecto sea relativamente simple cuando ya cuentas con ciertas estructuras, pero a la hora de trabajar en equipos de desarrolladores la creación de estas reglas customizadas sin convención genera un problema que hace que tu equipo pase más tiempo intentando entender cómo llamaron a cada elemento. Del lado de Laravel tenemos los generadores desde consola con el famoso artesano “php artisan” y aunque no hay scaffoldings completos nos ayuda a crear estructuras básicas basadas en las convenciones haciendo que sea fácil entender el resultado siempre que sigas los lineamientos de la documentos, lo que nos lleva al siguiente punto.

### Documentación

Aunque para mi hay una clara diferencia en la calidad de la documentación entre Laravel y Yii2, claramente ganando Laravel, hay quienes defienden los docs de Yii2, sin embargo no he encontrado algo similar a un CookBok dentro de Yii una guía de iniciación, mi experiencia con la documentación de Yii ha sido similar a buscar un teléfono en un directorio impreso en papel, encontrando solamente referencias de las funciones y su estructura pero sin buenos ejemplos prácticos y una organización que te indique donde encontraras lo que estás buscando. En Laravel también tenemos este “directorio” con la definición de las funciones del framework, pero en el sitio principal en los docs podemos ver una guía práctica y simplificada de cada herramienta del framework. Adicional a esto el volumen de usuarios en Laravel y la cantidad de proyectos que desprenden de él hacen que este framework tenga una de las comunidades más grandes ¡y en crecimiento! de internet. Por lo que en stack overflow o cualquier otro foro como por ejemplo Laracast puedas encontrar ayuda y soluciones rápidas a tus problemas.

### Addons y paquetes

Debido al punto anterior “La gran comunidad” Laravel cuenta con muchos más paquetes y extensiones mejor documentadas que las que puedes encontrar en Yii2, adicional a eso muchos de los paquetes de Yii2 vienen muy cerrados y son dependientes de jquery, lo que hace que su trabajo en aplicaciones modernas que utilicen vue, angular o react es bastante limitado, sin hablar de la mantenibilidad de estos paquetes.

## Conclusiones
Por muchas razones seguiré usando Laravel frente a Yii2, en especial por su comunidad creciente y soporte constante, pero principalmente porque fomenta las buenas prácticas de desarrollo en frameworks dándole prioridad a las convenciones sobre las configuraciones. Mi claro ganador es Laravel pero quisiera escuchar a los defensores de Yii2 para que nos den más claridad sobre su calidad.

Desde hace ya unos 6 años vengo trabajando casi todos mis proyectos en Laravel, empece con la version 5.1 y hasta el dia de hoy no me ha descepcionado.