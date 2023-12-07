import Footer from "../../ui/footer/Footer";
import HeaderNav from "../../ui/headerNav/HeaderNav";
import styles from './Oilfield.module.css'

export function Oilfield() {
    return(
        <div className={styles.oilfieldPage}>
            <HeaderNav/>

                <main>
                    <section className="container">
                        <div className={styles.oilfieldPage__flex}>
                            <div className={styles.oilfieldPage__flex_left}>
                                <h2>
                                    Oilfield Services
                                </h2>
    
                                <h3>
                                    Completion Technologies.
                                </h3>
    
                                <ul>
                                    <li>Conventional Completions</li>
                                    <li>Retrievable Service Tools</li>
                                    <li>Liner Hanger Systems</li>
                                    <li>Sand Control Screens and Tools</li>
                                    <li>Intelligent Completion</li>
                                    <li>Unconventional Completions</li>
                                    <li>Frac Sleeve Systems</li>
                                    <li>Drillable and Dissolvable Tools</li>
                                    <li>Openhole Isolation Systems</li>
                                </ul>
                            </div>
    
                            <div className={styles.oilfieldPage__flex_right}/>

                        </div>
                    </section>
                </main>

            <Footer/>
        </div>
    )
}