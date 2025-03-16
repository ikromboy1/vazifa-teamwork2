import logo1 from "../assets/Group 73.png";
import "./Project.css";
const Project = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="image-container">
          <img src={logo1} alt="" />
          <div className="decor-line"></div>
        </div>

        <div className="text-container">
          <h3 className="subtitle">About Us</h3>
          <h2 className="title">Interioris The Will of An Epoch Mextreo</h2>
          <p className="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected humour,
            or randomised words which don't look even slightly believable.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
