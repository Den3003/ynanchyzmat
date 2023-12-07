import { useSwiper } from 'swiper/react';

import styles from './Button.module.css'

const Button = (props) => {
    const swiper = useSwiper();
	console.log(swiper)
    return(
        <button className={props.buttonType === 'headerNavButton' 
        ? styles.headerNavButton 
        : props.buttonType === 'headerMainButtonLeft'
        ? styles.headerMainButtonLeft 
        : props.buttonType === 'headerMainButtonRight'
        ? styles.headerMainButtonRight 
        : props.buttonType === 'civil' 
        ? styles.civilPage : null}
        onClick={props.clickTo === 'Services' ? () => swiper.slideTo(2, 800) 
        : props.clickTo === 'Projects'
        ? () => swiper.slideTo(4, 800) 
        : null
        }>{props.buttonText}</button>
    )
}

export default Button