import HeaderNav from "../../../ui/headerNav/HeaderNav"
import HeaderMain from "./headerMain/HeaderMain"
import HeaderFooter from './headerFooter/HeaderFooter'
import styles from './Header.module.css'


function Header() {
	return (
        <header className={styles.header}>
                <div className='container'>
                        <div className={styles.flex}>
                                <HeaderNav/>
                                <HeaderMain/>
                                <HeaderFooter/>
                        </div>
                </div>
        </header>
	)
}

export default Header
