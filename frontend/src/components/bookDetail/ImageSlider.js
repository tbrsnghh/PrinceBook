import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./bookDetail.scss";

export default function ImageSlider({ cover_list, setCoverMain }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (current, next) => setCoverMain(cover_list[next].url),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cover_list.map((item, index) => (
          <div key={index} className="slider-image-wrapper" onClick={() => setCoverMain(item.url)}>
            <img src={item.url} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
