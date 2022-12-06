import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";

const Shop = ({ products }) => {
  const [item, setItem] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  // const [empty, setEmpty] = useState(false);

  const cartClickHandler = (item) => {
    // Adding item to cart
    setItem((prevItems) => {
      return [item, ...prevItems];
    });
    // Counting price of added items to cart
    setSubTotal((prevPrice) => {
      return (prevPrice += item.price);
    });
    // setEmpty(true);
    // console.log(empty);

  };

  // Remove items in cart and update subtotal by decreasing price
  const removeItemHandler = (id) => {
    const singleProduct = item.find((item) => item._id === id);
    setItem(item.filter((item) => item._id !== id));
    setSubTotal(subtotal - singleProduct.price);

    // if(!item.length <= 0){
    //   setEmpty(false);
    //   console.log(empty)
    // }
  };
  return (
    <Container>
      <Navbar
        products={products}
        item={item}
        subtotal={subtotal}
        removeItemHandler={removeItemHandler}
      />
      <Product products={products} cartClickHandler={cartClickHandler} />
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
