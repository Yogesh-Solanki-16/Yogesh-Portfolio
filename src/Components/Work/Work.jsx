import "./Work.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Work = () => {
  return (
    <div className="container">
      <div id="work" className="mywork">
        {/* Title Section */}
        <div className="mywork-title text-center">
          <h1>My Latest Work</h1>
        </div>

        {/* Work Items Grid */}
        <div className="mywork-container">
          {mywork_data.map((work, index) => (
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              src={work.w_img}
              alt={`Work ${index + 1}`}
              className="work-image"
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="mywork-showmore">
          <a>
            {" "}
            <span>Show More</span> <img src={arrow_icon} alt="Arrow Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
