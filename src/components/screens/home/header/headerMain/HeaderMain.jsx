import styles from './HeaderMain.module.css'
import Button from '../../../../ui/buttons/Button'



function HeaderMain() {
	
	return (
		<div className={styles.main}>
			<div>
				<h1 className={styles.h1}>
					The most Advanced Industrial Services Provider in Turkmenistan
				</h1>
				<Button clickTo='Services' buttonText='Explore Services' buttonType='headerMainButtonLeft'/>
				<Button clickTo='Projects' buttonText='Projects' buttonType='headerMainButtonRight'/>
			</div>

			<div className={styles.brand}/>
				
		</div>
	)
}

export default HeaderMain
