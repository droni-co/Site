<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          Transformamos ideas en soluciones digitales innovadoras
        </h1>
        <h4>Somos el Wozniak de tu Jobs, somos la malta de tu pastelito, somos el Spock de tu Kirk, somos el Doc Brown de tu Mcfly -creo que ya lo entendiste.</h4>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2">
          <article class="prose lg:prose-xl max-w-full dark:prose-invert md:my-8">
            <p>
              Droni.co es una marca personal y de equipo, un proyecto que ha intentado morir varias veces y se niega a hacerlo, yo soy quien dirige este barco (Gustavo Barragán) y cuando inicie Droni.co no era mas que mi patio de juegos, una cuenta para probar tecnologías, lenguajes, frameworks y demas, un sitio de pruebas que ha pasado por mil cambios y donde he experimentado con cuanta novedad hay en el mercado, y no creo que esto deje de ser así, aunque debo decir que en este momento los planes son un poco más maduros, ya estoy un poco cansado de destruir completamente el sitio cada año porque ahora quiero probar otra cosa, así que pienso estabilizar un poco más para que no se me castigue tan bruscamente a nivel de SEO y poder darle una continuidad y trazabilidad a todo lo que hacemos.
            </p>
            <h2>Digo hacemos y no hago porque…</h2>
            <p>
              Durante mi vida laboral saltando de empresas conocí a muchas personas que me aportaron demasiado en mi vida personal y profesional y algunas de ellas han llegado a meter manos en este proyecto, algunas incluso siguen vinculadas y participan de los desarrollo que aquí hago, por poner unos ejemplos el logo actual fue diseñado por Juana Rosas y Andrea Diaz, esta última también ha hecho varios de los diseños de productos que han salido de Droni.co a lo largo del tiempo, y también está Manuel Laverde que escribió varios de los posts del blog y durante algún tiempo manejaba contenidos para redes sociales bajo este nombre. Es por eso que aunque constantemente soy yo quien se sienta a desarrollar los proyectos usualmente cuento con el apoyo de varias personas vinculadas que también aportan mucho a todo lo que de aquí sale.
            </p>
            <h2>Es inevitable verlo como empresa, pero no lo es</h2>
            <p>
              Aunque me gusta el software libre compartir mis desarrollos y todo lo que producimos en Droni.co (asi me de pena), debo decir que de algo hay que vivir y como se suele decir -A mis hijos no los alimentan los lobos- es por eso que durante muchos años también he sacado tiempo para ofrecer desde Droni.co servicios de diseño web y desarrollo de software de manera comercial, así es como ya contamos con clientes de eCommerce, software administrativo, educación virtual, entre otros y seguimos dedicando tiempo a crear soluciones para clientes porque además de ser una oportunidad para implementar todas estas cosas que en conjunto vamos desarrollando también es una forma de pagar las cuentas de los servicios que vamos probando.
            </p>
          </article>
        </div>
        <div class="md:col-span-1">
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-50 drop-shadow-lg md:mt-8 mb-3">
            Nuestro equipo
          </h2>
          <BlogUserCard
            class="mb-2"
            title="Gustavo Barragán"
            subtitle="Ingeniero de Software"
            picture="/attachments/gustavo.barragan.webp"
            link="https://twitter.com/kalvinmanson"/>
          <BlogUserCard
            class="mb-2"
            title="Andrea Diaz"
            subtitle="Diseñadora Gráfica"
            picture="/attachments/andrea.diaz.webp"
            link="https://www.facebook.com/andrea.d.mateus"/>
          <BlogUserCard
            class="mb-2"
            title="Manuel Laverde"
            subtitle="Copywriter"
            picture="/attachments/manuel.laverde.webp"
            link="https://confesionesdeuniletrado.blogspot.com/"/>

          <p class="pb-3">
            Únete a nuestra comunidad de Discord y sé parte de nuestras discusiones, eventos y más.
          </p>
          <UiAction 
            to="https://discord.com/channels/1255198066080874527/1255198066080874529"
            title="Discord Dronico">
            <i class="mdi mdi-discord me-3"></i>
            Comunidad en Discord
          </UiAction>
        </div>
      </div>
    </div>
  </div>
</template>