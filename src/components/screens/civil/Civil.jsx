import Footer from "../../ui/footer/Footer";
import HeaderNav from "../../ui/headerNav/HeaderNav";
import styles from './Civil.module.css'



export function Civil() {
    return(
        <div className={styles.civilPage}>
            <HeaderNav locationOnPage='civil'/>

                <main>
                    <section className="container">
                        <div className={styles.civilPage__flex}>
                            <div className={styles.civilPage__flex_left}>
                                <h2>
                                    Civil Construction
                                </h2>

                                <h3>
                                    Capital construction and installation works
                                    on a turnkey basis, including:
                                </h3>

                                <ul>
                                    <li>Earthworks</li>
                                    <li>Reinforced concrete works</li>
                                    <li>Installation and dismantling of scaffolding</li>
                                    <li>Insulation works</li>
                                    <li>Masonry walls</li>
                                    <li>Painting works</li>
                                    <li>Floor installation works</li>
                                    <li>Finishing works on interior walls</li>
                                    <li>Suspended ceilings</li>
                                    <li>Facade works</li>
                                    <li>Roof arrangement</li>
                                    <li>Mechanical works</li>
                                    <li>Electrical installation works</li>
                                    <li>Furniture and equipment</li>
                                    <li>Landscaping Works</li>
                                </ul>
                            </div>

                            <div className={styles.civilPage__flex_right}/>

                        </div>
                    </section>
                </main>

            <Footer locationOnPage='civil'/>
        </div>
    )
}