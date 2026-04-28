import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { siteConfig } from "../config/siteConfig.js";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const sectionOffsets = {
    hero: 0,
    about: 140,
    contact: 140,
  };

  function scrollToSection(sectionId) {
    const offset = sectionOffsets[sectionId] ?? 100;

    const doScroll = () => {
      const element = document.getElementById(sectionId);

      if (!element) return;

      const y = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 50);
    } else {
      doScroll();
    }
  }

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link className="brand" to="/" aria-label="Go to homepage">
          <div className="brand-logo-wrap">
            <img
              className="brand-logo"
              src={siteConfig.heroLogo}
              alt="Site logo"
            />
          </div>
          <div className="brand-copy">
            <span className="brand-title">{siteConfig.title}</span>
            <span className="brand-subtitle">{siteConfig.subtitle}</span>
          </div>
        </Link>

        <nav className="nav-tabs" aria-label="Main navigation">
          <button className="nav-tab" onClick={() => scrollToSection("hero")}>
            Home
          </button>

          <button className="nav-tab" onClick={() => scrollToSection("about")}>
            About
          </button>

          <button
            className="nav-tab"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-tab nav-tab-active" : "nav-tab"
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
