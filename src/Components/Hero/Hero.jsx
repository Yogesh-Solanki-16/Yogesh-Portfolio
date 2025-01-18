import React from "react";
import "./Hero.css";
import grey_logo from "../../assets/grey_logo.png";
import pdf from "../PDF/Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="hero container-fluid text-center">
      <div className="row align-items-center">
        {/* Profile Image */}
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img
            src={grey_logo}
            alt="profile"
            className="img-fluid rounded-circle hero-image"
          />
        </div>

        {/* Hero Content */}
        <div className="col-12 col-md-8 text-center text-md-start">
          <h1 className="display-4 fw-bold">
            <span className="gradient-text type-name">
              <ReactTyped
                strings={["I'm Yogesh Solanki"]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </span>
            <br />
            <span className="fs-3">Frontend Developer From Gujarat</span>
          </h1>
          <p>
            As a frontend developer with 1 year of hands-on experience, I
            specialize in creating responsive, user-friendly web applications
            using technologies like HTML, CSS, JavaScript, and React.
          </p>

          {/* Call-to-Actions */}
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mt-4">
            <AnchorLink
              href="#contact"
              className="btn btn-primary btn-lg px-5 py-3"
            >
              Contact Me
            </AnchorLink>
            <a
              href={pdf}
              download="Resume.pdf"
              className="btn btn-outline-primary btn-lg px-5 py-3 button"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
