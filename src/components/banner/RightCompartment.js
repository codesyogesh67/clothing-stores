import React from "react";
import {
  RightCompartmentContainer,
  SectionContainer,
  SectionImageContainer,
} from "./BannerElements";
import { SectionImage1, SectionImage2, SectionImage3 } from "../../images";

function RightCompartment(props) {
  return (
    <RightCompartmentContainer
    >


      <SectionContainer>
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



    </RightCompartmentContainer>
  );
}

export default RightCompartment;
