export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      header: {
        title: 'Droni.co | Smart development',
        subtitle: 'We transform ideas into innovative digital solutions.',
        description: 'We are the Wozniak to your Jobs, we are the malt to your cupcake, we are the Spock to your Kirk, we are the Doc Brown to your Mcfly -I think you got it.',
        menu: {
          home: 'Home',
          blog: 'Blog',
          about: 'About',
          services: 'Services',
          projects: 'Projects',
          contact: 'Contact'
        },
        search: 'Search...'
      },
      footer: {
        copy: 'Built with hard work and many cofee by Droni.co team'
      }
    },
    es: {
      header: {
        title: 'Droni.co | Desarrollo inteligente',
        subtitle: 'Transformamos ideas en soluciones digitales innovadoras.',
        description: 'Somos el Wozniak de tu Jobs, somos la malta de tu pastelito, somos el Spock de tu Kirk, somos el Doc Brown de tu Mcfly -creo que ya lo entendiste.',
        menu: {
          home: 'Inicio',
          blog: 'Blog',
          about: 'Acerca de',
          services: 'Servicios',
          projects: 'Proyectos',
          contact: 'Contacto'
        },
        search: 'Buscar...'
      },
      footer: {
        copy: 'Construido con trabajo duro y mucho café por el equipo de Droni.co'
      }
    }
  }
}))