import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className="contact_info_box"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4>
        I would be happy to answer any questions you may have about freelance
        web development !!
      </h4>
      <div className="contact_option">
        <FaPhoneAlt />
        <span className="text">+91 9048131255</span>
      </div>
      <div className="contact_option">
        <MdEmail />
        <span className="text">alfredroshan555@gmail.com</span>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
