import React, { useState } from "react";
import "./style.scss";

const filtersData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Products",
    id: "product",
  },
  {
    name: "Web Pages",
    id: "web-page",
  },
  {
    name: "Web Apps",
    id: "web-app",
  },
  {
    name: "Mobile Apps",
    id: "mobile-app",
  },
];

const Filters = ({ filterProjects }) => {
  const [active, setActive] = useState("all");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  return (
    <ul className="filter_menu_items">
      {filtersData.map((item) => (
        <li
          className={`filter_menu_item ${active === item.id ? "active" : ""}`}
          key={item.id}
          onClick={() => clickHandler(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
