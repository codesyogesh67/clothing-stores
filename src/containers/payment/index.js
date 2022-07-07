import React from "react";
import {
  Container,
  Title,
  PaymentHeader,
  PaymentBoxHeader,
  Wrapper,
  PaymentBox,
  Text,
  ImageContainer,
  ImageWrapper,
} from "./PaymentElements";
import PaymentSummary from "../../components/payment/PaymentSummary";
import { Discover, MasterCard, AmericanExpress, Visa } from "../../images";
import PaymentForm from "../../components/payment/PaymentForm";
import { motion } from "framer-motion/dist/framer-motion"

function Payment() {
  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>
        <PaymentHeader>
          <Title>Payment Details</Title>
        </PaymentHeader>

        <PaymentBox>
          <PaymentBoxHeader>
            <Text>
              <p>Credit Card</p>
              <p>
                Safe money transfer using your bank account Visa, Master,
                Discover, American Express,etc
              </p>
            </Text>
            <ImageWrapper>
              <ImageContainer>
                <img src={Discover} alt="Discover Card" />
                <img src={AmericanExpress} alt="AmericanExpress Card" />
                <img src={Visa} alt="Visa Card" />
                <img src={MasterCard} alt="Master Card" />
              </ImageContainer>
            </ImageWrapper>
          </PaymentBoxHeader>
          <PaymentForm />
        </PaymentBox>
      </Wrapper>
      <PaymentSummary />
    </Container>
  );
}

export default Payment;
