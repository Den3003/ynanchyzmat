import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Header from './header/Header'
import AboutUs from './aboutUs/AboutUs'
import Offer from './offer/Offer'
import Services from './Services'
import Experience from './experience/Experience'
import Partners from './partners/Partners'
import Footer from '../../ui/footer/Footer'

import 'swiper/css'

import { Mousewheel, Keyboard } from 'swiper/modules'

function Home() {
	const stateVerticalSwiper = useRef(null)
	const stateHorizontalSwiper = useRef(null)
	
	const swiperChange = (value) => {

		if (value === 4) {
			setTimeout(() => {
				stateVerticalSwiper.current.swiper.allowSlideNext = true
			}, 1500)
		}
		if (value < 4) {
			stateVerticalSwiper.current.swiper.allowSlideNext = false
		}
		if (value > 0) {
			
			stateVerticalSwiper.current.swiper.allowSlidePrev = false
		}
		if (value === 0) {
			setTimeout(() => {
				stateVerticalSwiper.current.swiper.allowSlidePrev = true
			}, 1700)
		}
	}

	return (
		<Swiper
			ref={stateVerticalSwiper}
			direction={'vertical'}
			speed={800}
			slidesPerView={'auto'}
			mousewheel={true}
			keyboard={true}
			simulateTouch={false}
			nested={true}
			modules={[Mousewheel, Keyboard]}
			onSlideChange={swiper => {
				
				if (swiper.activeIndex < 3) {
					swiper.allowSlideNext = true
				}

				if (swiper.activeIndex === 3 && swiper.previousIndex === 2) {
					swiper.allowSlideNext = false
					stateHorizontalSwiper.current.swiper.allowSlideNext = false
					setTimeout(() => {
						stateHorizontalSwiper.current.swiper.allowSlideNext = true
					}, 1500)
				}

				if (swiper.activeIndex === 4) {
					swiper.allowSlidePrev = true
				}

				if (swiper.activeIndex === 3 && swiper.previousIndex === 4) {
					swiper.allowSlidePrev = false

					stateHorizontalSwiper.current.swiper.allowSlidePrev = false
					setTimeout(() => {
						stateHorizontalSwiper.current.swiper.allowSlidePrev = true
					}, 1700)
				}

				if (
					swiper.activeIndex === 3 &&
					swiper.previousIndex === 4 &&
					stateHorizontalSwiper.current.swiper.activeIndex === 0
				) {
					swiper.allowSlidePrev = true
					swiper.allowSlideNext = false
				}
			}}
		>
			<SwiperSlide>
				<Header />
			</SwiperSlide>
			<SwiperSlide>
				<AboutUs />
			</SwiperSlide>
			<SwiperSlide>
				<Offer />
			</SwiperSlide>
			<SwiperSlide>
				<Services swiperChange={swiperChange} ref={stateHorizontalSwiper} />
			</SwiperSlide>
			<SwiperSlide>
				<Experience />
			</SwiperSlide>
			<SwiperSlide>
				<Partners />
			</SwiperSlide>
			<SwiperSlide>
				<Footer />
			</SwiperSlide>
		</Swiper>
	)
}

export default Home
