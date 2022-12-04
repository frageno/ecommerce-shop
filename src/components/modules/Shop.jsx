import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";

const Shop = () => {
  return (
    <Container>
        <Navbar />
        <Product />
    </Container>
  )
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
