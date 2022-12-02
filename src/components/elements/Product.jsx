import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import productImage from "../../assets/images/product-4-1.jpg";

const Product = () => {
  return (
    <Wrapper>
        <ProductCard>
        <div className="image">
            <a href="/">
            <img src={productImage} alt="" />
            </a>
        </div>
        <div className="product-content">
            <p className="text-primary text-sm font-medium uppercase">Aluminium Wheel</p>
            <a href="/">
            <h3 className="text-lg font-bold py-2">
                Glossy Gray 19' Aluminium Wheel AR-19
            </h3>
            </a>
            <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            volutpat velit vel auctor.
            </p>
            <div className="flex justify-between">
            <span className="font-bold text-lg">$300</span>
            <button className="text-primary font-bold">Add to cart</button>
            </div>
        </div>
        </ProductCard>
        <ProductCard>
        <div className="image">
            <a href="/">
            <img src={productImage} alt="" />
            </a>
        </div>
        <div className="product-content">
            <p>Aluminium Wheel</p>
            <a href="/">
            <h3 className="text-xl font-bold py-2">
                Glossy Gray 19' Aluminium Wheel AR-19
            </h3>
            </a>
            <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            volutpat velit vel auctor.
            </p>
            <div className="flex justify-between">
            <span className="font-bold text-lg">$300</span>
            <button>Add to cart</button>
            </div>
        </div>
        </ProductCard>
        <ProductCard>
        <div className="image">
            <a href="/">
            <img src={productImage} alt="" />
            </a>
        </div>
        <div className="product-content">
            <p>Aluminium Wheel</p>
            <a href="/">
            <h3 className="text-xl font-bold py-2">
                Glossy Gray 19' Aluminium Wheel AR-19
            </h3>
            </a>
            <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            volutpat velit vel auctor.
            </p>
            <div className="flex justify-between">
            <span className="font-bold text-lg">$300</span>
            <button>Add to cart</button>
            </div>
        </div>
        </ProductCard>
        <ProductCard>
        <div className="image">
            <a href="/">
            <img src={productImage} alt="" />
            </a>
        </div>
        <div className="product-content">
            <p>Aluminium Wheel</p>
            <a href="/">
            <h3 className="text-xl font-bold py-2">
                Glossy Gray 19' Aluminium Wheel AR-19
            </h3>
            </a>
            <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
            volutpat velit vel auctor.
            </p>
            <div className="flex justify-between">
            <span className="font-bold text-lg">$300</span>
            <button>Add to cart</button>
            </div>
        </div>
        </ProductCard>
    </Wrapper>
  );
};

export default Product;

const ProductCard = styled.div`
  ${tw`shadow-lg w-1/4 p-5 mr-2 rounded transition-all hover:shadow-xl`}
`;

const Wrapper = styled.div`
    ${tw`flex items-center`}
`
