import React from "react";
import "./Contact.css";
import { useState } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    if (res.success) {
      toast.success("Email sent successfully !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div id="contact" className="contact">
          <div className="contact-title">
            <h1>Get in Touch</h1>
          </div>

          <div className="contact-section">
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

            <form
              onSubmit={onSubmit}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="phone">
                Your Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone"
                required
              />

              <label htmlFor="message">
                Write Your Message Here<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
              ></textarea>

              <button type="submit" className="contact-submit">
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
