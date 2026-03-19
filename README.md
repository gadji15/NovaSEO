# NovaReach Landing

Landing Next.js (App Router) orientée conversion, pilotée par configuration.

## Prérequis

- Node.js >= 20.9

## Installation

```bash
npm install
npm run dev
```

## Variables d'environnement

Copiez `.env.example` en `.env.local`.

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` : domaine Plausible (ex: `novareach.com`). Si absent, aucun script analytics n'est chargé.
- `NEXT_PUBLIC_PLAUSIBLE_HOST` : host Plausible (cloud ou self-host). Optionnel.
- `NEXT_PUBLIC_SITE_URL` : URL publique du site (ex: `https://novareach.com`). Utilisée pour le sitemap.

## Ajouter / dupliquer une landing

Éditez `config/landings.ts` :

- `slug` : l'URL (ex: `/offer-a`)
- `ctaUrl` : URL partenaire (https uniquement)
- `destinationDomainsAllowlist` : domaines autorisés pour éviter les open-redirect
- `indexable` : `false` par défaut (recommandé). Passez à `true` pour les pages SEO.
- `variants` : variantes A/B (V1: hero/cta/couleur)

## Redirection robuste

Le bouton CTA pointe vers `/go/[slug]`.

- validation stricte de l'URL cible
- blocage des domaines non autorisés

## Events (Plausible)

- `landing_view` (au mount)
- `cta_click` (avant navigation)
- `scroll_depth`
- `time_on_page`

Chaque event inclut `slug`, `variant`, et les UTMs si présents.
