import React, { useEffect } from "react";
import "./style.scss";
import Section from "../shared/Section";
import Showcase from "./showcase";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import schedulerThumb from "../../images/scheduler.jpg";
import userMgmtThumb from "../../images/portfolio/usermanagement-system.png";
import teerexThumb from "../../images/portfolio/teerex.png";
import netflixThumb from "../../images/portfolio/netflix.png";
import mingmorselThumb from "../../images/portfolio/mingmorsel.png";
import babyThumb from "../../images/portfolio/baby.png";

const projectsData = [
  {
    id: 1,
    name: "Personal Task Scheduler",
    tags: ["Full Stack", "React Native", "Node.js", "Native App"],
    media: {
      thumbnail: schedulerThumb,
    },
    url: "https://github.com/Alfredroshan555/Personal-Task-Scheduler",
    description:
      "Personal Task Scheduler is a full-stack application that allows user to create and manage their tasks, set reminders, and track their progress.",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    name: "Financial Audit Management System",
    tags: ["Vue.js", "Azure", "CosmosDB"],
    media: {
      thumbnail: userMgmtThumb,
    },
    url: "https://github.com/Alfredroshan555",
    description:
      "Comprehensive audit management platform with secure workflows, compliance tracking, and real-time collaboration features.",
    tech: ["Vue.js", "Node.js", "CosmosDB", "Azure"],
  },
  {
    id: 3,
    name: "EV Charging App Backend",
    tags: ["Backend", "NestJS", "PostgreSQL"],
    media: {
      thumbnail: teerexThumb,
    },
    url: "https://github.com/Alfredroshan555",
    description:
      "Scalable backend service for EV charging station management with real-time availability tracking and payment processing.",
    tech: ["NestJS", "PostgreSQL", "TypeScript", "REST API"],
  },
  {
    id: 4,
    name: "Netflix Clone",
    tags: ["React", "Firebase"],
    media: {
      thumbnail: netflixThumb,
    },
    url: "https://netflix-clone-react-tailwind.netlify.app/",
    tech: ["React", "Firebase", "Tailwind CSS"],
    description:
      "A feature-rich Netflix clone with movie trailers and user authentication.",
  },
  {
    id: 5,
    name: "MingMorsel",
    tags: ["Mobile", "Food Delivery"],
    media: {
      thumbnail: mingmorselThumb,
    },
    url: "https://github.com/Alfredroshan555",
    description:
      "A modern food delivery application with real-time order tracking and secure payments.",
    tech: ["React Native", "Node.js", "Firebase", "Stripe"],
  },
  {
    id: 6,
    name: "BabyGuard Monitor",
    tags: ["IoT", "Real-time"],
    media: {
      thumbnail: babyThumb,
    },
    url: "https://github.com/Alfredroshan555",
    description:
      "An AI-powered baby monitoring system with sleep tracking and sound detection alerts.",
    tech: ["React Native", "Python", "MQTT", "OpenCV"],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section
      id="portfolio"
      title="Projects & Products"
      description="A showcase of full-stack applications, microservices, and specialized software products."
      background="dark"
      className="portfolio_page"
    >
      <motion.div
        className="portfolio_header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="back_link" onClick={() => navigate("/")}>
          <span>← Back to Home</span>
        </div>
      </motion.div>

      <div className="portfolio_content">
        <Showcase data={projectsData} />
      </div>

      <motion.div
        className="portfolio_footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Want to see more? Check out my{" "}
          <a
            href="https://github.com/Alfredroshan555"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </motion.div>
    </Section>
  );
};

export default Portfolio;
