import React from "react";
import Slider from "react-slick";

const Carousel = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    fade: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data &&
          data.map((el, index) => {
            return (
              <div className="w-screen md:h-[85vh] h-[60vh]   ">
                <img
                  src={el}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
