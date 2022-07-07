import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const Stepper = () => {
  const [loading, setLoading] = useState(false);
  const [cardStatus, setCardStatus] = useState(false);
  const [cardMessage, setCardMessage] = useState("");
  const formValues = {
    date: "",
    service: "",
    facebook: "",
    twitter: "",
    firstname: "",
    lastname: "",
    email: "",
    line1: "",
    line2: "",
    postal_code: "",
    city: "",
    country: null,
    currency: null,
    amount: "",
  };

  const handleSubmit = async () => {
    setLoading(true);

    const ClientSecretDataObject = ClientSecretDataObjectConverter(formValues);
    const clientSecret = await clientSecretPull(clientSecretDataObject);
    const cardElement = elements.getElement(CardCvcElement);
  };

  return (
    <form>
      <Button onClick={handleSubmit}></Button>
    </form>
  );
};

export default Stepper;
