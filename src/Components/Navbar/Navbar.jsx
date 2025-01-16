import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Brand Section */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <h1 className="m-0">BadshahCoding</h1>
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
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

          {/* Connect Button */}
          <div className="d-lg-block mt-3 mt-lg-0 text-center">
            <AnchorLink href="#contact" className="btn btn-gradient px-4 py-2">
              Connect With Me
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
