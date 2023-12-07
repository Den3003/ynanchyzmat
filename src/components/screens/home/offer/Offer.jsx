import styles from './Offer.module.css'


const Offer = () => {
    return(
        <section className={styles.offer}>
            <div className='container'>
                <div className={styles.offer__flex}>
                    <h2 className={styles.flex__h2}>
                        Services We Offer:
                    </h2>


                    <div className={styles.offerImgMobile}/>

                    
                    <div className={styles.offerMain}>
                        <p className={styles.offerMain__p1}>
                            ES Ynanch Hyzmat provides a wide range of services to meet customer’s needs.
                            The biggest local and international companies rely the service of their facilities
                            or new projects to us. We strive for doing our best for our custumers and end-users.
                        </p>
                        <p className={styles.offerMain__p2}>
                            Scroll down to learn more
                        </p>
                    </div>

                    <div className={styles.offerFooter__flex}>
                        <div className={styles.offerImg1}/>
                        <div className={styles.offerImg2}/>
                        <div className={styles.offerImg3}/>
                        <div className={styles.offerImg4}/>
                        <div className={styles.offerImg5}/>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Offer