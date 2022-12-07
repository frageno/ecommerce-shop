import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";
import Alert from "../elements/Alert";

const Shop = ({ products }) => {
  const [item, setItem] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [alert, setAlert] = useState(false);

  const cartClickHandler = (item) => {
    // Adding item to cart
    setItem((prevItems) => {
      return [item, ...prevItems];
    });
    // Counting price of added items to cart
    setSubTotal((prevPrice) => {
      return (prevPrice += item.price);
    });
    // Showing alert
    setAlert(true);
  };
  // Close alert after add item
  const closeAlertClickHandler = () => {
    setAlert(false);
  };

  setTimeout(() => {
    closeAlertClickHandler()
  },3000)

  // Remove items in cart and update subtotal by decreasing price
  const removeItemHandler = (id) => {
    const singleProduct = item.find((item) => item._id === id);
    setItem(item.filter((item) => item._id !== id));
    setSubTotal(subtotal - singleProduct.price);
  };
  return (
    <Container>
      <Navbar
        products={products}
        item={item}
        subtotal={subtotal}
        removeItemHandler={removeItemHandler}
      />
      <h2 className="text-4xl text-center font-bold pt-10">Shop</h2>
      <Product products={products} cartClickHandler={cartClickHandler} />
      <Alert alert={alert} closeAlertClickHandler={closeAlertClickHandler} item={item}/>
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
