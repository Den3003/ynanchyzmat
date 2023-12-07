import styles from './AboutUs.module.css'
import AboutUsCard from './AboutUsCard'


function AboutUs() {
	return (
		<section className={styles.about}>
			<div className='container'>
                    <h2 className={styles.about__h2_mobile}>Who We Are</h2>
                <div className={styles.about__flex}>
                    <div className={styles.about__left}>
                        <h2 className={styles.left__h2}>
                            Who We Are
                        </h2>

                        <p className={styles.left__p1}>
                            Founded in 2016, Ynanch Hyzmat started
                            increasing the awareness of its establishment
                            in the local Oil and Gas industry of Turkmenistan.
                        </p>
                        <p className={styles.left__p2}>
                            Catching the momentum, Ynanch Hyzmat got
                            licenses to over 21 activities for works in Oil & Gas,
                            Energy, Civil Construction, Chemistry
                            and Petrochemistry, and Agriculture.
                        </p>
                        <p className={styles.left__p3}>
                            With the drive for implementing high quality standards
                            in its operations, Ynanch Hyzmat continuously works
                            on its international partnership network.
                        </p>
                    </div>

                    <div className={styles.about__right}>
                        <div className={styles.rightColumn}>
                            <AboutUsCard cardType='est'/>
                            <AboutUsCard cardType='people'/>
                        </div>
                        <div className={styles.rightColumn}>
                            <AboutUsCard cardType='check'/>
                            <AboutUsCard cardType='hands'/>
                        </div>

                    </div>
                </div>
            </div>
		</section>
	)
}

export default AboutUs
