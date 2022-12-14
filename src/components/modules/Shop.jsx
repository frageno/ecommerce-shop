import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";
import Alert from "../elements/Alert";
import Modal from "../elements/Modal";


const Shop = ({ products }) => {
  const [item, setItem] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [alert, setAlert] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  const cartClickHandler = (item) => {
    // Adding item to cart
    setItem((prevItems) => {
      // Check if product is already in cart if is add quantity
      if(!prevItems.includes(item)){
        // setQuantity(1);
        return [item, ...prevItems];
      } else {
        setQuantity(quantity+1);
        return [...prevItems];
      }
    });
    // Counting price of added items to cart
    setSubTotal((prevPrice) => {
      return (prevPrice += item.price);
    });
    // Showing alert
    setAlert(true);
  };

  const quickViewClickHandler = (item) => {
    setItem((prevItems) => {
      return [item, ...prevItems];
    })
  }

  useEffect(() => {
    const closeModal = e => {
      console.log(e);
      setModalActive(false);
    }
  
    return () => {
      document.body.removeEventListener('click' , closeModal)
    }
  }, [modalActive])
  
  const modalClickHandler = () => {
    console.log('test');
    setModalActive(prev => !prev);
  }
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
    setQuantity(0);
  };

  console.log(modalActive)
  return (
    <Container>
      <Navbar
        products={products}
        item={item}
        quantity={quantity}
        subtotal={subtotal}
        removeItemHandler={removeItemHandler}
      />
      <h2 className="text-4xl text-center font-bold pt-10">Shop</h2>
      <Product products={products} cartClickHandler={cartClickHandler} modalClickHandler={modalClickHandler} quickViewClickHandler={quickViewClickHandler}/>
      <Alert alert={alert} closeAlertClickHandler={closeAlertClickHandler} item={item}/>
      {modalActive && <Modal modalActive={modalActive} modalClickHandler={() => setModalActive(prev => !prev)} item={item}/> }
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
