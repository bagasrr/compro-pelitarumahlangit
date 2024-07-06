// src/ImageSlider.js
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Buat file ini untuk gaya kustom

const ImageSlider = (props) => {
  const { images, projectTitle } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="project-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project-title">{projectTitle}</div>
    </div>
  );
};

export default ImageSlider;
