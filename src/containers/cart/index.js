import React from "react";
import {
  Container,
  Wrapper,
  Divider,
  CartHeader,
  Title,
  TotalCount,
  BackButton,
  CartList,
  CartLabels,
  CartLabel,
  CartProduct,
  ImageContainer,
  ProductDetail,
  ProductDescription,
  ProductCategory,
  ProductPrice,
  ProductTitle,
  ProductInfo,
  Links,


  CartProductDivider,
  EmptyCartDiv,
} from "./CartElements";
import {
  selectCart,
} from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import OrderSummary from "../../components/cart/OrderSummary";
import RemoveButton from "../../components/cart/RemoveButton";
import ProductQuantity from "../../components/cart/ProductQuantity";
import { motion } from "framer-motion/dist/framer-motion"

function Cart() {
  const cartList = useSelector(selectCart);
  const navigate = useNavigate();

  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>
        <CartHeader>
          <Title>Shopping Cart</Title>
          <TotalCount>
            {cartList?.length > 0 && cartList?.length}
            {cartList?.length > 0 && (cartList?.length > 1 ? " items" : " item")}
          </TotalCount>
          <BackButton onClick={() => navigate(-1)}>
            Continue Shopping
          </BackButton>
        </CartHeader>

        <Divider />
        <CartList>
          <CartLabels>
            <CartLabel>Product Details</CartLabel>
            <CartLabel>Qty</CartLabel>
            <CartLabel>Total</CartLabel>
          </CartLabels>
          {cartList.length > 0 ?
            cartList?.map(
              ({ id, data: { name, price, category, subcategory, imageUrl }, quantity }) => (
                <div key={id}>
                  <CartProduct>
                    <ImageContainer>
                      <img src={imageUrl} alt="Cart Image" />
                    </ImageContainer>
                    <ProductDetail>
                      <ProductDescription>
                        <ProductTitle>{name}</ProductTitle>
                        <ProductCategory>{category}</ProductCategory>
                        <ProductInfo></ProductInfo>
                        <Links>
                          {/* <CartLink>Edit</CartLink>
                          <LinkDivider /> */}
                          <RemoveButton id={id} />
                        </Links>
                      </ProductDescription>
                      <ProductQuantity productId={id} />
                      <ProductPrice>
                        <p>$ {price * quantity}
                        </p></ProductPrice>
                    </ProductDetail>
                  </CartProduct>

                  <CartProductDivider />
                </div>
              )
            ) : <EmptyCartDiv>
              Cart is empty.
            </EmptyCartDiv>}
        </CartList>
      </Wrapper>
      {cartList?.length > 0 && <OrderSummary />}
    </Container>
  );
}

export default Cart;
