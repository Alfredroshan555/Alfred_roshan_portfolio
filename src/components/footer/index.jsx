import React from 'react'
import './style.scss'
import Section from '../shared/Section'
import logo from "../../images/logo.png"
import {FaGithub,FaLinkedinIn } from "react-icons/fa"
import SocialIcon  from './social-icon'
import { scrollIntoSection } from "../utils/common";

const Footer = () => {
  return (
    <Section
    background="dark"
    className="footer"
>
    <div className="footer-content-wrapper">
        <div className="footer-logo">
            {/* <img
                src={logo}
                alt="JS Dev Hindi"
            /> */}
        </div>
        <ul className="footer-menu-items">
            <li
                className="footer-menu-item"
                onClick={() => scrollIntoSection("skills")}
            >
                Skills
            </li>
            <li
                className="footer-menu-item"
                onClick={() => scrollIntoSection("portfolio")}
            >
                Portfolio
            </li>
          
            <li
                className="footer-menu-item"
                onClick={() => scrollIntoSection("contact")}
            >
                Contact me
            </li>
        </ul>
        <div className="social-icons">
            {/* <SocialIcon
                color="#FF0000"
                icon={<FaGithub />}
                link="https://www.youtube.com"
            /> */}
            <SocialIcon
                color="#0D2636"
                link="https://github.com/Alfredroshan555/"
                icon={<FaGithub />}
            />
            <SocialIcon
                color="#0A66C2"
                link="https://www.linkedin.com/in/alfred-roshan-698913195/"
                icon={<FaLinkedinIn />}
            />
           
            {/* <SocialIcon
                color="#E84C88"
                link="https://www.instagram.com/gokul_vg/"
                icon={<FaInstagram />}
            /> */}
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2022 | Alfred Roshan | All Rights Reserved
            </div>
        </div>
    </div>
</Section>
  )
}

export default Footer