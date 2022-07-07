import React from "react";
import {
  BannerContainer,
  BannerWrapper,

} from "./BannerElements";

import LeftCompartment from "./LeftCompartment";
import RightCompartment from "./RightCompartment";





function Banner() {
  // const [prevSlide, setPrevSlide] = useState(true);
  // const [nextSlide, setNextSlide] = useState(false);

  // const moveDot = (index) => {
  //   if (index === 0) {
  //     setPrevSlide(true);
  //     setNextSlide(false);
  //   } else {
  //     setPrevSlide(false);
  //     setNextSlide(true);
  //   }
  // };

  return (
    <BannerContainer>
      <BannerWrapper>
        <LeftCompartment />

        <RightCompartment />

      </BannerWrapper>


    </BannerContainer >
  );
}

export default Banner;
