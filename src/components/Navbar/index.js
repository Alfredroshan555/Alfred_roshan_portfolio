import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "./style.scss";

const links = [
  { id: "about", label: "About" },
  { id: "workflow", label: "How I work" },
  { id: "experience", label: "Experience" },
];

const getInitialTheme = () =>
  document.documentElement.getAttribute("data-theme") ||
  (window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark");

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#intro" className="wordmark" onClick={close}>
          <span className="accent">alfred</span>roshan
        </a>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mobile-only" onClick={close}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm cta">
            Let's talk
          </a>
          <button
            className="icon-btn menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
