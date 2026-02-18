import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./style.scss";

const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Experion Technologies",
    location: "Kochi",
    period: "Aug 2024 – Present",
    desc: [
      "Led full-stack rewrite of a large-scale sustainability report management platform using Next.js and Node.js",
      "Designed microservices architecture and RESTful APIs with optimized MongoDB queries",
      "Achieved 50% faster page loads through performance optimization",
      "Built ESG data pipelines, dashboards, and EV charging app backend using NestJS and PostgreSQL",
    ],
    tech: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Ant Design",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Orion Innovations",
    location: "Kochi",
    period: "Apr 2024 – Aug 2024",
    desc: [
      "Built financial audit management system with Vue.js, Node.js, and Azure CosmosDB",
      "Implemented secure audit workflows and compliance tracking features",
      "Created real-time collaboration dashboards for audit teams",
    ],
    tech: ["Vue.js", "Node.js", "CosmosDB", "Azure"],
  },
  {
    id: 3,
    role: "Software Engineer II",
    company: "Infoniz Technologies",
    location: "Kochi",
    period: "Jan 2023 – Mar 2024",
    desc: [
      "Built scalable React + Redux + TypeScript frontend for complex microservices web app",
      "Handled complex form validation using React Hook Forms",
      "Developed comprehensive API documentation and integration guides",
    ],
    tech: ["React", "Redux Toolkit", "TypeScript", "Material UI", "Azure"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Repustar Pvt Ltd",
    location: "Remote",
    period: "Sep 2022 – Dec 2022",
    desc: [
      "Worked on a fact-checking web application",
      "Implemented UI designs and core functionalities",
      "Integrated fact-checking APIs into the frontend",
    ],
    tech: ["React", "REST APIs"],
  },
  {
    id: 5,
    role: "Junior Software Engineer",
    company: "Reveation Labs",
    location: "Ahmedabad",
    period: "Oct 2021 – Sep 2022",
    desc: [
      "Developed responsive web apps using React, Vue, Next.js, and Nuxt.js",
      "Built cross-platform iOS/Android mobile apps using Ionic + Capacitor.js",
      "Collaborated on backend services using Node.js and Firebase",
    ],
    tech: ["React", "Vue", "Next.js", "Node.js", "Firebase", "AWS", "MongoDB"],
  },
  {
    id: 6,
    role: "Full-Stack Developer Intern",
    company: "Quest Innovative Solutions",
    location: "Kochi",
    period: "Jan 2021 – Oct 2021",
    desc: [
      "Built RESTful APIs with Node.js and Python for internal tools",
      "Developed frontend components using React and Angular",
      "Participated in agile development cycles and code reviews",
    ],
    tech: ["JavaScript", "React", "Angular", "Python"],
  },
  {
    id: 7,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2020 – Oct 2021",
    desc: [
      "Worked on multiple projects using React, Vue, and Node.js",
      "Created UI elements, landing pages, and e-commerce portals for small-scale businesses",
    ],
    tech: ["React", "Vue.js", "Node.js"],
  },
];

const WorkExperience = () => {
  const [expandedId, setExpandedId] = useState(1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="work-experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Work Experience</h2>
          <p>My professional journey in software development</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`timeline-item ${expandedId === item.id ? "active" : ""}`}
              onClick={() => toggleExpand(item.id)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <div className="content-header">
                  <div className="role-company">
                    <h3>{item.role}</h3>
                    <div className="company-info">
                      <FaBriefcase className="icon" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                  <div className="period-toggle">
                    <span className="period">{item.period}</span>
                    <span className="toggle-icon">
                      {expandedId === item.id ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </div>
                </div>

                <div className="location-mobile">
                  <FaCalendarAlt className="icon" />
                  <span>
                    {item.location} | {item.period}
                  </span>
                </div>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="content-details"
                    >
                      <ul>
                        {item.desc.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="tech-tags">
                        {item.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
