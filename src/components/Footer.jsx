import { siteConfig } from "../config/siteConfig.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {siteConfig.title}
        </span>
        <span>
          <a href={siteConfig.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span> | </span>
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
