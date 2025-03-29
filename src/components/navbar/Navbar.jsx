import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  // Toggle Theme
  const themeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Toggle Sidebar Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close Menu on Click
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h1>AJAY</h1>
      </div>

      {/* Desktop Navbar Links */}
      <ul className="navbar-links">
        <li onClick={themeChange}>
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </li>
        {["home", "about", "projects", "skills"].map((section) => (
          <li key={section}>
            <Link to={section} smooth={true} duration={500} spy={true} activeClass="active" offset={-65}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar Drawer for Mobile */}
      <motion.div 
        className={`sidebar ${menuOpen ? "open" : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ul className="sidebar-links">
          <li onClick={themeChange}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </li>
          {["home", "about", "projects", "skills"].map((section) => (
            <li key={section} onClick={closeMenu}>
              <Link to={section} smooth={true} duration={500} spy={true} activeClass="active" offset={-65} onClick={()=>setMenuOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar
