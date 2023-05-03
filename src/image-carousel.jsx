import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import dog1 from "../src/images/dog 1.jpg";
import dog2 from "../src/images/dog 2.jpg";
import dog3 from "../src/images/dog 3.jpg";
import dog4 from "../src/images/dog 4.jpg";
import dog5 from "../src/images/dog 5.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={dog1} onDragStart={handleDragStart} role="presentation" />,
  <img src={dog2} onDragStart={handleDragStart} role="presentation" />,
  <img src={dog3} onDragStart={handleDragStart} role="presentation" />,
  <img src={dog4} onDragStart={handleDragStart} role="presentation" />,
  <img src={dog5} onDragStart={handleDragStart} role="presentation" />,
];

const carousel = () => {
  return <AliceCarousel mouseTracking items={items} />;
};

export default carousel;
