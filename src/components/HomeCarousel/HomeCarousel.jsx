import React from "react";
import { Carousel } from "react-bootstrap";
import logo from "../../images/fcb41b2d-3bd4-4b82-a026-3f2a4568d34c_200x200.png";
import "./HomeCarousal.css";

const HomeCarousel = () => {
  return (
    <div className="home-carousal-div">
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://www.verdict.co.uk/wp-content/uploads/2018/01/esl-one.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <img src={logo} alt="" className="carousel-logo" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://fansmuseum.org/wp-content/uploads/2018/09/Football-Stadium-background.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <img src={logo} alt="" className="carousel-logo" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.pinimg.com/originals/42/50/cf/4250cf3e0be36300f7f2db83c6827ca6.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <img src={logo} alt="" className="carousel-logo" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
