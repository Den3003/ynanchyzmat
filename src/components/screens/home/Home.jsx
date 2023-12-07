import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from "./header/Header"
import AboutUs from './aboutUs/AboutUs'
import Offer from './offer/Offer'
import Services from "./Services"
import Experience from "./experience/Experience"
import Partners from './partners/Partners'
import Footer from "../../ui/footer/Footer";

import 'swiper/css';

import { Mousewheel, Keyboard } from 'swiper/modules';



function Home() {

	const swiperRef = useRef(null);
	const [value, setValue] = useState(0);


	const swipeChange = (value) => {
    setValue(value)
	// console.log(value)
    if(value === 4) {

    	setTimeout(() => {
    	swiperRef.current.swiper.allowSlideNext = true
    	}, 1000);

    }
    if(value < 4) {
    	swiperRef.current.swiper.allowSlideNext = false
    }
    if(value > 0) {
    	swiperRef.current.swiper.allowSlidePrev = false
    }
    if(value === 0) {

    	setTimeout(() => {
        swiperRef.current.swiper.allowSlidePrev = true
    	}, 1000);

    }
	}


	return (
		<Swiper
        ref={swiperRef}
        direction={'vertical'}
        speed={800}
        slidesPerView={'auto'}
        mousewheel={true}
        keyboard={true}
        simulateTouch={false}
        nested={true}
        modules={[Mousewheel, Keyboard]}

    	onSlideChange={(swiper) => {			

            if(swiper.activeIndex < 3) {
            	swiper.allowSlideNext = true
            }
            
            if(swiper.activeIndex === 3 && swiper.previousIndex === 2) {
            	swiper.allowSlideNext = false
            }

            if(swiper.activeIndex === 4) {
            	swiper.allowSlidePrev = true
            }

            if(swiper.activeIndex === 3 && swiper.previousIndex === 4) {
            	swiper.allowSlidePrev = false
            }

        	}}
    	>
		
		<SwiperSlide><Header/></SwiperSlide>
		<SwiperSlide><AboutUs/></SwiperSlide>
		<SwiperSlide><Offer/></SwiperSlide>
		<SwiperSlide>
			<Services swipeChange={swipeChange}/>
		</SwiperSlide>
		<SwiperSlide><Experience/></SwiperSlide>
		<SwiperSlide><Partners/></SwiperSlide>
		<SwiperSlide><Footer/></SwiperSlide>
		</Swiper>
	)
}

export default Home
