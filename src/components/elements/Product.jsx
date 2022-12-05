import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoMdCart } from "react-icons/io";

const Product = ({ products, cartClickHandler }) => {

  const clickHandler = (id) => {
    cartClickHandler(products.find((item) => item._id === id));
  };

  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard key={product._id}>
          <div className="image">
            <a href="/">
              <img src={product.imageURL} alt={product.name} />
            </a>
          </div>
          <div className="product-content">
            <p className="text-primary text-sm font-medium uppercase">
              {product.category}
            </p>
            <a href="/">
              <ProductName className="text-lg font-bold pt-2">
                {product.name}
              </ProductName>
            </a>
            <Description>{product.description}</Description>
            <div className="flex justify-between pt-5">
              <span className="font-bold text-lg">${product.price}</span>
              <Button
                onClick={() => {
                  clickHandler(product._id);
                }}
              >
                <IoMdCart size={20} />
              </Button>
            </div>
          </div>
        </ProductCard>
      ))}
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  ${tw`flex items-center justify-center my-10 flex-wrap gap-2`}
`;

const ProductCard = styled.div`
  ${tw`shadow-lg w-[19%] p-5 rounded transition-all hover:shadow-xl my-3`}
  transition: color .2s;
  :hover {
    button {
      ${tw`text-white`}
    }
    button:before {
      ${tw`bg-primary scale-100`}
    }
  }
`;

const Description = styled.p`
  ${tw`pt-2 text-sm`}
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const ProductName = styled.h3`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const Button = styled.button`
  ${tw`text-gray font-bold flex items-center justify-center relative transition-all duration-300`}
  transition: color .2s;
  :before {
    ${tw`content-[''] absolute z-[-1] scale-0 block bg-transparent w-[2rem] h-[2rem] top-[-2px] left-[-6px] rounded-full transition-all duration-300`}
    transition: transform .2s,background .2s;
  }
`;
