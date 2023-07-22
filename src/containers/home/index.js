import React from "react";
import { Banner } from "../../components";
import { Hero } from "../../components";
import SearchBar from "../../components/header/components/SearchBar";
import Slider from "../../components/slider/Slider"
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
      {/* <Slider /> */}
      <FeaturedProducts />
      <DealProduct />

    </Container>
  );
}

export default Home;
