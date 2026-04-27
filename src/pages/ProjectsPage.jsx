import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../config/siteConfig.js";

export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="section page-heading">
        <p className="eyebrow">Projects</p>
        <h1>Project Showcase</h1>
        <p>Below is a list of both completed and in-progress projects.</p>
      </section>

      <section className="project-grid" aria-label="Project list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
