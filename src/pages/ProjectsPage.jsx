import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../config/siteConfig.js";

export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="section page-heading">
        <p className="eyebrow">Projects</p>
        <h1>Project Showcase</h1>
        <p>
          This page is generated from the projects array in
          <code> src/config/siteConfig.js</code>. Add a title, description, logo,
          and link there, and the card layout updates automatically.
        </p>
      </section>

      <section className="project-grid" aria-label="Project list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
