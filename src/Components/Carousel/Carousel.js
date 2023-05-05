import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Length, setLength] = useState(items && items.length);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setLength(items && items.length);
    const timer = setTimeout(() => {
      if (!paused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Length);
      }
    }, interval);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentIndex, Length, interval, items, paused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div
          onMouseEnter={() => {
            setPaused(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
          }}
          key={index}
          className={`carousel-item ${
            index === currentIndex ? "active" : "inactive"
          }`}
        >
          <div className="card">
            <h1 className="feedback">{item.feedback}</h1>
            <div className="personInfo">
              <img className="profilePic" src={item.photo} alt={item.client} />
              <h1>
                {item.client}
                <p className="personTitle">{item.position}</p>
              </h1>
            </div>
          </div>
        </div>
      ))}
      <div className="button-box">
        <button
          className={currentIndex > 0 ? "left-button active" : "left-button"}
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        <button
          className={
            currentIndex < Length - 1 ? "right-button active" : "right-button"
          }
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
