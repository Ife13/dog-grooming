import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  function carousel() {
    return (
      <div className="image-carousel">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={index === currentImage ? "slide active" : "slide"}
            >
              {index === currentImage && (
                <img src={image.src} alt={image.alt} className="image" />
              )}
            </div>
          );
        })}
      </div>
    );
  }
};

export default carousel;
