import React from "react";
import { stack } from "../../data";
import "./style.scss";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Full-stack engineer, AI native.</h2>
        </div>

        <div className="about-body">
          <p>
            I'm a full-stack software engineer with{" "}
            <strong>5+ years</strong> of experience building high-performing
            web applications with React, Next.js, Node.js and NestJS, backed by
            MongoDB and PostgreSQL and deployed to AWS, Azure and Firebase.
          </p>
          <p>
            Today I work <strong>AI native</strong>: I build features on top of
            LLMs, wire up agents with tool calling and MCP, and run my own
            delivery through agentic workflows, with coding agents for
            development, AI-assisted testing and review, and automated
            pipelines to ship. The result is the same production quality,
            delivered a lot faster.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="stack-grid">
          {stack.map((group, i) => (
            <div className="stack-cell" key={group.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
