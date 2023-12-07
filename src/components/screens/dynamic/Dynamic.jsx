import Footer from "../../ui/footer/Footer";
import HeaderNav from "../../ui/headerNav/HeaderNav";
import styles from './Dynamic.module.css'


export function Dynamic() {
    return(
        <div className={styles.dynamicPage}>

            <HeaderNav/>

            <main>
                <section className="container">
                    <div className={styles.dynamicPage__flex}>
                        <div className={styles.dynamicPage__flex_left}>

                            <h2>Dynamic-Static Equipment
                                & System Maintenance
                            </h2>

                            <h3>
                                Electrical, Instruments, Metering and Control Systems.
                            </h3>

                            <p>
                                Experienced and trained E&I technicians
                                and System Engineers for your site
                                maintenance and service works at site;
                            </p>

                            <p>
                                The best prices for the subject products
                                and solutions as well as spare parts;
                            </p>

                            <p>
                                Competency for turn-key project designing and engineering, supply & installation,
                                start-up & commissioning, maintenance and repair services for Fiscal Metering units,
                                Process Control Systems (DCS, SIS, PLC, SCADA), F&G & FF Systems, Instruments Revamp
                                & other process control projects.
                            </p>

                            <h3>
                                Dynamic & Static Equipment and their Maintenance.
                            </h3>

                            <p>
                                Our mechanical engineers with excessive experience are continuously trained and supported by our OEM partners, which are leading brands in their industry. Our experts are providing Maintenance, Repair and Overhaul services for pumps, compressors, turbines, pressure vessels, boilers, heat exchangers, steam generators, overhead cranes, valves and many more. With Ynanch Hyzmat, Customers can find best prices for local technical support of the equipment for different brands.
                            </p>
                        </div>

                        <div className={styles.dynamicPage__flex_right} />
                        
                    </div>
                </section>
            </main>

            <Footer/>

        </div>
    )
}