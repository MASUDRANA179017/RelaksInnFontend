import React from "react";
import Container from "./Container";
import Title from "./Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "./Product";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", width: "50px", height: "50px",borderRadius: "50%", }}
      onClick={onClick}
    />
  );
}

const NewArrivals = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="w-[300px] bg-black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  
  };
  return (
    <>
      <Container>
        <Title Headding="New Arrivals" />

        <Slider {...setting}>
          <div>
            <Product badge="New" imgSrc="products/Image1.png" />
          </div>
          <div>
            <Product badge="Best Selling" imgSrc="products/Image2.png" />
          </div>
          <div>
            <Product badge="Star" imgSrc="products/Image3.png" />
          </div>
          <div>
            <Product badge="New" imgSrc="products/Image1.png" />
          </div>
          <div>
            <Product badge="" imgSrc="products/Image3.png" />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default NewArrivals;
