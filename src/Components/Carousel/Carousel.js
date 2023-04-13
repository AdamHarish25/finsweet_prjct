import React, { useState, useEffect } from "react";
import './Carousel.css';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

const Carousel = (props) => {
    var { items, interval = 5000} = props;
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ Length, setLength ] = useState(items && items.length);



    useEffect(() => {
        setLength(items && items.length);
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Length);
        }, interval);

        return () => {
            clearTimeout(timer);
        };
    }, [ currentIndex, items, Length, interval ]);

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
                <div
                className={ `carousel-item ${ currentIndex === items.indexOf(items[currentIndex]) ? "active" : "inactive" } ` }
                >
                    { items[currentIndex] }
                </div>
            <div className="button-box">
                <button className={currentIndex > 0 ? "left-button active" : "left-button"} onClick={ handlePrev }><FaChevronLeft /></button>
                <button className={currentIndex < Length - 1 ? "right-button active" : "right-button"} onClick={ handleNext }><FaChevronRight /></button>
            </div>
        </div>
    );
};

export default Carousel;
