import React from "react";
import { Container } from "./ButtonElements";
import { useDispatch, useSelector } from "react-redux";
import {
  pushToCart,
} from "../../../features/cart/cartSlice";
import { selectUser } from "../../../features/auth/authSlice";
import { updateMessage } from "../../../features/extras/extrasSlice";

function Button(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  const addToCart = (obj) => {
    console.log("hello....")
    if (user) {
      dispatch(pushToCart(obj));

    } else {
      dispatch(updateMessage("You need to sign in."))
    }
  };

  return (
    <Container onClick={() => addToCart(props.object)}>{props.name}</Container>
  );
}

export default Button;
