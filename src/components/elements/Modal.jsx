import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IoIosClose } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

const Modal = ({ modalActive, modalClickHandler, cartClickHandler, products, product }) => {
  const clickCartHandler = (id) => {
    cartClickHandler(products.find((item) => item._id === id));
  }
  const materials = product[0].material.split(' ');
  const colors = product[0].color.split(',');
  const ref = useRef();
  // useEffect(() => {
  //   const clickOutsiteHandler = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       modalClickHandler(false);
  //     }
  //   };
  //   document.addEventListener("click", clickOutsiteHandler);
  //   return () => {
  //     document.removeEventListener("click", clickOutsiteHandler);
  //   };
  // }, [modalClickHandler]);

  return (
    <Wrapper
      className={` ${
        modalActive ? "opacity-100 z-[1050]" : "opacity-0 z-[-1]"
      }`}
    >
      <ModalBox
        className={` ${
          modalActive ? "opacity-100" : "opacity-0"
        }`}
        ref={ref}
      >
        <div className="w-full md:w-1/3">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full">
                <img src={product[0].imageURL} alt={product[0].name} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={product[0].imageURL} alt={product[0].name} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={product[0].imageURL} alt={product[0].name} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-2/3 text-left px-6 py-12">
          <h3 className="text-2xl font-bold pb-4">{product[0].name}</h3>
          <span className="text-green-600">In Stock</span>
          <p className="my-4">{product[0].description}</p>
          <span className="font-bold text-2xl">${product[0].price}</span>
          <div className="product-form my-3">
            {/* Material */}
            <div className="product-form__row pb-4">
              <div className="product-form__title">
                <span className="text-sm uppercase">Material</span>
              </div>
              <div className="product-form__inputs flex">
                {materials.map((material,index) => (
                    <div className="product-form__input flex items-center pr-2" key={index}>
                      <input type="radio" name="option.material" value="Aluminium" />
                      <span className="ml-2">{material}</span>
                    </div>
                ))}
              </div>
            </div>
            {/* Color */}
            <div className="product-form__row pb-4">
              <div className="product-form__title">
                <span className="text-sm uppercase">Color</span>
              </div>
              <div className="product-form__inputs flex">
                {colors.map((color, index) => (
                  <div className="product-form__input flex items-center pr-2" key={index}>
                    <input type="radio" name="option.color" value="Aluminium" />
                    <span className="ml-2">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="quickview__actions">
            <button className="bg-primary p-2 text-white" onClick={() => {clickCartHandler(product[0]._id)}}>Add To cart</button>
          </div>
        </div>
        <button className="absolute top-5 right-5">
          <IoIosClose
            size={32}
            className="transition-all duration-300 text-black hover:text-primary"
            onClick={() => modalClickHandler(false)}
          />
        </button>
      </ModalBox>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full bg-[#0000009e] flex justify-center items-center text-center px-5 transition-opacity duration-500 z-[9999999999]`}
`;

const ModalBox = styled.div`
  ${tw`w-full md:max-w-4xl mx-auto bg-white h-min flex flex-col md:flex-row items-start transition-all duration-500 relative`}
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
