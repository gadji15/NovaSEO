# Project notes for agents

## Runbook

- Install deps: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Env

- Copy `.env.example` -> `.env.local`
- Set `NEXT_PUBLIC_SITE_URL` for sitemap/metadata
- Plausible: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (and optional `NEXT_PUBLIC_PLAUSIBLE_HOST`)

## Branding

- Put the logo image at `public/brand/logo.png`
- PWA icons are served at `/icons/192.png` and `/icons/512.png`
