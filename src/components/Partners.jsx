
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img31 from "./image/31.png";
import img32 from "./image/32.png";
import img33 from "./image/33.png";
import img34 from "./image/34.png";
import img35 from "./image/35.png";
import img36 from "./image/36.png";
import img37 from "./image/37.jpg";
import img38 from "./image/38.png";

const Partners = () => {
  const partnerLogos = [img31, img32, img33, img34, img35, img36, img37, img38];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change slides every 2 seconds
    
  };

  return (
    <div className="partners-container">
      <h2>
        Our Associated <span className="highlight">Partners</span>
      </h2>
      <Slider {...settings} className="partners-slider">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="partner-slide">
            <img src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;

