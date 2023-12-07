// import { Outlet } from 'react-router-dom'
import styles from './Footer.module.css'


const Footer = (props) => {
    return(
        <>
         {/* <Outlet/> */}
       
        
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footer_flex}>
                    <div className={styles.footer__logo}/>
                        <address className={styles.footer_grid}>
                            <div className={styles.footer__office}>
                                <h3 className={styles.office__h3}>Head Office</h3>
                                <p className={styles.office__p}>
                                    "Sport" Business Center
                                    (Bldg.7), Olympic town,
                                    Ashgabat, 744000
                                    Turkmenistan.
                                </p>

                            </div>
                            <div className={styles.footer__socials}>
                                <h3 className={styles.socials__H3}>Socials</h3>
                                <div className={styles.socials_flex}>
                                    <a href='#'><div className={styles.socials__instagram}/></a>
                                    <a href='#'><div className={styles.socials__link}/></a>
                                    <a href='#'><div className={styles.socials__facebook}/></a>
                                </div>
                            </div>
                            <div className={ props.locationOnPage === 'civil' ? styles.footer__civilPage : styles.footer__inquiries}>
                                <h3 className={styles.inquiries__h3}>Inquiries</h3>
                                <p className={styles.inquiries__p}>
                                    For any inquiries, questions or commendations, please call: 
                                    <a className={styles.inquiries__telMail} href="tel:+99312462937">+993 (12) 46 29 37</a>
                                    <a className={styles.inquiries__telMail} href="mailto:info@ynanchyzmat.com">info@ynanchyzmat.com</a>
                                </p>
                            </div>
                        </address>
                </div>
            </div> 
        </footer>
        </>
    )
}

export default Footer