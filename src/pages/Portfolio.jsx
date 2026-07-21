import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="container section portfolio-page">
      <p className="eyebrow">portfolio</p>
      <h1>Projects I've built.</h1>
      <p className="portfolio-intro">
        Each of these was built to practice a different piece of the React
        ecosystem — routing, state, forms, and working with data. Click a
        project to read more about how it was built.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
