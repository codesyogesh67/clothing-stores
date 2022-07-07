import React from "react";
import { RemoveButtonDiv } from "../../containers/cart/CartElements";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";

function RemoveButton({ id }) {
  const dispatch = useDispatch();

  return (
    <RemoveButtonDiv onClick={() => dispatch(removeItem(id))}>
      Remove
    </RemoveButtonDiv>
  );
}

export default RemoveButton;
