import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { profile } from "../../data";
import Form from "./form";
import "./style.scss";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>
              Tell me what you're <span className="accent">building.</span>
            </h2>
            <p>
              Open to full-time roles and freelance projects. I usually reply
              within a day.
            </p>
          </div>

          <ul className="contact-list">
            <li>
              <FiMail />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FiPhone />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </li>
            <li>
              <FiMapPin />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
