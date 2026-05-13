# Leena Tiwari — Portfolio

A personal portfolio website for Leena Tiwari, a Software Development Engineer. Features a dark futuristic design with glassmorphism, animated hero, typed text effect, skills grid, projects showcase, resume download, and a contact form.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (via workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port varies)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vite + React + Tailwind CSS v4 + Framer Motion
- UI: Radix UI + shadcn components
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- Color theme: Dark futuristic with neon cyan/blue/purple oklch palette

## Where things live

- `artifacts/portfolio/src/components/portfolio/` — main portfolio sections (Hero, About, Skills, Projects, Resume, Contact, Footer, Navbar, Section)
- `artifacts/portfolio/src/assets/leena.jpg` — profile photo
- `artifacts/portfolio/src/index.css` — design system (colors, theme, utilities)
- `artifacts/portfolio/index.html` — Google Fonts links
- `artifacts/api-server/` — backend Express server (unused by portfolio currently)

## Architecture decisions

- Single-page portfolio: all sections live on one page with anchor-based navigation
- TanStack Router removed in favor of plain React (single SPA page)
- Tailwind v4 with oklch color system; dark futuristic theme baked into `:root`
- Framer Motion for scroll-triggered and load animations; CSS for blobs and cursor blink

## Product

A portfolio site for Leena Tiwari with sections: Hero (typing animation + photo), About (stats), Skills (tech stack cards), Projects (StartupIQ, DevConnect, Portfolio), Resume (download link), and Contact (form + social links).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Do not run `pnpm dev` at the workspace root — use workflow or `pnpm --filter @workspace/portfolio run dev`
- The `source(none)` in index.css is intentional — Tailwind v4 scans `../src` explicitly
- Google Fonts links are in `artifacts/portfolio/index.html`, not the CSS

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
