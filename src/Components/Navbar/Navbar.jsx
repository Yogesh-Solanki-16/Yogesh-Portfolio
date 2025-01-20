import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand  align-items-center" href="#home">
          <h1 className="m-0">CodeWithBadshah</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          style={{ fontSize: "0.7rem" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <AnchorLink href="#home" className="nav-link">
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#about" className="nav-link">
                About Me
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#services" className="nav-link">
                Services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#work" className="nav-link">
                Portfolio
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#contact" className="nav-link">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
