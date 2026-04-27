import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { siteConfig } from "../config/siteConfig.js";

export default function HomePage() {
  const { hero, about, contact } = siteConfig;

  return (
    <div className="page">
      <section id="hero" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 style={{ marginBottom: "10rem" }}>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="button-row">
            <Link className="button button-primary" to={hero.primaryAction.to}>
              {hero.primaryAction.label}
            </Link>
            <Link
              className="button button-secondary"
              to={hero.secondaryAction.to}
            >
              {hero.secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="Portfolio highlights">
          <div className="hero-panel-card">
            <span className="stat-value">Unity</span>
            <span className="stat-label">Gameplay + XR</span>
          </div>
          <div className="hero-panel-card">
            <span className="stat-value">C#</span>
            <span className="stat-label">Tools + Systems</span>
          </div>
          <div className="hero-panel-card">
            <span className="stat-value">React</span>
            <span className="stat-label">Web Interfaces</span>
          </div>
        </div>
      </section>

      <Section
        id="about"
        eyebrow="About"
        title={about.title}
        description={about.description}
      >
        <div className="detail-grid">
          {about.details.map((detail) => (
            <div className="detail-card" key={detail}>
              {detail}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title={contact.title}
        description={contact.description}
      >
        <div className="contact-card">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}
