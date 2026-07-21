import { Link } from "react-router-dom";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Home.css";

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">available for opportunities</p>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-accent">Jeremy</span>.
              <br />I build web apps with React.
            </h1>
            <p className="hero-subtitle">
              I'm a Cybersecurity and Networking major, currently finishing my
              Bachelor's degree at Weber State University while working toward a
              career in cyber, networking, or server administration. This
              portfolio itself is a React app — built and routed with React
              Router as a way to sharpen my development skills alongside my
              cybersecurity focus.
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">
                View my work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="hero-panel-titlebar">
              <span
                className="hero-panel-dot"
                style={{ background: "#EF4444" }}
              />
              <span
                className="hero-panel-dot"
                style={{ background: "#F5A623" }}
              />
              <span
                className="hero-panel-dot"
                style={{ background: "#22C55E" }}
              />
              <span className="hero-panel-filename">developer.js</span>
            </div>
            <pre className="hero-panel-code">
              <span className="code-kw">const</span>{" "}
              <span className="code-var">developer</span> = {"{"}
              {"\n"} name: <span className="code-str">'Jeremy'</span>,{"\n"}{" "}
              stack: [<span className="code-str">'React'</span>,{" "}
              <span className="code-str">'JavaScript'</span>,{" "}
              <span className="code-str">'CSS'</span>],
              {"\n"} role:{" "}
              <span className="code-str">'Frontend Developer'</span>,{"\n"}{" "}
              status: <span className="code-str">'building something new'</span>
              ,{"\n"}
              {"}"}
              <span className="code-punct">;</span>
            </pre>
          </div>
        </div>
      </section>

      <section className="section-tight home-featured">
        <div className="container">
          <div className="home-featured-head">
            <div>
              <p className="eyebrow">selected work</p>
              <h2>A few recent projects</h2>
            </div>
            <Link to="/portfolio" className="btn btn-secondary">
              See all projects →
            </Link>
          </div>

          <div className="project-grid">
            {featured.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
