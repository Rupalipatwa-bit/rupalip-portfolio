# Rupali Patwa — Portfolio

A Next.js portfolio site built from the original single-file HTML design, enhanced for deployment.

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Customize

Edit `lib/content.ts` for copy, metrics, experience, and case studies.

Set contact links via environment variables:

```bash
NEXT_PUBLIC_EMAIL=you@example.com
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/yourprofile
```

Résumé PDF lives at `public/resume.pdf` — replace with your latest version.

## Deploy

Deploy the `portfolio/` folder as a standalone Next.js app on Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```

## What's enhanced vs. the HTML file

- **Next.js** — component-based, SEO metadata, easy to deploy
- **Mobile navigation** — hamburger menu on small screens
- **Animated metrics** — count-up on scroll
- **External résumé** — no 100KB base64 embedded in HTML
- **Filled placeholders** — case studies and testimonials use real metrics from your experience
- **Reduced motion** — respects `prefers-reduced-motion`
- **Centralized content** — one file to update copy
