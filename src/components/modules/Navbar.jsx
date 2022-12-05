import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoMdCart } from "react-icons/io";
import Cart from "../elements/Cart";

const Navbar = ({item, products}) => {
  // State for active cart items
  const [isActive, setIsActive] = useState(false);

  // Handlers
  const cartClickHandler = (active) => {
    setIsActive(active);
  };

  return (
    <NavbarBox>
      <a href="/" className="text-2xl font-bold">
        Car<span className="text-primary">Parts.</span>
      </a>
      <div className="cart-box relative">
        <button
          onClick={() => {
            cartClickHandler(true);
          }}
        >
          <IoMdCart size={32} />
          <Counter>0</Counter>
        </button>
        <Cart active={isActive} cartClickHandler={cartClickHandler} item={item} products={products} />
      </div>
    </NavbarBox>
  );
};

export default Navbar;

const NavbarBox = styled.div`
  ${tw`flex justify-between items-center`}
`;

const Counter = styled.span`
  ${tw`absolute bottom-[-5px] right-[-10px] bg-primary rounded-full text-white py-1 px-2 text-xs`}
`;
