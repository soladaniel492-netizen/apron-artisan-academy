# Chef Store

Chef Store is an independent TanStack Start website for chef wear, culinary accessories, uniforms, and culinary training.

## Development

Requirements:

- Node.js 20 or newer
- npm

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Deployment

The project is configured for Vercel-compatible Nitro output and can also be built for other Node or serverless hosts.

Set these environment variables on the deployment host:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

The existing Supabase project remains responsible for products, media, prices, contact enquiries, training registrations, authentication, and admin content.
