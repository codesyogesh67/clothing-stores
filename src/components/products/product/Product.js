import React from "react";
import {
  Container,
  Wrapper,
  ImageContainer,
  Info,
  Title,
  Price,
  ColorList,
  SizeList,
  LinkText,
  SelectSize,
  Description,
  SelectColor,

} from "./ProductElements";
import { useSelector } from "react-redux";
import { selectProductInfo } from "../../../features/products/productsSlice";
import { Link } from "react-router-dom";
import Button from "../button";
import { selectMessage } from "../../../features/extras/extrasSlice";
import Message from "../../message/Message";

function Product() {
  const productInfo = useSelector(selectProductInfo);
  const {

    data: {
      name,
      price,
      category,
      subcategory,
      imageUrl,
      defaultColor,
    } } = productInfo;
  const colorList = ["white", "black", "red", "green", "purple"];
  const sizeList = ["XS", "S", "Md", "L", "XL"];

  const message = useSelector(selectMessage)



  return (
    <Container>
      {message && <Message />}
      <Link to={`/category/${category?.toLowerCase()}`}>
        <LinkText>
          {category} / {subcategory}
        </LinkText>
      </Link>
      <Wrapper>
        <ImageContainer>
          <img src={imageUrl} alt="Product Info" />
        </ImageContainer>
        <Info>
          <Title>{name}</Title>

          <Description>{name}</Description>
          <Price>$ {price}</Price>
          <ColorList>
            <p>
              Color:<span>{defaultColor} </span>
            </p>
            <div>
              {colorList.map((eachColor, index) => (
                <SelectColor color={eachColor} key={index}></SelectColor>
              ))}
            </div>
          </ColorList>
          <SizeList>
            <p>
              Size:{" "}
              <span>
                Please Select <a>Size Chart</a>
              </span>
            </p>
            <div>
              {sizeList.map((eachSize, index) => (
                <SelectSize key={index}>{eachSize}</SelectSize>
              ))}
            </div>
          </SizeList>


          <Button name="Add to Cart" />
        </Info>
      </Wrapper>

    </Container>
  );
}

export default Product;
