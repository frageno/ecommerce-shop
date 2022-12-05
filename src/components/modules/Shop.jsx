import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";

const Shop = ({ products }) => {
  const [item, setItem] = useState([]);

  const cartClickHandler = (item) => {
    setItem(item._id);
  };
  console.log(item);
  return (
    <Container>
      <Navbar products={products} item={item} />
      <Product products={products} cartClickHandler={cartClickHandler} />
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
