import React from "react";
import {
  Container,
  Wrapper,
  ImageContainer,
  FadeBottom,
  Title,
  Content,
} from "./BannerElements";
import { ProductBanner } from "../../../images";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation()

  const title = location.pathname.split("/")[2]?.replaceAll("%20", " ")

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src={ProductBanner} alt="Products Banner" />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
        </Content>
      </Wrapper>
      <FadeBottom />
    </Container>
  );
}

export default Banner;
