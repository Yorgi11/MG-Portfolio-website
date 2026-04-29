export const siteConfig = {
  logo: "/MG-Portfolio_logo.png",
  heroLogo: "/ProfilePic.png",
  title: "Michael Giorgi",
  subtitle: "Software Development • Web Development • Game Development",

  hero: {
    title: "Michael Giorgi",
    eyebrow: "Software Engineer",
    description:
      "Software, tools, and games built with a focus on clean systems, practical user experiences, and interactive applications. Core work includes Unity gameplay programming, C# tools, web interfaces, multiplayer systems, XR experiences, and full project prototypes.",
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
      "Available for software development, game development, interactive media, and project collaboration opportunities.",
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
    status: "",
    description:
      "",
    logo: "",
    link: "",
    link2: "", // optional
  },
  */
  {
  title: "Zombie TD",
  status: "In Progress",
  description:
    "A Unity co-op FPS survival prototype featuring online multiplayer sessions, server-authoritative movement and combat, wave-based zombie spawning, pooled enemies, scoring, and player respawning.",
  logo: "/Zombie-TD_logo.png",
  tools: ["Unity", "C#", "Netcode for GameObjects"],
  link: "https://github.com/Yorgi11/Zombie-TD",
  link2: "",
},
{
  title: "Michael Giorgi Portfolio Website",
  status: "Completed",
  description:
    "A lightweight React and Vite portfolio website with a responsive homepage, project showcase page, config-driven project cards, reusable components, and simple static deployment.",
  logo: "/MG-Portfolio_logo.png",
  tools: ["React", "Vite", "HTML", "CSS"],
  link: "https://github.com/Yorgi11/MG-Portfolio-website",
  link2: "https://michael-giorgi.dev",
},
{
  title: "Digital Development Institute Website",
  status: "Completed",
  description:
    "A React-based education platform with public program pages, account creation, protected enrollment flows, Supabase profile data, payment tracking, student dashboard access, and admin progression tools.",
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
  status: "Completed",
  description:
    "An Electron desktop utility that simplifies APK installation by providing a GUI for selecting APK files, running ADB install commands, validating platform-tools, and displaying clear install results.",
  logo: "/APKAutoInstaller-icon.ico",
  tools: ["Electron", "JavaScript", "HTML", "CSS", "Android platform-tools"],
  link: "https://github.com/Yorgi11/ApkAutoInstaller",
  link2: "",
},
{
  title: "Elevator Panic",
  status: "Completed",
  description:
    "A standalone C++17 Windows arcade prototype where players manage a six-floor elevator, pick up and drop off passengers, balance capacity, earn score, and avoid losing lives as passenger patience runs out.",
  logo: "/ElevatorPanic_logo.png",
  tools: ["C++17", "VS Code"],
  link: "https://github.com/Yorgi11/ElevatorPanic",
  link2: "",
},
{
  title: "Adventure Quest",
  status: "In Progress",
  description:
    "A Rust voxel engine project featuring modular workspace architecture, 32x32x32 flat chunk storage, infinite signed chunk coordinates, subchunk occupancy masks, block editing, and a first-person test client.",
  logo: "/AQ_Logo.png",
  tools: ["Rust", "Cargo", "VS Code", "rust-analyzer", "CodeLLDB"],
  link: "https://github.com/Yorgi11/adventure_quest_proj",
  link2: "",
},
];
