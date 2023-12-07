import styles from './AboutUs.module.css'



function AboutUsCard(props) {
    return(
        <div className={styles.card__flex}>
            <div className={props.cardType === 'est' ? styles.estImg : props.cardType === 'check' ? styles.checkImg : props.cardType === 'people' ? styles.peopleImg : props.cardType === 'hands' ? styles.handsImg : null}/>
            <p className={styles.card__p1}>
                {props.cardType === 'est' ? '2016' : props.cardType === 'check' ? '152' : props.cardType === 'people' ? '90+' : props.cardType === 'hands' ? '300+' : null}
            </p>
            <p className={styles.card__p2}>
                {props.cardType === 'est' ? 'Year of Establishment' : props.cardType === 'check' ? 'Projects Completed' : props.cardType === 'people' ? 'Professional Employees' : props.cardType === 'hands' ? 'Business Partners' : null}
                
            </p>
        </div>
    )
}

export default AboutUsCard