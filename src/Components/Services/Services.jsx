import React from "react";
import "./Services.css";
import services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="container py-5">
      <div className="services">
        {/* Title Section */}
        <div className="services-title text-center mb-5">
          <h1 className="display-4 fw-bold">My Services</h1>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services_data.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <div
                className="service-format"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h3 className="service-number gradient-text">{service.s_no}</h3>
                <h2 className="service-name">{service.s_name}</h2>
                <p className="service-desc">{service.s_desc}</p>
                <div className="services-readmore d-flex align-items-center ">
                  <p className="mb-0">Read More</p>
                  <img src={arrow_icon} alt="Arrow Icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
