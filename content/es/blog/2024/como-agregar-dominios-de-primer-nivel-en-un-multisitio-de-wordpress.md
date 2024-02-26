---
title: 'Cómo agregar dominios de primer nivel en un multisitio de WordPress'
description: 'Desde hace muy poco tiempo estoy experimentando con el sistema de multisitios de wordpress, de hecho este blog está montado dentro de un sistema de estos, sin embargo se me presento una duda: Al instalar el sistema de multisitio de wordpress nos permite seleccionar entre poner nuestros nuevos sitios en paths (carpetas) o en subdominios'
tags: ['Tutorial', 'WordPress', 'Multisitio', 'Subdominios', 'Dominios']
created_at: '2023-02-24'
image: 'https://droni.co/attachments/como-agregar-dominios-de-primer-nivel-en-un-multisitio-de-wordpress.png'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
Desde hace muy poco tiempo estoy experimentando con el sistema de multisitios de wordpress, de hecho este blog está montado dentro de un sistema de estos, sin embargo se me presento una duda: Al instalar el sistema de multisitio de wordpress nos permite seleccionar entre poner nuestros nuevos sitios en paths (carpetas) o en subdominios, pero qué pasa cuando quiero agregar un nuevo sitio ligado a un dominio diferente al dominio principal se me presentan varios problemas, el primero es que wordpress por defecto no lo permite desde el panel de administración, y el segundo es que no sabia que tantas tablas tendría que modificar para hacer la inserción por base de datos, sin embargo después de leer un poco encontre la solucion y aqui la comparto con ustedes.

La forma simple que encontré depende de tres simples pasos:
Primero debemos agregar una configuración de cookies a nuestro archivo /wp-config.php para que se pueda mantener una sesión con el nuevo dominio.

``` php
define( 'COOKIE_DOMAIN', '' );
define( 'ADMIN_COOKIE_PATH', '/' );
define( 'COOKIEPATH', '/' );
define( 'SITECOOKIEPATH', '/' );
```

Ahora simplemente vamos a nuestra configuración de red y habilitamos el registro de usuarios con capacidad para registrar nuevos sitios. Es importante que en este punto el dominio ya este apuntado al servidor.

![Habilitar Multiregistro Wordpress](/attachments/configuracion-de-red-wordpress.png){.mx-auto}

Ahora si podemos entrar al dominio que queremos registrar y nos redirigirá a la pantalla de crear nuevo usuario con sitio, inicialmente solo nos permitirá poner subdominio, crealo con un subdominio sin problema.

Por último ve desde el administrador de la red a administración de sitios y edita el sitio que se acabó de crear, al editar si te permite cambiar la url de subdominio a full url y listo ya debería quedar funcionando.