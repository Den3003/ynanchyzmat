import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import ServicesPage from "./servicesPages/ServicesPage"

import 'swiper/css';

// import './style.css';
import { Mousewheel, Keyboard } from 'swiper/modules';

const Services = ({swipeChange}) => {

    let touchStart = 0
    let touchEnd = 0

    return(
         <Swiper
        slidesPerView={1}
        speed={800}
        mousewheel={true}
        simulateTouch={false}
        keyboard={{
        pageUpDown: true
        }}
        observer={true}
        observeParents={true}
        observeSlideChildren={true}
        nested={true}
        threshold={500}
        modules={[Mousewheel, Keyboard]}

        onSlideChange={(swipe) => {swipeChange(swipe.activeIndex)}}

        onKeyPress={(swiper, key) =>{ 
          if(key === 38) {
            swiper.slidePrev()
          }
          if(key === 40) {
            swiper.slideNext()
          }
        }}

        onTouchStart={(swiper, event) => {
          touchStart = event.screenY
          }}

        onTouchEnd={(swiper, event) => {
          touchEnd = event.screenY
          }}

        onTap={(swiper, event) => {
          if(touchStart > touchEnd) {
            swiper.slideNext()
          }
          if(touchStart < touchEnd) {
            swiper.slidePrev()
          }
        }}
        
      >
            <SwiperSlide><ServicesPage servicesType='dynamic'/></SwiperSlide>
            <SwiperSlide><ServicesPage servicesType='pipeline'/></SwiperSlide>
            <SwiperSlide><ServicesPage servicesType='environment'/></SwiperSlide>
            <SwiperSlide><ServicesPage servicesType='civil'/></SwiperSlide>
            <SwiperSlide><ServicesPage servicesType='oilfield'/></SwiperSlide>
         </Swiper>
    )
}

export default Services