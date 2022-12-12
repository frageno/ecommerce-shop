import React from 'react'
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Modal = () => {
  return (
    <Wrapper>
        {/* <ModalBox>Modal</ModalBox> */}
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.div`
    ${tw`fixed top-0 left-0 w-full h-full bg-[#0000000e] z-[999999] flex justify-center items-center text-center`}
`

const ModalBox = styled.div`
    ${tw`container mx-auto bg-white p-6 opacity-100`}
`