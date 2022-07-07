import React from "react";

import {
  LeftCompartmentContainer,
  Title,
  Text,
  Button,
 
} from "./BannerElements";
import {  useNavigate } from "react-router-dom";



function LeftCompartment() {
  const navigate = useNavigate()
  return (

    <LeftCompartmentContainer

    >
      <Title>Bring the Hype</Title>
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    
      </Text>
    
      <Button onClick={() => navigate("category/custom%20tees")}>Explore</Button>
    </LeftCompartmentContainer>

  );
}

export default LeftCompartment;
