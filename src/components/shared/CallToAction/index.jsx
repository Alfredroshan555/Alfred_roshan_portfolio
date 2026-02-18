import React from "react";
import "./style.scss";
import { motion } from "framer-motion";

const CallToAction = ({ text, className, onClick }) => {
  return (
    <motion.div
      className={`call_to_Action ${className || ""}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.div>
  );
};

export default CallToAction;
