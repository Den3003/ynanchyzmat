import { useSwiper } from 'swiper/react';

import Button from '../buttons/Button'
import styles from './HeaderNav.module.css'




function HeaderNav(props) {
	const swiper = useSwiper();
	
	return (
		<header className='container'>
			<div className={styles.headerNav}>
			<div className={styles.logo}/>

			<ul className={styles.navList}>
				<li><a href='#' className={styles.listA}>Main</a></li>
				<li><a onClick={() => swiper.slideTo(2, 1000)} href='#' className={styles.listA}>Services</a></li>
				<li><a onClick={() => swiper.slideTo(4, 1000)} href='#' className={styles.listA}>Projects</a></li>
				<li><a onClick={() => swiper.slideTo(1, 1000)} href='#' className={styles.listA}>About Us</a></li>
				<li><a onClick={() => swiper.slideTo(6, 1000)} href='#' className={styles.listA}>Contacts</a></li>
			</ul>
			<Button buttonText='Book a call' buttonType={props.locationOnPage ==='civil' ? 'civil' : 'headerNavButton'}/>
			</div>
		</header>
	)
}

export default HeaderNav
