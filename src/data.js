import schedulerThumb from "./images/scheduler.webp";
import userMgmtThumb from "./images/portfolio/usermanagement-system.png";
import teerexThumb from "./images/portfolio/teerex.png";
import netflixThumb from "./images/portfolio/netflix.png";
import mingmorselThumb from "./images/portfolio/mingmorsel.png";
import babyThumb from "./images/portfolio/baby.png";

export const profile = {
  name: "Alfred Roshan",
  role: "AI-Native Full-Stack Engineer",
  email: "alfredroshan555@gmail.com",
  phone: "+91 9048131255",
  location: "Kochi, Kerala, India",
  github: "https://github.com/Alfredroshan555/",
  linkedin: "https://www.linkedin.com/in/alfred-roshan-698913195/",
  resume: "/Alfred_roshan_resume.pdf",
};

export const highlights = [
  "5+ years shipping production apps",
  "LLMs & agents from prototype to production",
  "Based in Kochi, open to remote",
];

export const stack = [
  {
    title: "AI & LLMs",
    items: [
      "Claude & OpenAI APIs",
      "AI agents & tool calling",
      "MCP servers",
      "RAG & vector search",
      "Prompt engineering & evals",
    ],
  },
  {
    title: "AI dev tools",
    items: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Agentic code review",
      "AI-assisted testing",
    ],
  },
  {
    title: "Full stack",
    items: ["React & Next.js", "TypeScript", "Node.js & NestJS", "Vue.js", "REST APIs"],
  },
  {
    title: "Data & cloud",
    items: ["MongoDB", "PostgreSQL", "AWS & Azure", "Firebase", "CI/CD"],
  },
];

// How AI shows up at each stage of delivery.
export const workflow = [
  {
    step: "Plan",
    title: "Spec with AI in the loop",
    desc: "I turn a fuzzy brief into a written spec, architecture notes and a task plan, using LLMs to explore options and poke holes before any code exists.",
  },
  {
    step: "Build",
    title: "Agentic development",
    desc: "Coding agents like Claude Code and Cursor handle scaffolding, refactors and repetitive work in parallel, while I own the architecture and review every diff.",
  },
  {
    step: "Verify",
    title: "Tests, reviews & evals",
    desc: "AI-generated tests, automated code review and LLM evals catch regressions early, so moving fast doesn't mean shipping bugs.",
  },
  {
    step: "Ship",
    title: "Deploy & deliver",
    desc: "CI/CD pipelines, cloud deploys and AI-written docs and release notes get features from merged to live, then I monitor and iterate.",
  },
];

export const experience = [
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
    tech: ["React", "Next.js", "Redux Toolkit", "NestJS", "MongoDB", "PostgreSQL", "Ant Design"],
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

export const projects = [
  {
    id: 1,
    name: "Personal Task Scheduler",
    thumbnail: schedulerThumb,
    url: "https://github.com/Alfredroshan555/Personal-Task-Scheduler",
    description:
      "A full-stack app that lets users create and manage tasks, set reminders, and track their progress.",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    name: "Financial Audit Management",
    thumbnail: userMgmtThumb,
    url: "https://github.com/Alfredroshan555",
    description:
      "Audit management platform with secure workflows, compliance tracking, and real-time collaboration.",
    tech: ["Vue.js", "Node.js", "CosmosDB", "Azure"],
  },
  {
    id: 3,
    name: "EV Charging App Backend",
    thumbnail: teerexThumb,
    url: "https://github.com/Alfredroshan555",
    description:
      "Backend for EV charging station management with real-time availability and payment processing.",
    tech: ["NestJS", "PostgreSQL", "TypeScript"],
  },
  {
    id: 4,
    name: "Netflix Clone",
    thumbnail: netflixThumb,
    url: "https://netflix-clone-react-tailwind.netlify.app/",
    description:
      "A feature-rich Netflix clone with movie trailers and user authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "MingMorsel",
    thumbnail: mingmorselThumb,
    url: "https://github.com/Alfredroshan555",
    description:
      "A food delivery app with real-time order tracking and secure payments.",
    tech: ["React Native", "Node.js", "Firebase", "Stripe"],
  },
  {
    id: 6,
    name: "BabyGuard Monitor",
    thumbnail: babyThumb,
    url: "https://github.com/Alfredroshan555",
    description:
      "An AI-powered baby monitor with sleep tracking and sound detection alerts.",
    tech: ["React Native", "Python", "MQTT", "OpenCV"],
  },
];
