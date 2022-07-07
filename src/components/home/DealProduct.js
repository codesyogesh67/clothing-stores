import React from "react";
import {
  Container,
  ImageContainer,
  Description,
  Title,
  Text,


  Button,
  Wrapper,
} from "./DealProductElements";
import { Deal } from "../../images";
import { ButtonContainer } from "../banner/BannerElements";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { updateProductInfo } from "../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";


function DealProduct() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addDealProduct = () => {
    db.collection("productsList").onSnapshot(snapshot => {
      snapshot.docs.filter(each => {
        if (each.data().dealProductStatus === "yes") {
          dispatch(updateProductInfo({
            id: each.id,
            data: each.data()
          }))
        }
      })
    })
    navigate("/product/dealProduct")
  }

  return (
    <Container>
      <Wrapper>

        <ImageContainer>
          <img src={Deal} alt="Deal of the day" />
        </ImageContainer>


        <Description>
          <Title>Deal of The Day</Title>
          <Text>Just grab the opportunity.</Text>

          <ButtonContainer>
            <Button onClick={addDealProduct}>Shop Now</Button>
          </ButtonContainer>

        </Description>
      </Wrapper>
    </Container>
  );
}

export default DealProduct;
