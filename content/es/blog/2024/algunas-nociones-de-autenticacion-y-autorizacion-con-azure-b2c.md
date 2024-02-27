---
title: 'Alguna nociones de autenticación y autorización con Azure B2C'
description: 'En este artículo vamos a hablar de Azure B2C, un servicio de identidad en la nube que permite a los desarrolladores personalizar y controlar el proceso de autenticación y autorización de sus aplicaciones.'
tags: ['Azure', 'B2C', 'Autenticación', 'Autorización']
created_at: '2024-02-27'
image: 'https://droni.co/attachments/algunas-nociones-de-autenticacion-y-autorizacion-con-azure-b2c.webp'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
---
## ¿Que es Azure B2C?
Azure B2C es un servicio de identidad que ofrece servicios tanto para autenticación como para autorización. Es lo que se conoce en el mundo de la informática como un 
**CIAM** (Customer Identity and Access Management), un servicio de identidad en la nube que permite a los desarrolladores personalizar y controlar el proceso de autenticación y autorización de sus aplicaciones.
Estos servicios de Identidad y Acceso nos permiten liberarnos de la responsabilidad de implementar y mantener un sistema de autenticación y autorización, permitiéndonos enfocarnos en el desarrollo de nuestras aplicaciones.

## Diferencia entre Autorización y Autenticación
Aunque en el mundo del desarrollo solemos usar una variable 'auth' para referirnos a ambos conceptos, es importante entender que son dos cosas diferentes.
Por un lado la **autenticación** es el proceso de verificar que un usuario es quien dice sery por otro lado, la **autorización** es el proceso de verificar que un usuario tiene permisos para realizar una acción.
Entonces en un sistema rela podemos entender como el proceso de **autenticación** al proceso que nos dice quien es un usuario, pero no significa esto que va a tener acceso a recursos, para eso necesitamos el proceso de **autorización** que es el que nos dirá si el usuario tiene permisos para realizar una acción.

###  Errores de autenticación y autoriación HTTP
Cuando empieces a jugar con apis, es posible que te encuentres con errores de autenticación y autorización HTTP, estos errores son muy comunes y es importante que los entiendas no solo para solucionarlos sino para entender a que hace referencia en cada caso de uso.

```http
401 Unauthorized
```
Este error se refiere a que el usuario no es **Autenticado**, es decir, el usuario no ha sido verificado como quien dice ser, por lo que no tiene acceso a los recursos.

```http
403 Forbidden
```
Este error se refiere a que el usuario no tiene permisos o no esta **Autorizado** para acceder al recurso, esto puede ser porque el cliente no tiene los permisos necesarios o porque el recurso no está disponible para el cliente.


## Usando B2C solo para autenticación
Usualmente en mis proyecto uso servicios externos como Azure B2C en este caso unicamente par ala apa de autenticación, , para liberarme de la responsabilidad de implementar y mantener un sistema de autenticación, pero mantengo el control de la autorización dentro de mi app para liberarme del arduo trabajo que es controlar los permisos de acceso a recursos desde un tercero.

## El Tenant de Azure B2C
El Tenant de Azure B2C es el espacio de trabajo que contiene todas las configuraciones y personalizaciones de la instancia de Azure B2C. Es el espacio de trabajo que contiene todas las configuraciones, subscripciones y personalizaciones de la instancia de Azure B2C.

## Caracteristicas de Azure B2C
Azure B2C tiene varias caracteristicas que lo hacen un servicio relativamente interesante para la capa de autenticación de nuestras aplicaciones, aqui solo mencionare algunas destacadas y aunque es un mundo de posibilidades creo que esto es lo mas relevante.

#### Protocolos OAuth y OpenID Connect
Cuando usamos Azure B2C para autenticación, usamos dos protocolos de autenticación, **OAuth** y **OpenID Connect**. Estos protocolos son los que nos permiten autenticar a los usuarios y obtener información sobre ellos.

#### Proveedores Externos de identidad
Azure B2C nos permite usar proveedores externos de identidad como Google, Facebook, Twitter, LinkedIn, Amazon, WeChat, QQ, Weibo, Microsoft, Apple, y cualquier proveedor de identidad que soporte OpenID Connect. Esto nos permite que los usuarios puedan autenticarse con sus cuentas de estos proveedores y facilita muchisimo el acceso a los recursos de nuestro servicio ya que nos brinda una capa adicional de seguridad que es todo el proceso de registro y validacion de datos que estos servicios ya hicieron sobre el usuario.

#### Pantallas de login personalizadas
Una de las caracteristicas mas interesantes de Azure B2C es la posibilidad de personalizar las pantallas de login, esto nos permite que la experiencia de autenticación sea mas amigable y se adapte a la identidad visual de nuestra aplicación. A diferencia de usar solo un proveedor OAuth, que nos redirige a la pagina de login del proveedor, con Azure B2C podemos personalizar la experiencia de autenticación para que el usuario no sienta que esta saliendo de nuestra aplicación. aunque debo decir que el proceso de personalización de estas pantallas es un poco tedioso y requiere de conocimientos de HTML y CSS.

#### Manejo de roles desde B2C
Si bien suelo usar estos servicios solo para la capa de **autenticación**, es posible manejar roles desde B2C, esto nos permite que los usuarios tengan roles predefinidos y que estos roles sean usados para controlar el acceso a recursos de nuestra aplicación.

## Microsoft Entra External Identity
Debemos señalar tambien que ni el mismo Microsoft está muy contento con el estado actual de Azure B2C y se encuentran trabajando en una nueva herramienta llamada **Microsoft Entra External Identity** que promete ser una solución mas completa y mas facil de usar que Azure B2C. [Mas información sobre Microsoft Entra External Identity](https://learn.microsoft.com/es-es/entra/external-id/external-identities-overview{:target="_blank"}

### Políticas de usuario y estrategias de autenticación
Mas detalles sobre custom policies en [este articulo de medium](https://medium.com/the-new-control-plane/everything-you-wanted-to-know-about-azure-ad-b2c-custom-policy-samples-but-were-afraid-to-ask-96fa561f1e4d){:target="_blank"}