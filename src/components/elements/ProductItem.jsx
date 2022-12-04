import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoMdCart } from "react-icons/io";

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <div className="image">
        <a href="/">
          <img src={product.imageURL} alt="" />
        </a>
      </div>
      <div className="product-content">
        <p className="text-primary text-sm font-medium uppercase">
          {product.category}
        </p>
        <a href="/">
          <h3 className="text-lg font-bold py-2">{product.name}</h3>
        </a>
        <Description>{product.description}</Description>
        <div className="flex justify-between pt-5">
          <span className="font-bold text-lg">${product.price}</span>
          <button className="text-primary font-bold flex items-center"><IoMdCart size={20} className="mr-1"/>Add to cart</button>
        </div>
      </div>
    </ProductCard>
  );
};

export default ProductItem;

const ProductCard = styled.div`
  ${tw`shadow-lg w-1/4 p-5 mr-2 rounded transition-all hover:shadow-xl`}
`;

const Description = styled.p`
  ${tw`pt-2`}
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
