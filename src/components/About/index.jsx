import React from "react";
import { stack } from "../../data";
import "./style.scss";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Engineer first, product minded.</h2>
        </div>

        <div className="about-body">
          <p>
            I'm a full-stack software engineer with <strong>10 year</strong> of
            hands-on experience building high-performing web applications,
            mostly with React and Redux on the front end.
          </p>
          <p>
            On the back end I work with Node.js (Express and NestJS), MongoDB
            and PostgreSQL, and deploy to Firebase, AWS and Azure. I care about
            clean architecture, fast pages and shipping things people actually
            use.
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
