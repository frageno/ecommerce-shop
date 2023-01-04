import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoMdCart, IoIosSearch } from "react-icons/io";
import Cart from "../elements/Cart";

const Navbar = ({products, item, quantity, subtotal, removeItemHandler}) => {
  // State for active cart items
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // const truncatedText = searchTerm.length > 20 ? setSearchTerm(searchTerm.substring(0,20)) + '...' : searchTerm;


  // Handlers
  const cartClickHandler = (active) => {
    setIsActive(active);
  };

  const onSearchBarChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const onSearchClick = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  return (
    <NavbarBox>
      <a href="/" className="text-2xl font-bold uppercase">
        Car<span className="text-primary">Parts.</span>
      </a>
      <div className="navigation">
        <ul className="flex items-center">
          <li className="px-3 font-medium">
            <a href="/">Home</a>
          </li>
          <li className="px-3 font-medium">
            <a href="/">Shop</a>
          </li>
          <li className="px-3 font-medium relative">
            <a>Categories</a>
            <div className="submenu-box opacity-0 flex items-center bg-white p-5 shadow absolute top-8 w-[500px]">
              <ul className="submenu mr-8">
                <span className="font-bold">Car parts</span>
                <li className="py-1 mt-2">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
              </ul>
              <ul className="submenu mr-8">
                <span className="font-bold">Car parts</span>
                <li className="py-1 mt-2">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
              </ul>
              <ul className="submenu mr-8">
                <span className="font-bold">Car parts</span>
                <li className="py-1 mt-2">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
              </ul>
              <ul className="submenu mr-8">
                <span className="font-bold">Car parts</span>
                <li className="py-1 mt-2">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
                <li className="py-1">
                  <a href="">Wheel</a>
                </li>
              </ul>

            </div>
          </li>
          <li className="px-3 font-medium">
            <a href="/">Blog</a>
          </li>
          <li className="px-3 font-medium">
            <a href="/">Account</a>
          </li>
          <li className="px-3 font-medium">
            <a href="/">Pages</a>
          </li>
        </ul>
      </div>
      <div className="cart-box relative flex items-center">
      {/* SEARCH BAR */}
        <div className="search-bar relative mr-5">
          <div className="search-bar__container bg-white flex items-center shadow">
            <input type="text" className="px-2 focus:outline-none" placeholder="Enter keywords" onChange={onSearchBarChange} value={searchTerm} />
            <button className="w-[30px] h-[40px] relative px-1">
              <IoIosSearch className="!mr-0" />
            </button>
          </div>
          <ul className="search-results bg-white shadow mt-3 absolute w-full rounded-[5px] z-[1050]">
            {products
            .filter((product) => {
              const term = searchTerm.toLowerCase()
              const fullName = product.name.toLowerCase();

              return term && fullName.startsWith(searchTerm) && fullName !== searchTerm
            })
            .slice(0,5)
            .map((product) => (
              <li className="p-3 cursor-pointer hover:bg-[#f2f2f2]" onClick={() => onSearchClick(product.name)} key={product._id}>{product.name}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => {
            cartClickHandler(true);
          }}
        >
          <IoMdCart size={24} />
          <Counter>{item.length}</Counter>
        </button>
        <Cart active={isActive} cartClickHandler={cartClickHandler} item={item} quantity={quantity} subtotal={subtotal} removeItemHandler={removeItemHandler} />
      </div>
    </NavbarBox>
  );
};

export default Navbar;

const NavbarBox = styled.div`
  ${tw`flex justify-between items-center border-b border-[#f2f2f2] pb-5`}
`;

const Counter = styled.span`
  ${tw`absolute bottom-[-5px] right-[-10px] bg-primary rounded-full text-white py-1 px-2 text-xs w-[24px] h-[24px]`}
`;

