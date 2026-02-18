import React from "react";
import "./style.scss";
import Section from "../shared/Section";
import Showcase from "./showcase";

const projectsData = [
  {
    id: 1,
    name: "ESG Sustainability Platform",
    tags: ["Full Stack", "Next.js", "Node.js"],
    media: {
      // Using existing placeholder if available, else text will fallback or breaks. I should use a safe path or just text if image fails. The user had some thumb-4.jpg commented out. I'll assume standard naming or use a generic holder.
      // actually, let's use a reliable placeholder service if local images are missing, or repeat existing ones.
      // Since I can't verify local files existence easily for all variants, and I saw thumb-4.jpg in comments, I'll try to use what was there or the blog/netflix ones as placeholders for now.
      thumbnail: require("../../images/portfolio/blog App.png"),
    },
    url: "https://github.com/Alfredroshan555", // Placeholder URL
    description:
      "Large-scale sustainability report management platform with ESG data pipelines, analytics dashboards, and compliance tracking.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redux", "Ant Design"],
  },
  {
    id: 2,
    name: "Financial Audit Management System",
    tags: ["Vue.js", "Azure", "CosmosDB"],
    media: {
      thumbnail: require("../../images/portfolio/usermanagement-system.png"),
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
      thumbnail: require("../../images/portfolio/teerex.png"),
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
      thumbnail: require("../../images/portfolio/netflix.png"),
    },
    url: "https://netflix-clone-react-tailwind.netlify.app/",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
];

const Portfolio = () => {
  return (
    <Section
      id="portfolio"
      title="Featured Projects"
      description="Notable projects I've worked on throughout my career"
      background="light"
      className="portfolio"
    >
      <div className="portfolio">
        <Showcase data={projectsData} />
      </div>
    </Section>
  );
};

export default Portfolio;
