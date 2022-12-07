import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoIosCloseCircle, IoIosClose } from "react-icons/io";

const Cart = ({
  active,
  cartClickHandler,
  item,
  subtotal,
  removeItemHandler,
}) => {
  const shippingPrice = 25;
  const tax = 4.6;
  const total = shippingPrice + tax + subtotal;

  const closeClickHandler = () => {
    cartClickHandler(false);
  };

  // console.log('CART', item.length);
  // if(item.length >= 0){
  //   console.log('test')
  // }
  // const product = products.find((product) => product._id === item);

  return (
    <CartBox className={active ? "translate-x-0" : "translate-x-[300px]"}>
      <div className="flex flex-col justify-between p-5">
        <div className="cart__header flex justify-between mb-4 w-full">
          <h2 className="text-2xl font-bold">Your cart</h2>
          <button onClick={closeClickHandler}>
            <IoIosCloseCircle size={32} />
          </button>
        </div>
        <div className="cart__items block">
          {item.map((product, index) => (
            <CartItemWrap key={index}>
              <div className="image w-1/3">
                <a href="/">
                  <img src={product.imageURL} alt={product.name} />
                </a>
              </div>
              <div className="cart__content w-2/3">
                <h4 className="text-sm mb-1">{product.name}</h4>
                <span className="text-xs bg-primary py-[2px] px-2 text-white rounded-[5px]">
                  ${product.price}
                </span>
              </div>
              <button className="transition-all duration-300 hover:bg-border rounded-full">
                <IoIosClose
                  size={22}
                  className="transition-all duration-300 text-gray hover:text-primary"
                  onClick={() => removeItemHandler(product._id)}
                />
              </button>
            </CartItemWrap>
          ))}
          { item.length >= 1 ?
            <>
              <div className="py-5">
                <CartTotalsWrap>
                  <p className="w-1/2 font-medium">Subtotal</p>
                  <span className="w-1/1 text-right">${subtotal}</span>
                </CartTotalsWrap>
                <CartTotalsWrap>
                  <p className="w-1/2 font-medium">Shipping</p>
                  <span className="w-1/1 text-right">${shippingPrice}</span>
                </CartTotalsWrap>
                <CartTotalsWrap>
                  <p className="w-1/2 font-medium">Tax</p>
                  <span className="w-1/1 text-right">${tax}</span>
                </CartTotalsWrap>
                <CartTotalsWrap>
                  <p className="w-1/2 font-medium">Total</p>
                  <span className="w-1/1 text-right">${total}</span>
                </CartTotalsWrap>
              </div>
              <div className="w-full buttons flex justify-around items-center">
                <button>View cart</button>
                <button>Checkout</button>
              </div>
            </>
            : <p>Your cart is empty</p>}
        </div>
      </div>
    </CartBox>
  );
};

export default Cart;

const CartBox = styled.div`
  ${tw`fixed top-0 right-0 w-[300px] h-full overflow-auto bg-white shadow-md z-50 transition-all duration-300`}
`;

const CartItemWrap = styled.div`
  ${tw`py-4 border-b border-border flex items-start gap-x-2 relative`}
`;

const CartTotalsWrap = styled.div`
  ${tw`w-full flex justify-between pb-1`}
`;
