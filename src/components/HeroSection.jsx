import React from 'react'
import image2 from "./image/1.jpg";
import image3 from "./image/2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
            // Show navigation dots
    infinite: true,     // Infinite scroll
    speed: 500,         // Speed of transition
    slidesToShow: 1,    // Number of slides visible at once
    autoplay: true,     // Auto play images
    autoplaySpeed: 1000, // Time delay between slides (in ms)
    fade: true,         // Fade effect between slides
  };
  return (
    <section className="hero container " >
      <div className="row align-items-center">
        {/* Left Side Content */}
        <div className="hero-cont col-lg-6 text-center text-lg-start">
          <h1>More Solar,<br/> More Renewable <br/>Energy</h1>
          <p>
            The solar energy industry is at the forefront of the global shift
            toward sustainable and renewable energy solutions.
          </p>
          <button className="btn1" >Explore +</button>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-6 text-center">
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image2}alt="Solar 1" className="hero-img" />
        </div>
        <div>
          <img src={image3} alt="Solar 2" className="hero-img" />
        </div>
      </Slider>
    </div>
        </div>
       
      </div>
    </section>
  )
}

export default HeroSection
