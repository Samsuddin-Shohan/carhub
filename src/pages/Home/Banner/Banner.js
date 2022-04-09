import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/SyHqP8r/car1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{ color: "white" }}>Mercedes</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ryD9jS8/car2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 style={{ color: "white" }}>Bhugati</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/wsbqRQZ/car3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 style={{ color: "white" }}>Hyundai</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
