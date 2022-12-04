import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoMdCart } from "react-icons/io";
import Cart from "../elements/Cart";

const Navbar = () => {
  return (
    <NavbarBox>
      <a href="/" className="text-2xl font-bold">
        Shop<span className="text-primary">Parts.</span>
      </a>
      <div className="cart-box relative">
        <button>
          <IoMdCart size={32} className="cursor-pointer" />
          <Counter>3</Counter>
        </button>
        {/* <Cart /> */}
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
