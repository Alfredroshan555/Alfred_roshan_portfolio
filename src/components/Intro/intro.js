import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { highlights } from "../../data";
import "./style.scss";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const Intro = () => {
  return (
    <section className="hero" id="intro">
      <div className="container">
        <motion.p className="eyebrow" {...fadeUp(0)}>
          AI-Native Full-Stack Engineer
        </motion.p>

        <motion.h1 {...fadeUp(0.08)}>
          Alfred Roshan
          <br />
          I build web and AI products
          <br />
          <span className="accent">that ship fast.</span>
        </motion.h1>

        {/* <motion.p className="lead" {...fadeUp(0.16)}>
          I build full-stack products with React, Node.js and the cloud, and
          use LLMs, AI coding tools and agentic workflows at every step, from
          development to deployment and delivery.
        </motion.p> */}

        <motion.div className="actions" {...fadeUp(0.24)}>
          <a href="#contact" className="btn btn-primary">
            Get in touch <FiArrowRight />
          </a>
          <a href="#workflow" className="btn btn-ghost">
            How I work
          </a>
        </motion.div>

        <motion.ul className="highlights" {...fadeUp(0.32)}>
          {highlights.map((h) => (
            <li key={h}>
              <FiCheck className="accent" /> {h}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Intro;
