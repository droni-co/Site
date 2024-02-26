---
title: 'Mi Stack de desarrollo para proyectos grandes'
description: 'Estoy retomando la construcción de muchos de los proyectos que me han motivado a explorar nuevas tecnologías en el mundo del desarrollo y por eso quería compartir con ustedes el stack que con el paso del tiempo he ido adoptando para desarrollar mis proyectos y qué uso le doy a cada una de las herramientas.'
tags: ['Blog', 'Desarrollo', 'Stack', 'Proyectos']
created_at: '2023-02-01'
image: '/attachments/mi-stack-de-desarrollo-para-proyectos-grandes.png'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
Para los que no han escuchado el término stack de desarrollo, es como su nombre lo indica una pila de herramientas, tecnologías y programas para desarrollar aquí van las que yo uso y el por qué.

### Base de datos

Siempre comienzo un proyecto modelando la base de datos es la forma en la que los modelos y las funcionalidades quedan claras en mi cabeza antes de empezar a escribir código y aunque hace muchos años simplemente usaba herramientas como workbench o directamente dibujaba en papel el diagrama de entidad relación ahora tengo por estrategia usar Vertabelo pero solo para obtener el diagrama del modelado no para la generación del SQL, como base de datos suelo usar Mysql o MariaDB, aunque por requerimientos de clientes también acudo algunas veces a Oracle, sin embargo no creo la base directamente sino que usó un sistema de migraciones, en mi caso el de Laravel que me permite realizar control de versiones a la base de datos y correr fácilmente cambios en la estructura sin afectar demasiado a los datos. En cuanto a bases de datos en tiempo real me gusta mucho usar Firebase que ofrece tanto el servicio de base de datos en tiempo real como el uso de noSQL que para algunas aplicaciones me resulta muy cómodo.

### En backend

Del lado del backend me case con PHP y Laravel, aunque también me gusta realizar proyectos en Ruby On Rails pero sin duda por facilidad y eficiencia Laravel me ha brindado una mejor experiencia a la hora de desarrollar, mediante composer dispongo de muchisimos paquetes que facilitan el desarrollo y cuando necesito algo muy rápido puedo apoyarme en el motor de plantillas Blade para generar un front dentro del mismo sitio sin mucho problema. Para el desarrollo de APIs muchos recomiendan Lumen como una versión simplificada de Laravel que corre mucho más rápido, aunque por mi experiencia me ha resultado más fácil deshabilitar módulos en Laravel que activarlos en Lumen. Tambien les comparto el listado de paquetes que nunca pueden faltar en mis proyectos con Laravel.

- Laracast flash
- Intervention Image
- Carbon
- Socialite
- Sanctum

### En frontend

Aunque del lado del backend siempre he estado muy casado con PHP y Laravel del lado del front he ido explorando muchas opciones a lo largo del tiempo. Empecé con el clásico Bootstrap cuando estaba en la versión 2.3 apenas, y aun uso bootstrap y jquery en proyectos que quiero publicar muy rápido. Luego entre al mundo de los frameworks reactivos con Angular, debo decir que aun me gusta y aun hay muchas cosas que hago usando esta tecnología, pero de un tiempo para acá empecé a adentrarme cada vez más en Vue especialmente por la capacidad de usar su potencial simplemente como una librería sin la necesidad de depender enteramente del framework, cosa que con Angular puede resultar incómodo. Actualmente en la mayoría de proyectos front que consumen APIs uso Vue con estilo de Vuetify, webpack para empaquetar todo y del lado del CSS uso Sass o Scss (no hay mucho que pueda decir al respecto).

### En Apps

Esta es mi etapa en la que aún me encuentro explorando, durante mucho tiempo use Ionic para los desarrollos de apps móviles aprovechandome de tener que saber escribir básicamente Angular y ya esta, sin embargo recientemente estoy en la búsqueda de alguna tecnología que me ofrezca un mayor rendimiento y eficiencia en los terminales. Mis primeros intentos fueron con ReactNative pero debo decir que me pareció un infierno, luego probe NativeScript que ofrece básicamente lo mismo que ReactNative (aplicaciones en js con view nativo), y en determinado punto opte por hacer las app nativas confiando en que Kotlin haría que me olvidara de usar Java pero la realidad es que Kotlin resultó ser tan incómodo de usar como Java, pero ahora ando sumergiéndome en el mundo de Flutter y aunque aún no he publicado ninguna app con esta tecnología va ganando por mucho a las otras opciones que había contemplado.

### El IDE (Entorno de Desarrollo Integrado)

Por lejos el mejor IDE del mercado es Adobe Dreamweaver ( jajaja tranquilos era solo una broma), actualmente uso Visual Code,  es curioso, siempre fue un amante de Atom y aun me parece que es más fácil de personalizar a los gustos de desarrollo del programador, pero use Visual para un proyecto en .Net que estaba trabajando hace tiempo y la fuerza de la costumbre hizo el resto. actualmente lo sigo prefiriendo por su vinculación con Docker, con Git y con Flutter.

### Infraestructura

Es fácil, las máquinas para alojar los proyectos las tengo con DigitalOcean, todos los demas servicios con AWS, es decir que de este último uso los S3, SES, RDS, Cognitivo, y muchas cosas mas pero no las máquinas EC2, el manejo de las máquinas me ha resultado mucho más agradable y además económico en DigitalOcean.

Dentro de mis máquinas suelo montar Ubuntu y sobre el Docker, luego un proxy con Ngnix y ahi si los contenedores que correrán mis aplicaciones. Para proyectos pequeños suelo montar un contenedor LAMP (Linux, Apache, MySQL, PHP) y ahí desplegar el proyecto, solo cuando es un proyecto grande o muy grande instalo los programas en contenedores diferentes o incluso en máquinas diferentes.

### Otras herramientas

Git obligatorio para el control de versiones, aunque uso Github para proyectos pequeños o pruebas y los proyectos grandes los manejo con Gitlab.
Adobe, la única razón por la cual aun tengo una maquina con windows, para generar ilustraciones, imágenes, animaciones o videos.
Socket IO cuando necesito comunicación en tiempo real entre servicios.
Elasticsearch, aun no he hecho la primera implementación a producción pero me he divertido mucho explorando.
Bueno espero que esto les pueda dar ideas sobre cómo estructurar sus proyectos propios y me gustaría que me escribieran recomendando o criticando mis elecciones de desarrollo.