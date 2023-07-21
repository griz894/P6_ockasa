import React, { useState } from "react";
import "./Carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  function nextImage() {
    setCurrent((current) => (current + 1) % images.length);
  }

  function prevImage() {
    setCurrent((current) => (current - 1 + images.length) % images.length);
  }

  return (
    <div className="carousel">
      <button onClick={prevImage} className="prev">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <img src={images[current]} alt={`carousel view ${current + 1}`} />
      <button onClick={nextImage} className="next">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Carousel;
