export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-logo-wrap">
        <img className="project-logo" src={project.logo} alt={`${project.title} logo`} />
      </div>

      <div className="project-card-body">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <a
        className="project-link"
        href={project.link}
        target={project.link?.startsWith("http") ? "_blank" : undefined}
        rel={project.link?.startsWith("http") ? "noreferrer" : undefined}
      >
        View Project
      </a>
    </article>
  );
}
