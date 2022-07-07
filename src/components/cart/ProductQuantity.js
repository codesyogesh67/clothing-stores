import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  DifferenceTab,
  Value,
  AdditionTab,
} from "./ProductQuantityElements";
import { updateEachQuantity } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function ProductQuantity({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const addQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };
  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    dispatch(updateEachQuantity({ quantity, productId }));
  }, [quantity]);
  return (
    <Container>
      <Wrapper>
        <DifferenceTab onClick={subtractQuantity}>-</DifferenceTab>
        <Value>{quantity}</Value>
        <AdditionTab onClick={addQuantity}>+</AdditionTab>
      </Wrapper>
    </Container>
  );
}

export default ProductQuantity;
