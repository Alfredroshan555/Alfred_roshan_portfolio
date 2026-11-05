import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, profile } from "../../data";
import "./style.scss";

const ProjectCard = ({ project, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={`thumb ${loaded ? "loaded" : ""}`}>
        <img
          src={project.thumbnail}
          alt={project.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="meta">
        <div className="title-row">
          <span className="num">{String(index + 1).padStart(2, "0")}</span>
          <h3>{project.name}</h3>
          <FiArrowUpRight className="arrow" />
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.tech.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-head">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <a
            className="btn btn-ghost btn-sm"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <FiArrowUpRight />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
