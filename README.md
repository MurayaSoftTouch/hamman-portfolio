# Haman Muraya — Portfolio

[![CI](https://github.com/MurayaSoftTouch/hamman-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/MurayaSoftTouch/hamman-portfolio/actions/workflows/ci.yml)

Source for [hamman-portfolio.vercel.app](https://hamman-portfolio.vercel.app/), the personal site of
Haman Muraya, a senior software engineer working on backend and distributed systems, cloud
platforms and AI systems.

The site is a small, static, single-page React application. It has no backend, no database and
makes no runtime API calls. All content ships in the bundle as typed data.

## Stack

| Concern    | Choice                                                      |
| ---------- | ----------------------------------------------------------- |
| UI         | React 19, TypeScript (strict)                               |
| Build      | Vite                                                        |
| Styling    | Tailwind CSS v4 (design tokens in `src/styles/globals.css`) |
| Fonts      | IBM Plex Sans / Plex Mono, self-hosted via Fontsource       |
| Icons      | Lucide (a handful of UI icons only)                         |
| Unit tests | Vitest, React Testing Library, jsdom                        |
| E2E tests  | Playwright (desktop Chrome and Pixel 7 profiles)            |
| Quality    | ESLint (typescript-eslint `strictTypeChecked`), Prettier    |
| CI         | GitHub Actions                                              |
| Hosting    | Vercel (static output)                                      |

There is deliberately no router, no state library and no animation library. The page is one
document with anchor navigation, and the only client state is whether the mobile menu is open
and which section is in view.

## Architecture

Content is data, and components render it.

```text
src/
  types/portfolio.ts        Types for all content (Profile, Project, ExperienceEntry, …)
  data/                     The content itself — edit these files to change the site
    profile.ts              Name, headline, about text, contact links
    navigation.ts           Header navigation (section ids + labels)
    expertise.ts            Four areas of expertise
    projects.ts             Selected work (LedgerCore, IncidentIQ, PulseStream)
    experience.ts           Selected roles, earlier roles, contract work summary
    skills.ts               Grouped skills
    education.ts            Degrees
  components/
    layout/                 Header (desktop nav + mobile toggle), MobileNav, Footer
    sections/               One component per page section
    projects/ProjectCard.tsx
    ui/                     Small primitives: ButtonLink, Badge, ExternalLink, Section, SectionHeading
  hooks/
    useScrollSpy.ts         IntersectionObserver-based active-section tracking
    useMediaQuery.ts        matchMedia via useSyncExternalStore
  styles/globals.css        Tailwind import, theme tokens, base styles
  App.tsx                   Page composition
  main.tsx                  Entry point
tests/e2e/                  Playwright specs
public/                     favicon.svg, robots.txt, sitemap.xml
```

### Content accuracy

Project descriptions are checked against each repository's source code, not only its README,
and describe implemented behaviour only. Unfinished work is labelled as such (PulseStream is
marked _In active development_ and its planned features are listed as not yet implemented). Do
not add metrics, live-demo links or claims that cannot be verified.

## Development

Requires Node.js 22 or later. CI uses the Node.js LTS pinned in `.nvmrc`.

```bash
npm install
npm run dev          # http://localhost:5173
```

## Commands

| Command                | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                    |
| `npm run build`        | Type-check and build to `dist/`              |
| `npm run preview`      | Serve the production build locally           |
| `npm run typecheck`    | Run the TypeScript compiler without emitting |
| `npm run lint`         | ESLint                                       |
| `npm run lint:fix`     | ESLint with autofix                          |
| `npm run format`       | Prettier (write)                             |
| `npm run format:check` | Prettier (check only)                        |
| `npm run test`         | Unit and component tests (Vitest)            |
| `npm run test:e2e`     | Playwright end-to-end tests                  |

## Testing

- **Unit / component** (`src/**/*.test.ts(x)`): content invariants (navigation, project set,
  name spelling), `ProjectCard` rendering and optional links, header navigation, the mobile
  menu's ARIA state, Escape handling and focus return, and page-level landmarks.
- **End-to-end** (`tests/e2e/`): page load and metadata, section anchors, scroll-spy state,
  external link safety (`rel="noopener noreferrer"`), the mobile menu, keyboard skip link and
  horizontal overflow on a phone-sized viewport.

The first Playwright run needs a browser: `npx playwright install chromium`.

## CI

`.github/workflows/ci.yml` runs on pushes and pull requests to `main`. It checks quality only —
deployment is handled by Vercel's Git integration, so nothing in CI deploys.

1. **Verify** — `npm ci`, typecheck, lint, format check, unit tests, production build.
2. **E2E** — runs after Verify. Playwright builds the app and tests the `vite preview` output in
   desktop and mobile Chromium. The report, traces and screenshots are uploaded only when it
   fails, and kept for 7 days.

The workflow has a read-only token, uses npm caching from `actions/setup-node`, has job timeouts,
and cancels older runs for the same branch or pull request. No secrets are needed.

## Deployment

Vercel builds with `npm run build` and serves `dist/` (see `vercel.json`, which also sets
security headers and long-lived caching for hashed assets). There are no environment variables.

## Accessibility and performance

- Semantic landmarks, a single `h1`, and an ordered heading hierarchy.
- A skip link, visible focus states and keyboard-operable navigation.
- The mobile menu is a disclosure (`aria-expanded`/`aria-controls`), closes on Escape and
  returns focus to its toggle.
- The active section is exposed with `aria-current="location"`.
- External links announce that they open in a new tab.
- Colour tokens meet WCAG AA contrast for body text.
- Smooth scrolling and transitions are disabled under `prefers-reduced-motion`.
- No images, no third-party requests at runtime, fonts self-hosted, and a small JavaScript
  bundle.
