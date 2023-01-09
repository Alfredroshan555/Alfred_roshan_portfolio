import React from "react";
import "./style.scss";
import Section from "../shared/Section";
import ContactInfo from "./contact-info";
import Form from "./form";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Any Question ? Feel free to Contact"
      background="light"
    >
      <div className="contact_content_wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
