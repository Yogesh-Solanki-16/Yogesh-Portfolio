import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h3 className="mb-3">CodeWithBadshah</h3>
            <p className="mb-0">
              I’m a frontend developer from India with 1 year of experience.
            </p>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <h5 className=" m-4">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-lg-end gap-3 social">
              <a
                href="https://www.instagram.com/badshahh__16"
                target="_blank"
                rel="noopener noreferrer"
                className=" fs-4"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://x.com/badshahh__16"
                target="_blank"
                rel="noopener noreferrer"
                className=" fs-4"
                aria-label="X"
              >
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-solanki-749405262"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-4"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Yogesh-Solanki-16"
                target="_blank"
                rel="noopener noreferrer"
                className=" fs-4"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top">
          <div className="col-lg-6 text-center text-lg-start ">
            <p className="mb-0 copyright">
              © 2025 Yogesh Solanki. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end gap-3 text-center  bottom-footer">
            <a href="#" className=" cursor-pointer footer-term">
              Terms & Conditions
            </a>
            <a href="#" className=" cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className=" cursor-pointer">
              Connect with Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
