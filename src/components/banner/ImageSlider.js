import React, { useState } from 'react';
import { SectionImage1, SectionImage2, SectionImage3 } from "../../images";
import "./slider.css"

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [SectionImage1, SectionImage2, SectionImage3]
    console.log(currentSlide)

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
    console.log(images)

    return (
        <div className="image-slider">
            <div className="slide-container">
                {images.map((image, index) => (
                    <div
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                        style={{ backgroundImage: `url(${image})`, transform: `translateX(-${currentSlide * 100}%)`, }}
                    />

                ))}
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

        </div>
    );
};

export default ImageSlider;
