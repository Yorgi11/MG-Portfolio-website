# Lightweight Portfolio Website

A clean Vite + React portfolio site built from scratch using the uploaded DDI website as a structural baseline, but without the extra authentication, payments, dashboards, or admin systems.

## Features

- Homepage with hero, About section, and Contact section
- Projects page
- Config-driven project cards
- Navbar with logo slot, title, and three tabs:
  - About → homepage About section
  - Contact → homepage Contact section
  - Projects → projects page
- Lightweight CSS-only styling
- No Tailwind, Supabase, Cloudflare Workers, payment code, or dashboard code

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Customize Site Content

Edit:

```txt
src/config/siteConfig.js
```

### Change the navbar title/logo

```js
export const siteConfig = {
  logo: "/logo.svg",
  title: "Michael Giorgi",
  subtitle: "Game Developer • Software Developer • Interactive Media",
  // ...
};
```

Place replacement images in `public/` and reference them with paths like:

```js
logo: "/my-logo.png"
```

## Add Projects

Edit the `projects` array in `src/config/siteConfig.js`:

```js
export const projects = [
  {
    title: "My Project",
    description: "A short description of the project.",
    logo: "/my-project-logo.png",
    link: "https://example.com",
  },
];
```

Every object automatically becomes a project card on the Projects page.
