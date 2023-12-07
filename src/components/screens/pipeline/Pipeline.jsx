import Footer from "../../ui/footer/Footer";
import HeaderNav from "../../ui/headerNav/HeaderNav";
import styles from './Pipeline.module.css'



export function Pipeline() {
    return(
        <div className={styles.pipelinePage}>

            <HeaderNav/>

            <main>
                <section className="container">
                    <div className={styles.pipelinePage__flex}>
                        <div className={styles.pipelinePage__flex_left}>
                            <h2>
                                Pipeline Services
                            </h2>

                            <div className={styles.flex_left_top}>
                                <div className={styles.flex_left_top1}>
                                    <h3>
                                        Hot tapping and plugging.
                                    </h3>

                                    <p>
                                        Safe intervention on pressurized equipment without interrupting
                                        service up to 56” pipe sizes.
                                    </p>
                                </div>

                                <div className={styles.flex_left_top2}>
                                    <h3>
                                        Pigging technology
                                    </h3>

                                    <p>
                                        Services with programs for gauging and cleaning pipelines to improve
                                        throughout up to 42” pipe sizes.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.flex_left_bottom}>
                                <div className={styles.flex_left_bottom1}>
                                    <h3>
                                        Pipeline repair solutions
                                    </h3>

                                    <p>
                                        Using advanced composite wrapping materials and clamping products to extend
                                        service life of pipelines of any size.
                                    </p>
                                </div>

                                <div className={styles.flex_left_bottom2}>
                                    <h3>
                                        In-line inspection
                                    </h3>

                                    <p>
                                        Service with information about the integrity of the pipeline to help
                                        discover risks and identify solutions up to 56” pipe sizes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.pipelinePage__flex_right} />
                    </div>
                </section>
            </main>

            <Footer/>

        </div>
    )
}