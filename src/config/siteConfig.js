export const siteConfig = {
  logo: "/MG-Portfolio_logo.png",
  heroLogo: "/ProfilePic.png",
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
    title: "Contact Me",
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
  /*
  {
    title: "",
    description:
      "",
    logo: "",
    link: "",
    link2: "", // optional
  },
  */
  {
    title: "Zombie TD",
    description:
      "A multiplayer co-op FPS survival prototype built in Unity, featuring lobby-based online sessions, server-authoritative movement and combat, wave-based zombie spawning, pooled enemies, player scoring, death/respawn flow, and HUD systems. The project serves as a playable foundation for a larger zombie defense game with future support for buildable defenses, upgrades, and expanded enemy variety.",
    logo: "/Zombie-TD_logo.png",
    tools: ["Unity", "C#", "Netcode for GameObjects"],
    link: "https://github.com/Yorgi11/Zombie-TD",
    link2: "",
  },
  {
    title: "Michael Giorgi Portfolio Website (This Website)",
    description:
      "A lightweight React and Vite portfolio website built to showcase software, web, and game development projects. The site includes a homepage with hero, about, and contact sections, a dedicated projects page, config-driven project cards, reusable components, responsive CSS styling, and a simplified structure without authentication, payments, dashboards, or backend services.",
    logo: "/MG-Portfolio_logo.png",
    tools: ["React", "Vite", "HTML", "CSS"],
    link: "https://github.com/Yorgi11/MG-Portfolio-website",
    link2: "",
  },
  {
    title: "Digital Development Institute Website",
    description:
      "A React-based website and student portal for Digital Development Institute, featuring public program pages, account creation, protected enrollment flows, Supabase-backed profile data, payment tracking, student dashboard access, and admin tools for managing program progression.",
    logo: "/DDI_logo.png",
    tools: [
      "React",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "Cloudflare Functions",
      "Wrangler",
      "Stripe",
    ],
    link: "https://github.com/Yorgi11/ddi-website",
    link2: "https://digitaldevinstitute.com/",
  },
  {
    title: "ApkAutoInstaller",
    description:
      "A lightweight Electron desktop utility for quickly installing APK files onto connected Android devices through ADB. The app provides a simple GUI for selecting APK files, running the install command, validating bundled platform-tools, and returning clear success or failure feedback without needing to manually use the terminal.",
    logo: "/APKAutoInstaller-icon.ico",
    tools: ["Electron", "JavaScript", "HTML", "CSS", "Android platform-tools"],
    link: "https://github.com/Yorgi11/ApkAutoInstaller",
    link2: "",
  },
  {
    title: "Elevator Panic",
    description:
      "A standalone Windows C++17 arcade prototype where players manage an elevator across six floors, pick up and drop off passengers, balance passenger capacity, earn score for successful deliveries, and avoid losing lives when waiting passengers run out of patience.",
    logo: "/project-elevator-panic.svg",
    tools: ["C++17", "VS Code"],
    link: "https://github.com/Yorgi11/ElevatorPanic",
    link2: "",
  },
  {
    title: "Adventure Quest",
    description:
      "A Rust-based voxel project built around a modular workspace architecture, featuring 32x32x32 flat chunk storage, signed infinite chunk coordinates, world-to-chunk conversion, subchunk occupancy masks, block editing, revision tracking, and a playable first-person test client with movement and block placement controls.",
    logo: "/AQ_Logo.png",
    tools: ["Rust", "Cargo", "VS Code", "rust-analyzer", "CodeLLDB"],
    link: "https://github.com/Yorgi11/adventure_quest_proj",
    link2: "",
  },
];
