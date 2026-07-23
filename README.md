# Sharda Hardware & Cement Agency — Bokaro

A modern, bilingual (English / Hindi) React + Vite website for **Sharda Hardware & Cement Agency**, Biada Road, Railway Colony, Bokaro Steel City, Jharkhand 827001.

## Features

- Product catalog (Cement, Steel, Roofing, Pipes, Sand, Tools)
- Bilingual EN / हिन्दी language toggle
- WhatsApp direct chat integration
- Enquiry form (mailto + WhatsApp fallback)
- SEO-ready metadata, JSON-LD structured data, sitemap, robots.txt
- Responsive design with Indian-inspired color palette

## Tech stack

- Vite 5
- React 18 + TypeScript
- react-router-dom
- shadcn/ui + Tailwind CSS
- Framer Motion
- react-helmet-async

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output is written to `dist/`.

## Deploy to Vercel

1. Push this repo to GitHub (`shruti-collab/ShardaHardware`).
2. Import the repo on [Vercel](https://vercel.com/new).
3. Vercel will auto-detect **Vite** and use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add these environment variables in Vercel → Project → Settings → Environment Variables:

   | Variable | Value |
   |---|---|
   | `VITE_SUPABASE_URL` | `https://seeukuensorhofcszlou.supabase.co` |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_H8DsOKcwHfOD-YfTv90N9A_W0fZlzL_` |
   | `VITE_SUPABASE_PROJECT_ID` | `seeukuensorhofcszlou` |

5. Click **Deploy**.

> `vercel.json` is already included for SPA routing and long-term asset caching.

## Connect custom domain

After deploying on Vercel:
1. Go to Project → Settings → Domains.
2. Add `shardahardwarebokaro.in`.
3. Update DNS at MumuHost with the records Vercel provides (A + CNAME).

## Contact

- Phone / WhatsApp: [+91 99391 59582](https://wa.me/919939159582)
- Address: Sharda Hardware and Cement Agency near Sharda Jewellers, Biada Road, Railway Colony, Bokaro Steel City, Jharkhand 827001
