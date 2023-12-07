import Footer from "../../ui/footer/Footer";
import HeaderNav from "../../ui/headerNav/HeaderNav";
import styles from './Environment.module.css'



export function Environment() {
    return(
        <div className={styles.environmentPage}>

            <HeaderNav/>

                <main>
                    <section className="container">
                        <div className={styles.environmentPage__flex}>
                            <div className={styles.environmentPage__flex_left}>
                                <h2>
                                    Environment Protection
                                </h2>

                                    <h3>
                                        Environment Impact Assessment
                                    </h3>
                                    <p className={styles.flex__p_first}>
                                        We help to identify and mitigate any adverse impacts that the project may have on the
                                        environment before it proceeds.
                                    </p>

                                    <h3>
                                        Handling of all Types of Industrial Wastes
                                    </h3>
                                    <p className={styles.flex__p_second}>
                                        Our service includes collection, transportation, treatment, and disposal of hazardous and
                                        non-hazardous waste in an environmentally friendly manner.
                                    </p>

                                    <h3 className={styles.flex__h3_three}>
                                        Waste Passports,
                                        Formation Norms
                                        & Limits on their Disposal
                                    </h3>
                                    <p className={styles.flex__p_three}>
                                        We create a waste passport that tracks the journey of hazardous waste from its point of
                                        origin to its final disposal, form norms and limits to help ensure that waste is disposed of
                                        in a way that protects human health and the environment.
                                    </p>

                                    <h3>
                                        Disposing & Utilizing unrecoverable Wastes
                                    </h3>
                                    <p>
                                        We propose the process of safely disposing of waste that cannot be recycled or reused, by
                                        using our owned incinerator.
                                    </p>

                                    <h3>
                                        Recycling Recoverable Wastes
                                    </h3>
                                    <p className={styles.flex__p_five}>
                                        Our service includes collection, sorting, and processing of waste materials that can be
                                        reused to create new products, reducing the need for raw materials.
                                    </p>

                                    <h3>
                                        Burying Hazardous Waste on Approved Polygons
                                    </h3>
                                    <p className={styles.flex__p_penultimate}>
                                        Our service offers a method of disposing of hazardous waste that involves isolating it in a
                                        specially designed-landfill.
                                    </p>

                                    <h3>
                                        IWI - 500 Thermal Disposal Unit
                                    </h3>

                                    <p className={styles.flex__p_last}>
                                        ES Ynach Hyzmat own a thermal disposal unit.
                                        Here are characteristics of it:
                                    </p>

                                <div className={styles.flex__table_left}/>

                            </div>

                            <div className={styles.environmentPage__flex_right}/>
                           
                        </div>
                    </section>
                </main>

            <Footer/>

        </div>
    )
}