import React, { useState, useEffect } from "react";
import "./style.scss";
import logo from "../../images/logo.png";
import { scrollIntoSection } from "../utils/common";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuClickHandler = (section) => {
    setMobileMenu(false);
    scrollIntoSection(section);
  };

  return (
    <motion.div
      className={`navigation ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="logo" onClick={() => scrollIntoSection("intro")}>
        {/* <img src={logo} alt="Logo" /> */}
        <span style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>
          AR.
        </span>
      </div>

      <div className="mobile_menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>

      <div className={`navbar ${mobileMenu ? "active" : ""}`}>
        {["Skills", "Portfolio", "Contact"].map((item) => (
          <span
            key={item}
            className="nav_item"
            onClick={() => menuClickHandler(item.toLowerCase())}
          >
            {item}
          </span>
        ))}

        <span
          className="call_to_action"
          onClick={() => menuClickHandler("contact")}
        >
          <motion.div
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now
          </motion.div>
        </span>
      </div>
    </motion.div>
  );
};

export default Navbar;
