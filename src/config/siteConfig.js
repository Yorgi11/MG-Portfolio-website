export const siteConfig = {
  logo: "/logo.svg",
  title: "Michael Giorgi",
  subtitle: "Software Development • Web Development • Game Development",

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
  },

  about: {
    title: "About Me",
    description:
      "I am a game and software developer with a strong focus on Unity, C#, gameplay systems, networking, UI tooling, XR experiences, and performance-conscious interactive applications. I enjoy building systems from the ground up, turning rough ideas into functional prototypes, and refining them into clean, usable products.",
    details: [
      "Unity, C#, C++, Rust, JavaScript, HTML, CSS, and Python experience.",
      "Gameplay programming, tools development, UI systems, multiplayer architecture, and XR interaction work.",
      "Comfortable owning full features end-to-end, from architecture and implementation to testing and polish.",
    ],
  },

  contact: {
    title: "Contact",
    description:
      "Reach out for software development, game development, interactive media, or project collaboration opportunities.",
    email: "michael.giorgi11@gmail.com",
    github: "https://github.com/Yorgi11",
    linkedin: "https://www.linkedin.com/in/michael-giorgi-7641a4265/",
  },
};

// Add, remove, or edit projects here.
// The Projects page automatically renders every item in this array.
export const projects = [
  {
    title: "VR Reminiscence Therapy Platform",
    description:
      "A Unity-based XR therapy platform for Meta Quest 3 featuring virtual environments, interactive image viewing, media playback, and cognitive stimulation activities.",
    logo: "/project-vr.svg",
    link: "#",
  },
  {
    title: "Server-Authoritative Multiplayer Prototype",
    description:
      "A multiplayer gameplay architecture prototype using client prediction, server snapshots, reconciliation, and authoritative gameplay event handling.",
    logo: "/project-networking.svg",
    link: "#",
  },
  {
    title: "RapidUI Toolkit",
    description:
      "A modular Unity UI toolkit focused on drag-and-drop interface construction, reusable components, and fast iteration for game menus and HUDs.",
    logo: "/project-ui.svg",
    link: "#",
  },
  {
    title: "Procedural Pillar Horror Prototype",
    description:
      "A procedural horror game prototype built around infinite pillar generation, enemy stalking behavior, object pooling, and runtime world management.",
    logo: "/project-game.svg",
    link: "#",
  },
];
