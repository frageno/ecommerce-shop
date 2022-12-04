import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoIosCloseCircle } from "react-icons/io";

const Cart = () => {
  return (
    <CartBox>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-2xl font-bold">Your cart</h2>
        <button>
          <IoIosCloseCircle size={32} />
        </button>
      </div>
    </CartBox>
  );
};

export default Cart;

const CartBox = styled.div`
  ${tw`fixed top-0 right-0 w-[300px] h-full bg-white shadow-md z-50`}
`;
