---
title: 'Como instalar y configurar OCI8 en PHP de Windows'
description: 'Desde hace poco empecé a trabajar un proyecto en particular que requiere conectarse a bases de datos Oracle pero debido a ciertos requerimientos específicos debo trabajarla desde Windows en lugar de Linux, y debo decir que la configuración de esta extensión en Windows me resultó un dolor de cabeza, aunque luego de hacerlo resultó ser algo muy sencillo. Es por eso que aquí quiero compartirles cómo conectarse con bases de datos Oracle desde PHP usando OCI8.'
tags: ['Tutorial', 'PHP', 'Windows', 'Oracle', 'OCI8']
created_at: '2023-03-01'
image: 'https://droni.co/attachments/como-instalar-y-configurar-oci8-en-php-de-windows.png'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
### Paso uno: Instalar PHP

Ya que estamos en un entorno Windows vamos a usar el paquetexampp que nos incluye PHP, Apache, MySql y otras herramientas útiles para el desarrollo web. Una vez instalado abrimos el panel de xampp e iniciamos el servicio de Apache, esto último solo lo hacemos para poder consultar en la siguiente url la información de PHP:

``` http
http://localhost/dashboard/phpinfo.php
```

Paso dos: Instalar Visual Studio IDE
Necesitaremos instalar este IDE, no porque vayamos a trabajar en él sino porque al instalarlo también nos agrega algunas extensiones de conexión a bases de datos ODBC que serán necesarias para poder trabajar con bases de datos Oracle. Te recomiendo hacer la instalación más completa asegurándote de activar las casillas relacionadas al desarrollo con bases de datos.

[Visual Studio IDE](https://visualstudio.microsoft.com/es/){target=_blank}

### Paso tres: Descargar Instant Client Basics de Oracle
Este programa es el cliente encargado de negociar con las bases de datos Oracle y debemos tenerlo en nuestro sistema, para ello descargamos la ultima version desde:

[Cliente Oracle Db](https://www.oracle.com/database/technologies/instant-client/microsoft-windows-32-downloads.html){target=_blank}

En mi caso es “instantclient-basic-nt-19.8.0.0.0dbru.zip” y la descomprimimos en la siguiente ruta:

```
C:/Oracleinstantclient_19_8
```

### Paso cuatro: Agregar variables al path

Al instalar xampp por defecto no nos agregar las variables de entorno de php o mysql al path, en este caso solo necesitamos agregar al path las variables de PHP y de Oracle instant client. Para hacerlo simplemente abrimos:

```
Panel de control -> Sistema y Seguridad -> Sistema -> Configuración avanzada del sistema
```

En la ventana emergente seleccionamos “Variables de entorno” y en variables de sistema buscamos PATH, la seleccionamos y damos click en editar.

Dando clic en Nuevo agregaremos estos dos registros, verificando que sean las mismas rutas de instalación que teníamos previamente.

```
C:/xamppphp
C:/Oracleinstantclient_19_8
```

![Instalar Oci8 en Path Windows](/attachments/instalar-oci8-en-path-windows.png){.mx-auto}

Paso cinco: Habilitar la extensión en PHP y confirmar
Xampp incluye por defecto la extensión OCI8 pero esta viene desactivada, para activarla solo deberemos abrir el archivo de configuración de php que encuentras en esta ruta:

```
C:/xamppphpphp.ini
```

Y en él buscamos esta linea para descomentar (eliminar el punto y coma inicial)

``` php
extension=oci8_12c ; Use with Oracle Database 12c Instant Client
```

Ahora desde el panel de xampp reiniciamos el servicio de apache y volvemos a la página de información de PHP, donde deberíamos ver que el modulo de OCI8 ya esta activado.

```
http://localhost/dashboard/phpinfo.php
```

![Validar instalacion de oci8 en php](/attachments/validar-instalacion-oci8-windows.png){.mx-auto}

Espero que les sirva de ayuda y no olviden dejar un comentario o compartir.