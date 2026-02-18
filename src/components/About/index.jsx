import React from "react";
import { motion } from "framer-motion";
import Section from "../shared/Section";
import "./style.scss";
// import aboutImage from "../../images/about-image.png"; // Placeholder path

const skillsData = [
  { name: "React & Redux", percentage: 95 },
  { name: "Node.js & Express", percentage: 90 },
  { name: "TypeScript", percentage: 88 },
  { name: "MongoDB & PostgreSQL", percentage: 85 },
  { name: "Next.js", percentage: 90 },
  { name: "Cloud Platforms (AWS, Azure)", percentage: 82 },
];

const About = () => {
  return (
    <Section background="dark" id="about">
      <div className="about-content-wrapper">
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="text-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Full-stack Software Engineer with{" "}
              <span className="highlight">5+ years</span> of hands-on experience
              specializing in high-performing web applications through React and
              Redux workflows.
            </p>
            <p>
              Proficient in backend engineering with{" "}
              <span className="highlight-purple">Node.js</span> (Express &
              NestJS) and databases like MongoDB and PostgreSQL, with expertise
              in cloud platforms like Firebase and AWS.
            </p>
          </motion.div>

          <div className="skills-section">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Core Skills
            </motion.h3>
            <div className="skills-list">
              {skillsData.map((skill, index) => (
                <motion.div
                  className="skill-bar-container"
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
