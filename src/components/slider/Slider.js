

import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";
import { SectionImage1, SectionImage2, SectionImage3 } from "../../images";
import { useSelector } from "react-redux";
import { selectCategorySelected, selectProducts } from "../../features/products/productsSlice";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const category = useSelector(selectCategorySelected)
    const products = useSelector(selectProducts)
    const [imagesList, setImagesList] = useState([])



    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? imagesList?.length : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === imagesList?.length ? 0 : (prev) => prev + 1);
    };


    useEffect(() => {
        const array = []
        products.filter(each => {



            if (each.data.subcategory === category) {

                array.push(each.data)
            }
        })
        setImagesList(array)
    }, [category])


    return (
        <div className="slider">

            <div className="container" style={{ transform: `translateX(-${currentSlide * 27}vw)` }}>


                {imagesList.map(({ name, imageUrl }) => (
                    <div key={name}>
                        <img src={imageUrl} alt="name" />
                    </div>
                ))}

            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>

        </div>
    );
};

export default Slider;
