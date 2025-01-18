import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6800f70f-41b3-40ac-9552-5912a3964b95");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <>
      <div className="container">
        <div id="contact" className="contact">
          {/* Title Section */}
          <div className="contact-title">
            <h1>Get in Touch</h1>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            {/* Left Section */}
            <div
              className="contact-left"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <h1 className="gradient-text">Let’s Talk</h1>
              <p>
                I’m currently available to take a new project, so feel free to
                send me a message about anything you want me to work on. Contact
                me anytime.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="Mail Icon" />
                  <p>yogeshsolanki1016@gmail.com</p>
                </div>
                <div className="contact-detail">
                  <img src={call_icon} alt="Call Icon" />
                  <p>+91 9313-604-818</p>
                </div>
                <div className="contact-detail">
                  <img src={location_icon} alt="Location Icon" />
                  <p>Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Right Section (Form) */}
            <form
              onSubmit={onSubmit}
              action=""
              className="contact-right"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <label htmlFor="name">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="email">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="message">
                Write Your Message Here<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="8"
                placeholder="Enter your message"
                required
              ></textarea>
              <button type="submit" className="contact-submit">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Contact;
