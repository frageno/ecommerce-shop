import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Product from "../elements/Product";
import Navbar from "./Navbar";
import Alert from "../elements/Alert";
import Modal from "../elements/Modal";


const Shop = ({ products }) => {
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [alert, setAlert] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  // console.log(products);
  // console.log(quantity)
  const tempQuantity = products.map(item => item.quantity);
  const [quantity, setQuantity] = useState(tempQuantity);

  // const filteredQuantity = [...new Set(tempQuantity)];
  // console.log(quantity);
  const cartClickHandler = (item, index2) => {
    let count = 1;
    count = count + 1;
    const productQuantity= products.find((product) => product.index === index2);
    setQuantity(prev => {
      return [productQuantity.quantity = quantity + 1,
      ...prev]
    
    });
    console.log(quantity)
    // console.log(quantity.find((quantit) => quantit[index2]));
    // count++;
    // if(quantity[index] === index){
    //   console.log('test')
    //   setQuantity(
    //     quantity[index] = count + 1
    //   )
    // }
    // console.log(quantity);
    // console.log(quantity[index] = count)
    // console.log(quantity, 'trtrwres')
    // if(index === quantity[index]) {
    //   console.log(quantity[index]);
    // }
    // setQuantity((prev) => {
    //   return [item._id, ...prev];
    // });
    // let productQuantity = quantity.products[0].find((item) => item._id === id);
    // console.log(productQuantity);
    // let productQuantity = products.find((item) => item._id === id);
    // if(productQuantity === item) {
    //   setQuantity((prev) => {
    //     return (prev += productQuantity.quantity);
    //   });
    // }else {
    //   setQuantity(1);
    // }
    // console.log(quantity);
    // Adding item to cart
    setItem((prevItems) => {
      // Check if product is already in cart if is add quantity
      if(!prevItems.includes(item)){
        // setQuantity(1);
        return [item, ...prevItems];
      } else {
        // setQuantity((prevQuantity) => {
        //   // item.quantity++;
        //   return [productQuantity, ...prevQuantity];
        // });
        return [...prevItems];
      }
    });
    console.log(quantity[2]);
    // Counting price of added items to cart
    setSubTotal((prevPrice) => {
      return (prevPrice += item.price);
    });
    // Showing alert
    setAlert(true);
  };

  const quickViewClickHandler = (product) => {
    setProduct((prevProduct) => {
      return [product, ...prevProduct];
    })
  }

  useEffect(() => {
    const closeModal = e => {
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
      {modalActive && <Modal modalActive={modalActive} products={products} product={product} cartClickHandler={cartClickHandler} modalClickHandler={() => setModalActive(prev => !prev)} /> }
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  ${tw`container mx-auto p-5`};
`;
