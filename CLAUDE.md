# toddqualiano.com

Personal site and living resume for Todd Qualiano. Built to demonstrate 
production-grade engineering to technical recruiters at mission-driven 
(clean energy / non-profit) companies.

## Stack
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Content**: MDX with KaTeX for math rendering (build-time, via rehype-katex + remark-math)
- **Hosting**: S3 + CloudFront + ACM + Route 53 (static export)
- **CI/CD**: GitHub Actions with OIDC auth to AWS (no long-lived secrets)

## Dev Commands
- `npm run dev` — start local dev server
- `npm run build` — production build
- `next export` — generate static `./out/` directory for S3 deploy
- `npx tsc --noEmit` — type check only
- `npx eslint .` — lint

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `app/thesis/[chapter]/` — MDX chapter pages with KaTeX math
- `components/` — shared UI components (shadcn/ui base + custom)
- `public/` — static assets
- `.github/workflows/` — CI/CD pipelines

## Conventions
- TypeScript everywhere. No `any` without a comment explaining why.
- Server Components by default. Add `"use client"` only when interactivity requires it.
- Tailwind for all styling. No inline styles, no CSS modules.
- shadcn/ui components are copied into `components/ui/` and owned — modify freely.
- All math rendering happens at build time via KaTeX. No client-side math JS.

## Key Routes
- `/` — landing / about
- `/projects` — project card grid
- `/thesis` — thesis landing (abstract, TOC, PDF download)
- `/thesis/[chapter]` — individual MDX chapter pages
- `/contact` — contact form (API Gateway → Lambda → SES backend)

## Design System
- Dark by default, light-mode toggle
- Background: `#0a0a0a` — foreground: `#ededed`
- One accent color (TBD — amber/orange direction)
- Font: Geist Sans (body), Geist Mono (code)
- Vibe: Linear/Vercel/Stripe — crisp, startup-adjacent, not academic

## AWS Architecture
- S3 bucket (private) → CloudFront (OAC, not OAI) → Route 53 ALIAS
- ACM cert must be provisioned in `us-east-1` for CloudFront
- Contact form: API Gateway HTTP API → Lambda (Node.js) → SES
- Analytics: CloudWatch RUM snippet in `<head>`
- Deploy: `aws s3 sync ./out s3://BUCKET --delete` + selective CloudFront invalidation

## What NOT to Do
- Don't generate placeholder boilerplate and move on — Todd wants to understand the code.
- Don't add dependencies without explaining what they do and why.
- Don't use CSS modules or styled-components — Tailwind only.
- Don't use `getStaticProps` / Pages Router patterns — this is App Router.