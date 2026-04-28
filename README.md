# Michael Giorgi Portfolio Website

A lightweight personal portfolio website built with React and Vite. The site is designed to showcase software, web, and game development projects through a clean homepage, contact section, and config-driven project showcase.

## Overview

This portfolio website provides a simple, professional way to present my development work. It includes a homepage with an introduction, an about section, contact links, and a dedicated projects page where projects are automatically generated from a central configuration file.

The project is intentionally lightweight and does not include unnecessary backend services, authentication, payment systems, dashboards, or admin tools. Content is managed directly through the site configuration file, making it easy to update without modifying page components.

## Features

- React + Vite frontend
- Homepage with hero section
- About Me section
- Contact section
- Projects page
- Config-driven project cards
- Optional project tools section
- Optional secondary project link
- Reusable project card component
- Sticky navigation bar
- Smooth section navigation with adjustable scroll offsets
- Responsive CSS styling
- Static asset support through the `public/` folder

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- HTML
- CSS

## Project Structure

```txt
MG-Portfolio-website/
├── public/
│   ├── logo.svg
│   ├── project-vr.svg
│   ├── project-ddi.svg
│   ├── project-elevator-panic.svg
│   ├── project-adventure-quest.svg
│   └── project-apk-auto-installer.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Section.jsx
│   │
│   ├── config/
│   │   └── siteConfig.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Install Node.js before running the project locally.

Recommended:

```bash
node --version
npm --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Yorgi11/MG-Portfolio-website.git
```

Navigate into the project folder:

```bash
cd MG-Portfolio-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Customizing Site Content

Most site content is controlled from:

```txt
src/config/siteConfig.js
```

This file contains the main site information, homepage text, contact links, and project entries.

## Updating the Site Title and Logo

Edit the `siteConfig` object:

```js
export const siteConfig = {
  logo: "/logo.svg",
  title: "Michael Giorgi",
  subtitle: "Software Development • Web Development • Game Development",
};
```

Logo files should be placed in the `public/` folder and referenced with a leading slash:

```js
logo: "/logo.svg";
```

## Updating the Homepage

The homepage content is controlled through the `hero`, `about`, and `contact` sections in `siteConfig.js`.

Example:

```js
hero: {
  eyebrow: "Michael Giorgi",
  title: "Software Engineer",
  description: "I build software, tools, and games.",
  primaryAction: {
    label: "View Projects",
    to: "/projects",
  },
  secondaryAction: {
    label: "Contact Me",
    to: "/#contact",
  },
}
```

## Adding Projects

Projects are added through the `projects` array in:

```txt
src/config/siteConfig.js
```

Each project object is automatically rendered as a project card on the Projects page.

Example:

```js
export const projects = [
  {
    title: "Project Name",
    description:
      "A short description of the project, what it does, and the main systems or technologies involved.",
    logo: "/project-logo.svg",
    tools: ["React", "Vite", "JavaScript"],
    link: "https://github.com/example/project",
    link2: "",
  },
];
```

## Project Entry Fields

| Field         | Required | Description                                                 |
| ------------- | -------: | ----------------------------------------------------------- |
| `title`       |      Yes | The project name displayed on the card.                     |
| `description` |      Yes | A short summary of the project.                             |
| `logo`        |      Yes | Path to the project logo or icon from the `public/` folder. |
| `tools`       |       No | An array of tools or technologies used in the project.      |
| `link`        |      Yes | Main project link, usually the GitHub repository.           |
| `link2`       |       No | Optional secondary link, such as a live deployment.         |

## Optional Tools Section

If a project includes a `tools` array, each tool is automatically displayed as a styled code tag.

Example:

```js
tools: ["Unity", "C#", "Netcode for GameObjects"];
```

If the `tools` field is missing or empty, the tools section is not rendered.

## Optional Secondary Link

Projects can include a second button by assigning `link2`.

Example with a second link:

```js
{
  title: "Digital Development Institute Website",
  description: "A React-based website and student portal.",
  logo: "/project-ddi.svg",
  tools: ["React", "Vite", "Supabase"],
  link: "https://github.com/Yorgi11/ddi-website",
  link2: "https://digitaldevinstitute.com/",
}
```

Example without a second link:

```js
{
  title: "Zombie TD",
  description: "A multiplayer co-op FPS survival prototype built in Unity.",
  logo: "/project-vr.svg",
  tools: ["Unity", "C#", "Netcode for GameObjects"],
  link: "https://github.com/Yorgi11/Zombie-TD",
  link2: "",
}
```

## Navigation

The navigation bar includes:

- Home
- About
- Contact
- Projects

The Home, About, and Contact buttons scroll to sections on the homepage. The Projects button navigates to the Projects page.

Scroll positioning can be adjusted in `Navbar.jsx`:

```js
const sectionOffsets = {
  hero: 120,
  about: 140,
  contact: 140,
};
```

Increase a value to stop the scroll position higher above that section. Decrease it to scroll closer to the section.

## Styling

Global styling is handled in:

```txt
src/styles.css
```

The site uses CSS variables for colors, surfaces, borders, shadows, radius values, and layout widths.

Example:

```css
:root {
  --page: #2d3a58;
  --surface: #2b3b5e;
  --surface-2: #1e293b;
  --text: #f8fafc;
  --muted: #cbd5e1;
  --border: #334155;
  --primary: #38bdf8;
}
```

## Asset Management

Place static images, logos, and icons in the `public/` folder.

Reference them like this:

```js
logo: "/project-logo.svg";
```

Do not include `public` in the path.

Correct:

```js
"/project-logo.svg";
```

Incorrect:

```js
"/public/project-logo.svg";
```

## Current Project Showcase

The portfolio currently includes project entries for:

- Zombie TD
- Digital Development Institute Website
- Elevator Panic
- Adventure Quest
- ApkAutoInstaller

## Deployment

This project can be deployed to any static hosting provider that supports Vite builds, such as:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

## Purpose

This portfolio is meant to serve as a professional project showcase for software development, web development, and game development work. It is structured to be easy to update, easy to deploy, and simple enough to maintain without relying on unnecessary external systems.

## Author

Michael Giorgi

- GitHub: https://github.com/Yorgi11
- LinkedIn: https://www.linkedin.com/in/michael-giorgi-7641a4265/
- Email: michael.giorgi11@gmail.com
