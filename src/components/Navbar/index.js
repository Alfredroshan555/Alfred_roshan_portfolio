import React, { useState } from "react";
import "./style.scss";
import logo from "../../images/logo.png";
import CallToAction from "../shared/CallToAction";
import { scrollIntoSection } from "../utils/common";
import {IoMdClose} from "react-icons/io"
import {CgMenuRight} from "react-icons/cg"

const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false)

  const menuClickHandler = (section) =>{
    setMobileMenu(!mobileMenu)
    scrollIntoSection(section)
  }

  return (
    <div className="navigation">
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
      </div>
      <div className="mobile_menu" onClick={()=> setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <div className={`navbar ${mobileMenu ? "active" : ""}`}>
        <span className="nav_item" onClick={() => menuClickHandler("skills")}>Skills</span>
        <span className="nav_item" onClick={() => menuClickHandler("portfolio")}>Portfolio</span>
        
        <span className="call_to_action" onClick={() => menuClickHandler("contact")}>
          <CallToAction text="Contact Now" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
