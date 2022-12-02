import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";

const Shop = () => {
  return (
    <Container>
        <h1 className="text-2xl font-bold mb-10">ShopCenter.</h1>
        <Product />
    </Container>
  )
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
