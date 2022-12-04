import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Single from "./Single";

const Product = ({ products }) => {
  const click = (id) => {

    console.log(products.find(item => item._id === id));
  }
  return (
    <Wrapper>
        {products.map((product) => (
          <Single product={product} key={product._id} click={click} />
        ))}
    </Wrapper>
  );
};

export default Product;


const Wrapper = styled.div`
  ${tw`flex items-center justify-center my-10 flex-wrap gap-2`}
`;
