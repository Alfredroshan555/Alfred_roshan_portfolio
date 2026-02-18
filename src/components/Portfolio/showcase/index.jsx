import React from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";

const Showcase = ({ data, transition }) => {
  return (
    <motion.div layout className="project_showcase">
      <AnimatePresence>
        {data.map((project) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="showcase_item glass"
            onClick={() => window.open(project.url, "_blank")}
            whileHover={{ y: -10 }}
          >
            <div className="thumbnail_wrapper">
              <img src={project.media.thumbnail} alt={project.name} />
              <div className="hover_overlay">
                <span className="text">View Project</span>
              </div>
            </div>
            <div className="meta_data">
              <h3>{project.name}</h3>
              {project.description && (
                <p className="description">{project.description}</p>
              )}
              <div className="tech_tags">
                {project.tech?.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Showcase;
