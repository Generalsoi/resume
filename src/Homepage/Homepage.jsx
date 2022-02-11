import React from "react";
import "./Homepage.css";
import Success from "../assets/images/success.jpeg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="introduction">
        <h3>
          Success <br /> Ikhinobele
        </h3>
        <p>Software Developer</p>
      </div>

      <img src={Success} alt="success" className="success-img" />
    </div>
  );
};

export default Homepage;
