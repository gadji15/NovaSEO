import type { LandingConfig } from './landing-schema'

export const LANDINGS: LandingConfig[] = [
  {
    id: 'novareach-demo',
    slug: 'demo',
    brandName: 'NovaReach',
    slogan: 'Reach faster. Convert smarter.',

    title: 'Accédez à la ressource en 1 clic — sans perdre de temps',
    subtitle:
      'Landing mobile-first ultra claire pour transformer le trafic social & SEO en clics qualifiés.',

    ctaLabel: 'Accéder maintenant',
    ctaUrl: 'https://example.com',

    heroBadge: 'Mobile-first • Ultra rapide',
    microReassurance: 'Redirection sécurisée. Mention d’affiliation si applicable.',

    benefits: [
      {
        title: 'Compréhensible en < 3 secondes',
        description:
          'Un message unique, des bénéfices concrets, un CTA dominant. Zéro friction.',
        icon: 'Zap'
      },
      {
        title: 'Crédibilité immédiate',
        description:
          'Preuve et réassurance sans surcharger la page — ce qui compte, avant le clic.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Tracking propre & mesurable',
        description:
          'UTMs, événements, variantes A/B — sans scripts lourds ni perte de performance.',
        icon: 'ChartNoAxesColumn'
      }
    ],

    trustItems: [
      { label: 'Temps de lecture', value: '~15 sec' },
      { label: 'Optimisé mobile', value: 'Oui' },
      { label: 'Suivi des clics', value: 'Oui' }
    ],

    steps: [
      {
        title: 'Vous arrivez depuis TikTok/SEO/Discover',
        description: 'Le message principal est visible immédiatement.'
      },
      {
        title: 'Vous validez la promesse',
        description: 'Bénéfices + réassurance + FAQ concise.'
      },
      {
        title: 'Vous cliquez',
        description: 'Clic tracké → redirection sécurisée vers l’offre.'
      }
    ],

    faq: [
      {
        question: 'Pourquoi une redirection interne ?',
        answer:
          'Pour sécuriser la destination (anti open-redirect) et fiabiliser le tracking du clic.'
      },
      {
        question: 'Puis-je dupliquer cette landing pour une nouvelle offre ?',
        answer:
          'Oui. Ajoutez une entrée dans la configuration, un slug, et la destination partenaire.'
      },
      {
        question: 'Est-ce indexé par Google ?',
        answer:
          'Par défaut non. Activez `indexable: true` uniquement pour les pages SEO travaillées.'
      }
    ],

    destinationDomainsAllowlist: ['example.com'],

    themeMode: 'dark',
    primaryColor: '#7c3aed',

    seoTitle: 'NovaReach — Landing premium orientée conversion',
    seoDescription:
      'Landing page mobile-first, ultra rapide, pilotée par configuration, avec tracking et A/B testing.',

    indexable: false,
    active: true,

    affiliateDisclosure: {
      enabled: false,
      text: 'Certains liens peuvent être affiliés.'
    },

    variants: [
      {
        id: 'v1',
        weight: 50,
        overrides: {}
      },
      {
        id: 'v2',
        weight: 50,
        overrides: {
          title: 'La page la plus claire pour cliquer sans hésiter',
          ctaLabel: 'Voir l’offre'
        }
      }
    ]
  }
]
