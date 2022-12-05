import styled from "@emotion/styled";
import React,{useState, useEffect} from "react";
import tw from "twin.macro";
import { IoIosCloseCircle } from "react-icons/io";

const Cart = ({ active, cartClickHandler,products, item }) => {

  const [cartItems, setCartItems] = useState([]);


  const closeClickHandler = () => {
    cartClickHandler(false)
  };
  const product = products.find((product) => product._id === item);
  useEffect(() => {
    setCartItems((prevItems) => {
      return [product, ...prevItems];
    });

  }, [product])
  

  console.log(cartItems);

  return (
    <CartBox className={active ? "translate-x-0" : "translate-x-[300px]"}>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-2xl font-bold">Your cart</h2>
        <button onClick={closeClickHandler}>
          <IoIosCloseCircle size={32} />
        </button>
        
        {cartItems > 2 ? cartItems.map((item, index) => (
          <h3>{item[index].name}</h3>
        )) : 'test'}
      </div>
    </CartBox>
  );
};

export default Cart;

const CartBox = styled.div`
  ${tw`fixed top-0 right-0 w-[300px] h-full bg-white shadow-md z-50 transition-all duration-300`}
`;
