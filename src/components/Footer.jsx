import { siteConfig } from "../config/siteConfig.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {siteConfig.title}</span>
        <span>Built as a lightweight React portfolio.</span>
      </div>
    </footer>
  );
}
