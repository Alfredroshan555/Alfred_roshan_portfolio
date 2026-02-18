import React from "react";
import "./style.scss";
// import banner from "../../../images/alfred.jpg";
import { scrollIntoSection } from "../../utils/common";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const IntroContent = () => {
  return (
    <div className="intro_content">
      <div className="layout centered-layout">
        <motion.div
          className="center_col"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <motion.div className="title" variants={titleVariants}>
            <motion.div className="small_text" variants={itemVariants}>
              FULL-STACK SOFTWARE ENGINEER
            </motion.div>
            <motion.h1 className="big_text" variants={itemVariants}>
              <span className="gradient-text">Alfred Roshan</span>
            </motion.h1>
          </motion.div>

          <motion.p variants={itemVariants} className="description">
            Building high-performing web applications with{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Node.js</span>, and{" "}
            <span className="highlight">Cloud Technologies</span>
          </motion.p>

          <motion.div className="btn-wrapper" variants={itemVariants}>
            <div
              className="primary-btn"
              onClick={() => scrollIntoSection("about")}
            >
              About Me
            </div>

            <div
              className="secondary-btn"
              onClick={() => scrollIntoSection("contact")}
            >
              <span className="icon">✉️</span> Contact Me
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroContent;
