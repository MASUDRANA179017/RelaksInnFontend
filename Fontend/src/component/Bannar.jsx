import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./image";

const Banar = () => {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: "translateY(-50%)",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >  <ul style={{ margin: "0px", display: "flex", flexDirection: "column" }}>
          {" "}{dots}{" "}
        </ul>
    
        </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                
                color: "#262626",
                borderRight: "3px solid #262626",
                transition: "all 0.5s ease",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px solid white",
                transition: "all 0.5s ease",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src="image/banner.png" alt="banner image"></Image>
        </div>
        <div>
          <Image src="image/banner.png" alt="banner image"></Image>
        </div>
        <div>
          <Image src="image/banner.png" alt="banner image"></Image>
        </div>
        <div>
          <Image src="image/banner.png" alt="banner image"></Image>
        </div>
      </Slider>
    </div>
  );
};

export default Banar;
