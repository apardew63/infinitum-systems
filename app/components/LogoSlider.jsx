import React from "react";
import "./LogoSlider.css";

const logos = ["/logo1.png", "/logo2.png", "/logo1.png", "/logo2.png", "/logo1.png", "/logo2.png", "/logo1.png"];

const LogoSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...logos, ...logos].map((logo, i) => (
          <div className="slide" key={i}>
            <img
              src={logo}
              alt={`logo-${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
