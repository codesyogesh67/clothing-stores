import React from "react";
import {
  Container,
  Wrapper,
  Description,
  Title,

  ImageContainer,
  Text,
  Button,
} from "./FeaturedProductsElements";
import {
  FeaturedImage1,

  FeaturedImage4,
} from "../../images";
import { useNavigate } from "react-router-dom";

function FeaturedProducts() {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>

        <ImageContainer>
          <img src={FeaturedImage1} alt="Featured Image" />
        </ImageContainer>
        <Description>
          <Title>Meet the Trends</Title>
          <Text>Meet the trends. Just get a glance on What's trending.</Text>
          <Button onClick={() => navigate("category/purpose%20designed%20tees")}>Show Collection</Button>
        </Description>

        <ImageContainer>
          <img src={FeaturedImage4} alt="Featured Image" />
        </ImageContainer>



        {/* <Description>
            <Title>Meet the Trends</Title>
            <Text>Meet the trends. Just get a glance on What's trending.</Text>
          </Description> */}
        {/* </Section> */}
        {/* <Section>
            <ImageContainer>
              <img src={FeaturedImage2} alt="Featured Image" />
            </ImageContainer>

            <Text></Text>
          </Section>
            {/* <Section>
         

            <Text></Text>
          </Section> */}
        {/* <Section>
            <ImageContainer>
              <img src={FeaturedImage4} alt="Featured Image" />
            </ImageContainer>

            <Text></Text>
          </Section> */}
        {/* </SectionContainer> */}
      </Wrapper>
    </Container>
  );
}

export default FeaturedProducts;
