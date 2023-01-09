import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact_info_box">
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
    </div>
  );
};

export default ContactInfo;
