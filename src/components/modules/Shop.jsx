import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";

const Shop = ({ products }) => {
  return (
    <Container>
      <Navbar />
      <Product products={products} />
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
