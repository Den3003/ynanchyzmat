import styles from './Partners.module.css'

const Partners = () => {
    return(
        <section className={styles.partners}>
            <div className="container">
                <h2 className={styles.partners__h2}>We Work With</h2>
                <p className={styles.partners__headerP}>Turkmen and world’s leading EPC and oil & gas companies</p>

                <div className={styles.partners__footer}>
                    <p className={styles.partners__footerP}>
                        We are proud that we collaborate with such big local & international companies as: TurkmenGas, TurkmenOil, Petronas, CNPC and etc. 
                        Our core value is not only to provide a service, but also keep supporting during a long time.
                    </p>

                    <div className={styles.partners__img}/>
                </div>
            </div>
        </section>
    )
}

export default Partners