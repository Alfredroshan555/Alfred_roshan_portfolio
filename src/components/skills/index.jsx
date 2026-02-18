import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiMicrosoftazure,
  SiTypescript,
  SiNestjs,
  SiVuedotjs,
} from "react-icons/si";

import Section from "../shared/Section";
import "./style.scss";

const skillsData = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Azure", icon: <SiMicrosoftazure />, color: "#007FFF" },
];

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills_container">
        <div className="content_wrapper">
          <motion.div
            className="text_col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Tech Stack & Expertise</h2>
            <p>
              I specialize in building scalable, high-performance web
              applications using the MERN stack and modern cloud technologies.
              My expertise extends from frontend pixel-perfection with
              React/Next.js to robust backend systems with Node.js/NestJS and
              cloud infrastructure.
            </p>
            <div className="glass-card badge-container">
              <span>Frontend Architecture</span>
              <span>Microservices</span>
              <span>Cloud Native</span>
              <span>API Design</span>
            </div>
          </motion.div>

          <motion.div
            className="grid_col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="skills_grid">
              {skillsData.map((skill, index) => (
                <motion.div
                  className="skill_item glass"
                  key={skill.name}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}40`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
