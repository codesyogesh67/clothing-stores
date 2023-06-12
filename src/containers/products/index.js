import React from "react";
import { Container } from "./ProductsElements";
import ProductsBanner from "../../components/products/banner";
import ProductsList from "../../components/products/productsList/index";
import { motion } from "framer-motion"
import Message from "../../components/message/Message";
import { useSelector } from "react-redux";
import { selectMessage } from "../../features/extras/extrasSlice";
import Footer from "../footer";



function Products() {

  const message = useSelector(selectMessage)
  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {message && <Message />}
      <ProductsBanner />
      <ProductsList />

    </Container >
  );
}

export default Products;
