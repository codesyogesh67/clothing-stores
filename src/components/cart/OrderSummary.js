import React, { useEffect, useState } from "react";
import {
  Container,
  ButtonContainer,
  Wrapper,
  Header,
  SubTotal,
  OrderTotal,
  Button,
  ShippingContainer,
  InfoLink,
  Divider,
  ShippingLabel,
  ShippingValue,
  TotalLabel,
  TotalValue,
} from "./OrderSummaryElements";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, updateTotalAmount } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/auth/authSlice";

function OrderSummary() {
  const cartList = useSelector(selectCart);
  const [totalAmount, setTotalAmount] = useState(0);
  const user = useSelector(selectUser);


  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(
      cartList.reduce((a, b) => a + Number(b.data.price) * b.quantity, 0)
    );
    dispatch(updateTotalAmount(totalAmount));
  }, [totalAmount, cartList]);

  return (
    <Container>
      <ButtonContainer>
        <Link to={user ? "/payment" : "/signin"}>
          <Button>Checkout</Button>
        </Link>
      </ButtonContainer>
      <Divider />
      <Wrapper>
        <Header>Order Summary</Header>
        <SubTotal>SubTotal</SubTotal>
        <ShippingContainer>
          <ShippingLabel>Shipping Standard </ShippingLabel>
          <ShippingValue>Free </ShippingValue>
        </ShippingContainer>
        <Divider />
        <OrderTotal>
          <TotalLabel>Order total</TotalLabel>{" "}
          <TotalValue>$ {totalAmount}</TotalValue>
        </OrderTotal>
        <Divider />
        <InfoLink>Easy Returns</InfoLink>
        <InfoLink>Shipping Information</InfoLink>
      </Wrapper>
    </Container>
  );
}

export default OrderSummary;
