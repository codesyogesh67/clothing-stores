import React from "react";
import {
  Container,
  Wrapper,
  Header,
  SubTotal,
  ShippingContainer,
  ShippingLabel,
  ShippingValue,
  Divider,
  OrderTotal,
  TotalLabel,
  TotalValue,
  TotalCount,
} from "./PaymentSummaryElements";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectCart } from "../../features/cart/cartSlice";

function PaymentSummary() {
  const totalAmount = useSelector(selectTotalAmount);
  const cartList = useSelector(selectCart);
  return (
    <Container>
      <Wrapper>
        <Header>Payment Summary</Header>
        <TotalCount>Total Items: {cartList?.length}</TotalCount>
        <SubTotal>SubTotal: $ {totalAmount}</SubTotal>
        <ShippingContainer>
          <ShippingLabel>Shipping Standard </ShippingLabel>
          <ShippingValue>Free </ShippingValue>
        </ShippingContainer>
        <Divider />
        <OrderTotal>
          <TotalLabel>Order total </TotalLabel>{" "}
          <TotalValue>$ {totalAmount}</TotalValue>
        </OrderTotal>
        <Divider />
      </Wrapper>
    </Container>
  );
}

export default PaymentSummary;
