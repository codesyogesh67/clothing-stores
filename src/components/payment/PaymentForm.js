import React, { useState } from "react";

import axios from "./axios";
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import {

  Form,
  Label,
  Wrapper,
  FormWrapper,
} from "./PaymentFormElements";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalAmount,
  updateCart,

} from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  TextField,


  Button,

  Snackbar,
  Alert,
} from "@mui/material";
import StripeInput from "./StripeInput";

function PaymentForm() {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const elements = useElements();
  const totalAmount = useSelector(selectTotalAmount);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { clientSecret } = await axios({
      method: "post",
      url: `/payments/create?total=${totalAmount * 100}`,
    }).then((res) => res.data);

    const cardNumberElement = elements.getElement(CardNumberElement);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
        },
      })
      .then((paymentIntent) => {
        if (paymentIntent?.paymentIntent?.status === "succeeded") {
          dispatch(updateCart());
          setOpen(true);
          setMessage("Success. Thank you for shopping with us.");
          setTimeout(() => navigate("/"), 3000);
        } else {
          setOpen(true);
          setError("Sorry. We couldn't proceed your payment.");
        }
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      >
        <Alert
          style={{ backgroundColor: "green", color: "white", fontSize: "20px" }}
          sx={{ width: "100%" }}
        >
          {message.length > 0 ? message : null}
          {error.length > 0 ? error : null}
        </Alert>
      </Snackbar>

      <Label>Card Number</Label>
      <TextField
        id="outlined-helperText"
        defaultValue="Default Value"
        margin="normal"
        InputProps={{
          inputComponent: StripeInput,
          inputProps: {
            component: CardNumberElement,
          },
        }}
      />
      <Wrapper>
        <FormWrapper>
          <Label>Expiry</Label>
          <TextField
            id="outlined-helperText"
            defaultValue="Default Value"
            margin="normal"
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />
        </FormWrapper>
        <FormWrapper>
          <Label>CVC</Label>
          <TextField
            id="outlined-helperText"
            defaultValue="Default Value"
            margin="normal"
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement,
              },
            }}
          />
        </FormWrapper>
      </Wrapper>

      <Button
        variant="contained"
        size="medium"
        type="submit"
        disabled={!stripe}
        style={{ margin: "0 4rem", padding: "0.5rem 0" }}
      >
        Pay now
      </Button>
    </Form>
  );
}

export default PaymentForm;
