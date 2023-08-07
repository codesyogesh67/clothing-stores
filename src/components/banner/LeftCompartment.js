import React from "react";

import {
  LeftCompartmentContainer,
  Title,
  Text,
  Button,

} from "./BannerElements";
import { useNavigate } from "react-router-dom";



function LeftCompartment() {
  const navigate = useNavigate()
  return (

    <LeftCompartmentContainer

    >
      <Title>Bring the Hype</Title>
      <Text>
        <p>
          Embrace the latest trends and express your unique style from bold graphics to inspiring quotes, our designs are curated
          to make a statement wherever you go making it
          fun, empowering, and inclusive.
        </p>
        <br />

        <p>        Join the hype today and let your personality shine through our dynamic, comfortable, and fashion-forward t-shirts.
</p>
      </Text>

      <Button onClick={() => navigate("category/custom%20tees")}>Explore</Button>
    </LeftCompartmentContainer>

  );
}

export default LeftCompartment;
