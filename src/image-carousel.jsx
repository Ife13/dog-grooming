import React, { useState } from "react";

function carousel() {
  return (
    <div>
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

export default carousel;
