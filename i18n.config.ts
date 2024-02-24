export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      header: {
        title: 'Droni.co | Smart development',
        subtitle: 'We transform ideas into innovative digital solutions.',
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