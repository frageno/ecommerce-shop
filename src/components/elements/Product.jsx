import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import ProductItem from "./ProductItem";

const Product = ({ products }) => {
  return (
    <Wrapper>
        {products.map((product) => (
          <ProductItem product={product} key={product._id}/>
        ))}
    </Wrapper>
  );
};

export default Product;


const Wrapper = styled.div`
  ${tw`flex items-center my-10`}
`;
