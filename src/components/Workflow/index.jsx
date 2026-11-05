import React from "react";
import { workflow } from "../../data";
import "./style.scss";

const Workflow = () => {
  return (
    <section className="section workflow" id="workflow">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How I work</p>
          <h2>
            Agentic workflows, <span className="accent">idea to production.</span>
          </h2>
          <p>
            AI is part of every stage of my delivery, not a side tool. Agents do
            the heavy lifting, and I stay accountable for the architecture,
            quality and outcome.
          </p>
        </div>

        <ol className="steps">
          {workflow.map((s, i) => (
            <li className="step" key={s.step}>
              <span className="step-label">
                Step {i + 1} · {s.step}
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Workflow;
