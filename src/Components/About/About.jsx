import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-4">About Me</h1>
      </div>

      <div className="row align-items-center mb-5">
        {/* Right Section */}
        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="mb-4">
            <p>
              Hi, I’m Yogesh Solanki, a passionate Frontend Developer
              specializing in React.js. With 1 year of experience, I bring
              designs to life by building responsive, user-friendly, and
              high-performance web applications. My goal is to create seamless
              digital experiences that are not only visually appealing but also
              highly functional.
            </p>
            <p>
              I completed my graduation at A.R. Bhatt College under BKNMU
              University, Junagadh, where I gained a strong foundation in web
              development and programming principles.
            </p>
          </div>

          {/* Skills Section */}
          <div data-aos="flip-up" data-aos-duration="1000">
            <h3 className="fw-bold mb-4">My Skills</h3>
            <div className="row g-3">
              {[
                { skill: "HTML & CSS", level: "90%" },
                { skill: "JavaScript", level: "80%" },
                { skill: "Bootstrap", level: "70%" },
                { skill: "jQuery", level: "80%" },
                { skill: "React.js", level: "90%" },
                { skill: "Redux", level: "85%" },
              ].map(({ skill, level }, index) => (
                <div className="col-6" key={index}>
                  <p className="mb-2 fw-semibold">{skill}</p>
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: level,
                        background:
                          "linear-gradient(267deg, #282c34 0.36%, #45a29e 102.06%)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div
        className="row text-center g-4"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        {[
          { value: "3+", label: "YEARS OF EXPERIENCE" },
          { value: "16+", label: "PROJECTS COMPLETED" },
          { value: "50+", label: "HAPPY CLIENTS" },
        ].map(({ value, label }, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="achievement">
              <h1 className="gradient-text display-4 fw-bold">{value}</h1>
              <p className="fw-semibold">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
