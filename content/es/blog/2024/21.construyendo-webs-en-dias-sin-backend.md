---
title: 'Construyendo webs en días sin backend'
description: 'Esta es una narrativa de mi experiencia dando el salto de crear sitios web completos con backend a pasar a hacer solo sitios con front y herramientas de terceros, para mí, una ganancia de tiempo brutal.'
tags: ['Blog', 'Personal', 'Nuxt', 'Vue', 'Frontend', 'Backend']
created_at: '2024-02-26'
image: 'https://droni.co/attachments/frontend-vs-backend.webp'
author: 'Gustavo Barragán'
author_link: 'https://twitter.com/kalvinmanson'
translated: '/blog/2024/building-websites-in-days-without-backend'
---
Primero daré un poco de contexto, soy desarrollador hace ya varios años y debo decir que siempre me gusto mas el backend que el frontend, lo que me llevo herramientas como Ruby On Rails, Laravel, Net Core, Adonis, etc, y siempre que me planteaba un nuevo proyecto seguía un camino casi sin modificaciones en el que primero pensaba el modelo de la base de datos, para luego crear migraciones, luego modelos y sus relaciones, luego los controladores para generar un api, luego un administrador para poder gestionar esa data y por último el sitio web en cuestión. Esto normalmente es un proceso que entre su planeación y su ejecución podría llevarme varios meses, sin embargo lo seguía viendo como la ruta óptima y lo aplicaba a todos mis proyectos.

## Pero ¿Cómo lo hacen?
Una de las razones que me llevó a investigar una nueva forma de abordar estos proyectos era ver la documentación de otros desarrollos como la documentación de Nuxt y de AdonisJs, ademas de ser muy similar en su presentación la generaban en cuestión de días y no se complicaba mucho en su presentación, la prioridad es que estuviera disponible. Y por otra parte vi algunos videos del desarrollador español [@midu](https://www.youtube.com/@midudev){target=_blank} en el que decía una frase que no me cuadraba:

> La gran mayoría de sitios web no requieren un backend, ni siquiera un framework. @midudev

Yo no podía entender como alguien con una trayectoria y experiencia tan grande en desarrollo decía que estas herramientas era mejor evitarlas. En mi cabeza solo pensaba, ¿y si tienes un blog, y si tienes una tienda, y si tienes un sitio como vas a administrarlo sin backend?

Pero consciente de que muchas veces caemos en el problema del “Martillo de oro” decidí darle la oportunidad y empecé a investigar como poder realizar mis sitios sin aplicar backend.

## Empezaré por un Front

Pensando en todo lo que había visto hice el primer cambio de chip, empezar desde el front e ir hacia atrás, dejar el backend para el final y simplemente simular la data con json o alguna alternativa. Desde el día uno empecé a notar los beneficios de seguir esta estrategia y es por eso que escribo este post.

1. Para comenzar desde el primer día pude ir viendo resultados, cuando empiezas desde el backend pasas mucho tiempo haciendo estructuras de datos, modelados, relaciones, etc, que no se pueden mostrar al mundo porque aunque lleven mucho código y trabajo detrás no están conectados a algo visible. Pero desde el front, cada botón, cada página, cada sección es un elemento que puedes ir mostrando y validando con otras personas.
2. Me desconecte de los datos, una vez que me centre solo en el front deje de pensar en estructuras de datos y siempre que consideraba que en esta sección podrá poner un boton que llame a un video relacionado o traer tal cosa simplemente lo ponía, ya sera problema de mi yo del futuro ver de dónde obtendrá dicha información, pero esto me permitió pensar cosas mas alocada y libre de como presentar todo el contenido en la pantalla al punto de que al fin estaba contento con el resultado.
3. No escribí código que no fuera a usar, normalmente en mis proyectos empezando por el back creaba algún módulo o herramienta que al momento de montar el aplicativo final no terminaba usando para nada, al iniciar por el front evite esos problemas porque todo lo que iba pintando se convertiría en un requerimiento de datos que finalmente estará en la aplicación.

## Deje de necesitar el backend

Aunque mi idea inicial era simplemente cambiar la organización en el desarrollo de mis proyectos, cada sección que iba a creando en el front la iba poblando con data obtenida de archivos Json que en mi cabeza después conectaría con un Api backend, pero ya por la mitad del proyecto note que el rendimiento era muy bueno y que esos contenidos probablemente no los cambiaria en meses y comencé a sopesar la necesidad de tener un administrador frente a simplemente cambiar el contenido directamente en el archivo Json. Pero el salto grande vino cuando descubrí este paquete de Nuxt.

## Nuxt Content
Este paquete lee un directorio del proyecto (/content) y organiza y analiza todo el contenido de archivos .md, .yml, .csv o .json lo que para la mayoría de sitios con los que trabajo es óptimo para manejar el contenido, usando este paquete me ahorro mas de la mitad del tiempo invertido en cada proyecto ya que me he olvidado de crear backends para gestionar páginas, contenidos, artículos y demás elementos de un sitio. Este post qué estás leyendo en este momento está escrito en un archivo de markdown dentro del proyecto y servido mediante Nuxt y el plugin [Nux Content](https://nuxt.com/modules/content){target=_blank}. Aunque aun estoy haciendo pruebas para ver que tal es el rendimiento del plugin y que tanto jugo puedo sacarle ya que aun me causa curiosidad pensar en ¿cuantos recursos consume parseando archivos? y ¿qué pasará cuando la cantidad de archivos sea absurda?. Por ahora con muy pocos datos el resultado ha sido maravilloso, esperemos que siga así.

## No he dejado el backend de lado
Si bien esto ha cambiado completamente la forma en que me planteo los proyectos y ha hecho que saque proyectos que tenía contemplados en meses a semanas o incluso días, no significa que dejaré de lado el backend, ya que lo considero muy útil y además necesario para agregar toda la interactividad con usuario y base del negocio, así que en muchos de mis proyectos he construido backend muchísimo más simples donde operó únicamente con las estructuras de negocio y he dejado el contenido única y exclusivamente en el front.

Por ahora todo va sobre ruedas, les estaré contando mi experiencia con nuevos proyectos. Y como siempre digo, ojalá me de el tiempo para hacer un curso de Nuxt con todo lo que he aprendido.
