import React from "react";
import { motion } from "framer-motion";

const SocialIcon = ({ color, icon, link }) => {
  return (
    <motion.div
      className="social-icon"
      style={{ backgroundColor: color }}
      onClick={() => {
        window.open(link, "_blank");
      }}
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.div>
  );
};

export default SocialIcon;
