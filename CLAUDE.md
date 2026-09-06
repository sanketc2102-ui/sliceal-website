# Project Guidelines

## Tech Stack

- **Astro** — all pages, layouts, and components are `.astro` files
- **Tailwind CSS** — utility classes for all styling
- **Vanilla JavaScript** — plain JS in `<script>` tags only
- **Mobile-first** — every layout starts at the smallest viewport

## Hard Constraints

Do not add these without asking first:

- No React, Vue, Svelte, Solid, Preact, Alpine, or any other UI framework
- No component libraries (shadcn, daisyUI, Flowbite, Bootstrap, Material, etc.)
- No TypeScript-only patterns unless the project already uses TS
- No jQuery, Lodash, or utility libraries for things the platform already does
- No CSS-in-JS, Sass, or CSS frameworks other than Tailwind
- No `npm install` of a new dependency without explaining why it is needed

If a task seems to need one of the above, say so and propose a vanilla approach instead.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Run `astro check` and `astro build` before declaring work finished.

## Components

- Build UI as `.astro` components. Use props and slots for composition.
- Keep component-scoped logic in the frontmatter (`---` block) — it runs at build time.
- Prefer static HTML output. Only reach for client-side JS when there is real interactivity.
- Use `<Image />` from `astro:assets` for local images, never a raw `<img>` with an unoptimized asset.

## JavaScript

- Client-side JS goes in a `<script>` tag inside the `.astro` component that needs it. Astro bundles and processes it automatically.
- Use `is:inline` only when the script must not be processed (e.g. a theme flash-prevention snippet in `<head>`).
- Query elements with `data-*` attributes as hooks, not Tailwind classes.
- Use modern browser APIs: `fetch`, `IntersectionObserver`, `matchMedia`, `<dialog>`, `<details>`, `URLSearchParams`, CSS `:has()` and scroll-snap.
- Prefer HTML/CSS solutions over JS: `<details>` for accordions, `<dialog>` for modals, CSS scroll-snap for carousels, `popover` for popovers.
- If view transitions are enabled, re-bind listeners on `astro:page-load`, not `DOMContentLoaded`.
- Progressive enhancement: the page should still be readable and navigable with JS disabled.

## Styling

- Tailwind utilities only. No separate `.css` files except the global stylesheet for `@import "tailwindcss"`, `@theme` tokens, and `@layer base` resets.
- Define colors, fonts, and spacing scales as theme tokens rather than hardcoding arbitrary values like `text-[#3a7bd5]`.
- Use `@apply` sparingly — extract a component instead.

### Mobile-first rules

- Write unprefixed classes for mobile. Add `sm:` / `md:` / `lg:` / `xl:` only to _add_ styles at larger widths.
- Never write desktop styles first and override them down with `max-*` variants.
- Design at 360px width first, then check 768px and 1280px.
- Interactive targets are at least 44×44px with adequate spacing.
- Use fluid units and `min-h-dvh` (not `min-h-screen`) so mobile browser chrome doesn't break layouts.
- Avoid hover-only interactions — they don't exist on touch.
- Prefer `flex-wrap` and `grid` with `auto-fit`/`minmax` over breakpoint-specific column counts where it works.

## Accessibility & Semantics

- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`, `<a>`.
- A `<div>` with a click handler is never acceptable in place of a `<button>`.
- One `<h1>` per page, headings in order.
- Every image needs `alt` text (empty `alt=""` for decorative).
- Visible focus states — never remove outlines without replacing them.

## Performance

- Ship as little JS as possible. Static HTML is the default output.
- Lazy-load below-the-fold images; set explicit `width` and `height` to avoid layout shift.
- Self-host fonts or use `font-display: swap`. Preload only what's critical.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Layouts](https://docs.astro.build/en/basics/layouts/)
- [Client-side scripts and interactivity](https://docs.astro.build/en/guides/client-side-scripts/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Images and assets](https://docs.astro.build/en/guides/images/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
