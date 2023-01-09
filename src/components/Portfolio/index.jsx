import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/Section";
import Filters from "./filters";
import Showcase from "./showcase";

const projectsData = [
  {
    id: 1,
    name: "Blog App - Firebase",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/blog App.png"),
    },
    url:"https://blog-app-next.netlify.app/"
  },
  {
    id: 2,
    name: "User-Management-System-Geektrust",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/usermanagement-system.png"),
    },
    url:"https://admin-panel-react-geektrust.netlify.app/"
  },
  {
    id: 3,
    name: "User-Management-System",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/user.png"),
    },
    url:"https://user-managemen-app-react.netlify.app/"
  },
  {
    id: 4,
    name: "Netflix-Clone-React-Firebase",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/netflix.png"),
    },
    url:"https://netflix-clone-react-tailwind.netlify.app/"
  },
  {
    id: 5,
    name: "Teerex Ecommerce Store",
    tags: ["web-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/teerex.png"),
    },
    url:"https://teerex-store-ecommerce-geektrust.netlify.app/"
  },
  // {
  //   id: 6,
  //   name: "Dashboard",
  //   tags: ["product", "web-app", "mobile-app"],
  //   media: {
  //     thumbnail: require("../../images/portfolio/thumb-4.jpg"),
  //   },
  // },
  // {
  //   id: 7,
  //   name: "Digital Creative Agency",
  //   tags: ["web-app"],
  //   media: {
  //     thumbnail: require("../../images/portfolio/thumb-3.jpg"),
  //   },
  // },
  // {
  //   id: 8,
  //   name: "Virtual Reality Experience",
  //   tags: ["web-app", "mobile-app", "web-page"],
  //   media: {
  //     thumbnail: require("../../images/portfolio/thumb-5.jpg"),
  //   },
  // },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout")
    setTimeout(() => {
      if (tag !== "all") {
        const filteredData = projectsData.filter((data) =>
          data.tags.includes(tag)
        );
        setProjects(filteredData);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin")
    }, 200);

    setTimeout(() => {
      setTransition(false)
    }, 600);
  };

  return (
    <Section id="portfolio" title="Check My Portfolio" background="light" className="portfolio">
      <div className="portfolio">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;
