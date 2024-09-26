import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./bookDetail.scss";

export default function ImageSlider({ cover_list }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (current, next) => setCoverMain(cover_list[next].imagePath),
  };
  const [cover_main, setCoverMain] = useState(cover_list[0].imagePath);
  return (
    <>
      <img
              // src={cover_main}
              src={cover_main && `http://localhost:8080/api/book/images/${cover_main}`}  

              // className="w-48 h-auto z-10 mx-auto"
              className="w-80 h-96 mx-auto object-cover"
            />
            <div className="slider-container">
      <Slider {...settings}>
        {cover_list.map((item, index) => (
          <div key={index} className="slider-image-wrapper" onClick={() => setCoverMain(item.url)}>
            <img src={item.url} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
    </>
    
  );
}
