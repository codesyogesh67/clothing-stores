import React from "react";
import { Banner } from "../../components";
import { Hero } from "../../components";
import { Container } from "./HomeElements";
import DealProduct from "../../components/home/DealProduct";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import { motion } from "framer-motion"
import Footer from "../footer";

function Home() {
  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <Banner />
      <FeaturedProducts />
      <DealProduct />

    </Container>
  );
}

export default Home;
