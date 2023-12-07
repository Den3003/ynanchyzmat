import styles from './HeaderFooter.module.css'


function HeaderFooter() {
	return (
        <div className={styles.header__footer}>
            <p className={styles.footer__left}>
                ES “Ynanch Hyzmat”,  2023.
            </p>

            <div className={styles.footer__right}>
                <p className={styles.right__p}>
                    Scroll to discover
                </p>
                <div className={styles.right__img}/>
            </div>
        </div>
	)
}

export default HeaderFooter