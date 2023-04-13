import React, { useState } from "react";
import "./FaqAccordion.css"; // Import your CSS file for styling
import {HiOutlineX, HiPlus, HiX, } from 'react-icons/hi'

const FaqAccordion = ({ faqs }) => {
    const [ activeIndex, setActiveIndex ] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-accordion">
            { faqs.map((faq, index) => (
                <div
                    key={ index }
                    className={ `faq-item ${ index === activeIndex ? "active" : "" }` }
                >
                    <div
                        className="faq-question"
                        onClick={ () => toggleAccordion(index) }
                    >
                        <h1 className="question">
                            <p className="index">
                                0{index + 1}
                            </p>
                            { faq.question }
                        </h1>

                        {index === activeIndex ? <HiX /> : <HiPlus/>}
                    </div>
                    <div
                        className="faq-answer"
                        style={ {
                            maxHeight: index === activeIndex ? "500px" : "0", 
                            opacity: index === activeIndex ? "1" : "0", 
                        } }
                    >
                        <p>{ faq.answer }</p>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default FaqAccordion;
