import React, { useState } from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaEnvelope,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import { scrollIntoSection } from "../utils/common";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: "intro", icon: <FaHome />, label: "Home" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "portfolio", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const Dock = () => {
  const [hovered, setHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50; // Threshold to detect bottom

      setIsVisible(!scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (id) => {
    if (id === "portfolio") {
      navigate("/projects");
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        // Give time for navigation to complete before scrolling
        setTimeout(() => {
          scrollIntoSection(id);
        }, 100);
      } else {
        scrollIntoSection(id);
      }
    }
  };

  return (
    <motion.div
      className="dock-container"
      initial={{ x: "-50%", y: 0, opacity: 1 }}
      animate={{
        x: "-50%",
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div className="dock">
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            className="dock-item"
            onHoverStart={() => setHovered(item.id)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => handleNavItemClick(item.id)}
            whileHover={{ scale: 1.2, y: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="icon">{item.icon}</span>
            <AnimatePresence>
              {hovered === item.id && (
                <motion.span
                  className="label"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -40 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;
