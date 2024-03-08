---
title: 'Migrando de PHP a Node es ahora mas fácil'
description: 'Durante mucho tiempo de mi vida profesional use PHP como mi lenguaje principal de desarrollo para backend, al ser un lenguaje de tipado dinámico su curva de aprendizaje es muy corta y la comunidad alrededor de este lenguaje es tan robusta que puedo pensar que todo problema que se pueda presentar en PHP ya lo encontraremos resuelto en StackOverFlow.'
tags: ['Tutorial', 'PHP', 'Node', 'AdonisJS']
created_at: '2023-03-03'
image: 'https://droni.co/attachments/migrando-de-php-a-node-es-ahora-mas-facil.png'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
Sin embargo es deseo natural de todo desarrollador migrar a nuevas tecnologías con diferentes prestaciones en el mercado así que me propuse empezar a desarrollar backend en node y aunque al principio resultó un poco traumático debo decir que he encontrado la manera más óptima de hacerlo.

### El mundo de PHP es mas bonito gracias a Laravel

Luego de trabajar PHP, crudo, pasar a hacerlo de manera estructurada, POO y luego de probar varios frameworks MVC, encontré Laravel y me enamore, hasta el dia de hoy y desde hace varios años todos mis proyectos de backend los hacía utilizando este robusto framework que además de brindar muchas herramientas comúnmente utilizadas como la autenticación de usuario, enrutamiento, control de permisos y un ORM increible, me brindaba una estructura de proyecto tan organizada que me sentía capaz de enfrentarme a cualquier proyecto hecho con Laravel sin miedo. Es por eso que ahora que decidí migrar a otra tecnología quería encontrar algo similar a Laravel que me ofreciera tanto herramientas como organización.

### Empezaron los problemas con Node

Lo primero que hice fue explorar algunas de la librerías y frameworks más populares en node como por ejemplo express, y aunque es evidente el potencial que tiene node para trabajar en backend empecé a tener algunos inconvenientes que me frustraba y me desanimaba en mi intento por reemplazar el uso de Laravel en mis proyectos. algunos de estos problemas fueron:

1. **La desorganización**:  Al no existir una estructura de proyecto establecida me encontré con muchos problemas identificando el orden en proyectos de otras personas, la forma en la que se usan los modelos, las carpetas en las que se ubican los controladores, etc. Al trabajar en una empresa con desarrolladores node me di cuenta de los problemas que tienen tratando de organizar un stack de desarrollo para ir todos en línea con los demás.
2. **La dependencia de la dependencia y las versiones**: Aunque del lado de Laravel también tenemos un manejador de paquetes “Composer” es casi invisible para el desarrollador el asunto de versiones, sin embargo en node es más que evidente pues la versión del compilador/transpilador y del manejador de paquetes puede afectar el comportamiento de la aplicación y sacarnos varias canas para hacer correr un proyecto.
3. **Paquetes y más paquetes**: En la empresa que trabaje note que algunos devs usaban TypeORM mientras otros usaban SequalizeJS, mismo objetivo y librerías diferentes, esto hace que tengas que leerte documentaciones diferentes para trabajar con un proyecto u otro, y lo mismo pasaba con librerías de autenticación, o de enrutado o la librería que se usaba para crear hash por ejemplo.
4. **La falta de migraciones y control de DB**: Ya que los proyectos eran construidos por paquetes no se hacia un control desde el código a la base de datos, esta era construida por separado y vinculada al ORM que se estuviera usando, esto causaba que desde el código tuvieras que sobre tipear cosas por la falta de convenciones en la DB.
5. **Desarrolladores front que pasaron a back**: Note que muchos proyectos fueron montados por desarrolladores que trabajaban node del lado del front y pasaron a aplicar las mismas prácticas en el back, de manera que en proyectos back me encontre cosas como Interfaces, Servicios y Repositorios que son muy útiles a la hora de desarrollar un proyecto en Angular o Vue, pero que no aportan mucho o mas bien nada en un proyecto de back.

Seguro que a esta altura ya estarás pensando si es buena idea o no pasar de PHP/Laravel a Node/xxxx, lo mismo me pregunte yo y durante mucho tiempo pensé en no hacerlo al encontrarme proyectos con los problemas mencionados anteriormente una y otra vez, sin embargo hace poco me recomendaron un framework que me abrió los ojos y me hizo migrar a node en un par de días.

### Alabado sea AdonisJS
Finalmente Adonis JS fue el framework que me soluciono todos mis problemas y despejo todas mis dudas, luego de leer la documentación de este framework sentí incluso que quienes lo desarrollaron buscaron tomar todas las buenas cosas de frameworks como Laravel y Ruby On Rails para migrarlas a node de una manera coherente.

[Ir al sitio de AdonisJs](https://adonisjs.com/){target=_blank}

### Las cosas que más me gustaron
- **Estructura MVC**: Para comenzar Adonis te ofrece una estructura de archivos muy similar a la de cualquier buen framework MVC, con su carpeta de modelos, rutas, configuraciones, controladores etc. Esto facilita ubicarse muy fácilmente en un proyecto que acabas de abrir sin tener que estar adivinando en donde está cada cosa. 
- **Opciones preconfiguradas API/Web**: Al crear el proyecto te brinda un montón de opciones para configurar que hacen que tu vida como desarrollador sea más llevadera, entre ellos puedes definir de entrada si el proyecto será un API o tendrá vistas incluidas, así como definir el linter y muchas más opciones.
- **ORM para chuparse los dedos**: El ORM que usa Adonis JS es Activerecord, que para aquellos que vienen de ruby on rails ya será un viejo amigo, pero si vienes de Laravel y estas acostumbrado a Eloquent dejame decirte que te tomará un dia o dos aprender su sintaxis ya que solo tenemos cambios en nombres de funciones pero por lo demás tenemos el mismo poder.
- **Paquetes oficiales y útiles**: Adonis JS incluye una serie de paquetes adicionales para instalar como lo son el de autenticación y control de permisos, subida y manejo de archivos, un mailer, y muchas cosas mas que se configurar con un par de lineas y ahorran muchísimo tiempo en desarrollo. Además estos paquetes son oficiales de la documentación de adonis con lo que no tendrás que estar peleando entre diferentes librerías de node que puedas utilizar para resolver el mismo problema.
- **Un cliente amigable**: Acostumbrado al tradicional php artisan en laravel me sentia un poco vacío al pasar a node, pero Adonis incluye un cliente similar que con la linea node ace te permite crear modelos, migraciones, controladores, y muchas cosas más.
Migraciones y DB estandarizada: Adonis incluye su ORM y forma de administrar la DB por lo cual también incluye su carpeta de migraciones para llevar un control más ordenado y claro del esquema de base de datos, permitiendo definir relaciones entre los modelos de la misma manera que lo hacías con Laravel.

### Es hora de aprender Adonis

Espero con esto haberte convencido de usar Adonis JS como tu framework principal, sin embargo tras buscar en Udemy y plataformas similares no encontré un buen curso de introducción a este framework es por eso que me he puesto como meta crear una buen material para aprender a migrar de PHP/Laravel a Node/Adonis que estaré publicando pronto… espero.