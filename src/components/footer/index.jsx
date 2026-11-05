import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { profile } from "../../data";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a href="#intro" className="wordmark">
            <span className="accent">alfred</span>roshan
          </a>
          <p className="tagline">{profile.role}</p>
        </div>

        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" aria-label="Résumé">
            <FiFileText />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
};

export default Footer;
