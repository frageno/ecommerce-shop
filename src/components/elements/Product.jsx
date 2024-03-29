import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoMdCart, IoIosExpand, IoIosHeart } from "react-icons/io";

const Product = ({
  products,
  numberOfProducts,
  sort,
  opacity,
  cartClickHandler,
  modalClickHandler,
  quickViewClickHandler,
  displayType,
}) => {
  console.log(displayType);
  const clickHandler = (id, index) => {
    cartClickHandler(
      products.find((item) => item._id === id),
      index,
      id
    );
  };
  const viewClickHandler = (id) => {
    // cartClickHandler(products.find((item) => item._id === id));
    quickViewClickHandler(products.find((item) => item._id === id));
  };
  const sorting = (a, b) => {
    if (sort === "name_asc") {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.name < b.name ? 1 : -1;
    }
  };

  return (
    <Wrapper
      className={`${
        opacity ? "opacity-40 pointer-events-none" : "opacity-100 " 
      }`}
    >
      {products
        .slice(0, numberOfProducts)
        .sort((a, b) => sorting(a, b))
        .map((product) => (
          <ProductCard key={product._id} className={displayType}>
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
                    clickHandler(product._id, product.index);
                  }}
                >
                  <IoMdCart size={20} className="z-[999999999]" />
                </Button>
              </div>
            </div>
            <div className="quick flex flex-col absolute top-3 right-0 text-gray p-2">
              <button
                className="btn opacity-0 translate-x-[100%] z-[-1] transition-all duration-300"
                onClick={() => {
                  modalClickHandler();
                  viewClickHandler(product._id);
                }}
              >
                <IoIosExpand size={18} className="mb-3" />
              </button>
              <button className="btn opacity-0 translate-x-[100%] z-[-1] transition-all duration-300">
                <IoIosHeart size={18} className="mb-3" />
              </button>
            </div>
          </ProductCard>
        ))}
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  ${tw`flex flex-row justify-start my-2 flex-wrap gap-x-[0.95rem] transition-opacity duration-300`}
`;

const ProductCard = styled.div`
  ${tw`shadow w-1/2 lg:w-[19%] bg-white p-5 relative rounded transition-all duration-300 hover:shadow-lg my-3`}
  transition: color .2s;
  :hover {
    button {
      ${tw`text-white`}
    }
    button:before {
      ${tw`bg-primary scale-100 z-[99999]`}
    }
    .btn {
      ${tw`opacity-100 translate-x-0 z-[9] text-gray `}
      will-change: transform;
    }
  }
  &.grid {
    ${tw`w-1/2 lg:w-[19%]`}
  }
  &.table {
    ${tw`w-[32%]`}
  }
  &.list {
    ${tw`w-full`}
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
