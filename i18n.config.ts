export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      code: 'en',
      header: {
        title: 'Droni.co | Smart development',
        subtitle: 'We transform ideas into innovative digital solutions.',
        description: 'We are the Wozniak to your Jobs, we are the malt to your cupcake, we are the Spock to your Kirk, we are the Doc Brown to your Mcfly -I think you got it.',
        action: 'Get in touch',
        menu: {
          home: 'Home',
          blog: 'Blog',
          about: 'About',
          services: 'Services',
          projects: 'Projects',
          live: 'Live',
          contact: 'Contact',
          login: 'Login',
        },
        search: 'Search...'
      },
      blog: {
        title: 'Blog',
        subtitle: 'We share our knowledge and experience with you.',
        description: 'We write about technology, development, design, and more. We share our knowledge and experience with you.',
        action: 'Read more',
        lastPosts: 'Last posts in blog'
      },
      about: {
        team: 'Our team',
        discord: {
          action: 'Join our Discord community',
          description: 'Join our Discord community and be part of our discussions, events, and more.',
        }
      },
      footer: {
        copy: 'Built with hard work and many cofee by Droni.co team'
      }
    },
    es: {
      code: 'es',
      header: {
        title: 'Droni.co | Desarrollo inteligente',
        subtitle: 'Transformamos ideas en soluciones digitales innovadoras.',
        description: 'Somos el Wozniak de tu Jobs, somos la malta de tu pastelito, somos el Spock de tu Kirk, somos el Doc Brown de tu Mcfly -creo que ya lo entendiste.',
        action: 'Unete a nosotros',
        menu: {
          home: 'Inicio',
          blog: 'Blog',
          about: 'Acerca de',
          services: 'Servicios',
          projects: 'Proyectos',
          live: 'En vivo',
          contact: 'Contacto',
          login: 'Iniciar sesión',
        },
        search: 'Buscar...'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Compartimos nuestro conocimiento y experiencia contigo.',
        description: 'Escribimos sobre tecnología, desarrollo, diseño y más. Compartimos nuestro conocimiento y experiencia contigo.',
        action: 'Leer más',
        lastPosts: 'Últimas entradas en el blog'
      },
      about: {
        team: 'Nuestro equipo',
        discord: {
          action: 'Comunidad en Discord',
          description: 'Únete a nuestra comunidad de Discord y sé parte de nuestras discusiones, eventos y más.',
        }
      },
      footer: {
        copy: 'Construido con trabajo duro y mucho café por el equipo de Droni.co'
      }
    }
  }
}))