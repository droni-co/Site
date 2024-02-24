export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      header: {
        title: 'Droni.co',
        subtitle: 'The best place to find your drone',
        menu: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          contact: 'Contact'
        }
      },
      footer: {
        copy: 'Built with hard work and many cofee by Droni.co team'
      }
    },
    es: {
      header: {
        title: 'Droni.co',
        subtitle: 'El mejor lugar para encontrar tu dron',
        menu: {
          home: 'Inicio',
          about: 'Acerca de',
          services: 'Servicios',
          contact: 'Contacto'
        }
      },
      footer: {
        copy: 'Construido con trabajo duro y mucho café por el equipo de Droni.co'
      }
    }
  }
}))