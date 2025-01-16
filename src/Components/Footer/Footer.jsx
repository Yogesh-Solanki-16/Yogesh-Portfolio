import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="footer-top-left">
          <h3   >BadshahCoding</h3>
          {/* <img src={theme_pattern} alt="Pattern" /> */}
          <p>
            I’m a frontend developer from India with 1 year of experience.
          </p>
        </div>

        <div className="footer-top-right" data-aos="fade-up" data-aos-duration="1000">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2025 Yogesh Solanki. All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
