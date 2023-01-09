import React from "react";
import "./style.scss";

const Showcase = ({ data, transition }) => {
  return (
    <div className="project_showcase">
      {data.map((project) => {
        return (
          <div
          key={project.name}
            className={`showcase_item ${
              transition === "zoomout"
                ? "zoomOut"
                : transition === "zoomin"
                ? "zoomIn"
                : ""
            }`}
          >
            <div className="meta_content" onClick={()=> {
              window.open(project.url,'_blank');
            }}>
              <h3>{project.name}</h3>
              {/* <div className="go_to_project">
                <span className="text">Project Details</span>
              </div> */}
            </div>
            <img src={project.media.thumbnail} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Showcase;
