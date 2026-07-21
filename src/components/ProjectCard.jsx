import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  return (
    <Link to={`/portfolio/${project.id}`} className="project-card">
      <div className="project-card-top">
        <span className="project-card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-card-year">{project.year}</span>
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-tagline">{project.tagline}</p>

      <div className="project-card-tags">
        {project.tech.slice(0, 3).map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <span className="project-card-link">View project →</span>
    </Link>
  );
}

export default ProjectCard;
