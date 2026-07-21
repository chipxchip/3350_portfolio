import { useParams, Link, Navigate } from "react-router-dom";
import projects from "../data/projects.js";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="container section project-detail">
      <Link to="/portfolio" className="project-detail-back">
        ← Back to all projects
      </Link>

      <div className="project-detail-head">
        <p className="eyebrow">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="project-detail-tagline">{project.tagline}</p>

        <div className="project-detail-tags">
          {project.tech.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="project-detail-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live demo →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View code →
              </a>
            )}
          </div>
        )}
      </div>

      <div className="project-detail-body">
        <section>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        <section>
          <h2>Key features</h2>
          <ul className="project-detail-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail-meta">
          <div>
            <span className="project-detail-meta-label">Role</span>
            <span>{project.role}</span>
          </div>
          <div>
            <span className="project-detail-meta-label">Year</span>
            <span>{project.year}</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetail;
