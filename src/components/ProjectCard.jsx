export default function ProjectCard({ project }) {
  const hasLink2 = project.link2 && project.link2.trim() !== "";
  const hasTools = Array.isArray(project.tools) && project.tools.length > 0;

  return (
    <article className="project-card">
      <div className="project-logo-wrap">
        <img
          className="project-logo"
          src={project.logo}
          alt={`${project.title} logo`}
        />
      </div>
      {project.status && (
        <code className="project-status">{project.status}</code>
      )}
      <div className="project-card-body">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        {hasTools && (
          <div className="project-tools" aria-label={`${project.title} tools`}>
            {project.tools.map((tool) => (
              <code key={tool}>{tool}</code>
            ))}
          </div>
        )}
      </div>

      <div className="project-link-row">
        <a
          className="project-link"
          href={project.link}
          target={project.link?.startsWith("http") ? "_blank" : undefined}
          rel={project.link?.startsWith("http") ? "noreferrer" : undefined}
        >
          View Project
        </a>

        {hasLink2 && (
          <a
            className="project-link"
            href={project.link2}
            target={project.link2.startsWith("http") ? "_blank" : undefined}
            rel={project.link2.startsWith("http") ? "noreferrer" : undefined}
          >
            View Deployment
          </a>
        )}
      </div>
    </article>
  );
}
