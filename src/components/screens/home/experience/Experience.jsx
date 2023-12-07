import styles from './Experience.module.css'
import ExperienceMap from './experienceMap/ExperienceMap'



const Experience = () => {
    return(
        <section className={styles.experience}>
            <div className="container">
                <div className={styles.experience__flex}>

                    <h2 className={styles.experience__h2}>Experience</h2>
        
                    <ExperienceMap/>
        
                    <p className={styles.experience__footer}>Places we worked at.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience