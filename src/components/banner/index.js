import React from "react";

import LeftCompartment from "./LeftCompartment";
import RightCompartment from "./RightCompartment";

import styled from "styled-components";

import { BannerWrapper, BannerContainer } from "./BannerElements"
import ImageSlider from "./ImageSlider"


function Banner() {


  return (
    <BannerContainer>


      <BannerWrapper>
        <LeftCompartment />

        <RightCompartment />
        {/* <ImageSlider /> */}

      </BannerWrapper>


    </BannerContainer>
  )
}

export default Banner;
