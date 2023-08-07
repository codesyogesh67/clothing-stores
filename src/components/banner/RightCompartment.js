import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import {
  RightCompartmentContainer,
  SectionContainer,
  SectionImageContainer,
} from "./BannerElements";
import { SectionImage1, SectionImage2, SectionImage3 } from "../../images";

function RightCompartment(props) {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  // };
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <RightCompartmentContainer
    >


      <SectionContainer >
        {/* <SectionContainer style={{ transform: `translateX(-${currentSlide * 100}vw)` }}> */}

        {/* <img src={SectionImage1} alt="Section Image" />
        <img src={SectionImage2} alt="Section Image" />
        <img src={SectionImage3} alt="Section Image" /> */}

        <SectionImageContainer>
          <img src={SectionImage1} alt="Section Image" />
        </SectionImageContainer>
        <SectionImageContainer>
          <img src={SectionImage2} alt="Section Image" />
        </SectionImageContainer>
        <SectionImageContainer>
          <img src={SectionImage3} alt="Section Image" />
        </SectionImageContainer>
      </SectionContainer>
      {/* <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div> */}



    </RightCompartmentContainer>


  );
}

export default RightCompartment;
