import { Link } from 'react-router-dom'
import styles from './ServicesButton.module.css'

const ServicesButton = (props) => {
    return(
        <Link to={props.buttonType === 'dynamic' ? '/dynamic' 
        : props.buttonType === 'pipeline' ? '/pipeline' 
        : props.buttonType === 'environment' ? '/environment' 
        : props.buttonType === 'civil' ? '/civil' 
        : props.buttonType === 'oilfield' ? '/oilfield' : null} className={props.buttonType === 'dynamic' 
        ? styles.dynamicButton 
        : props.buttonType === 'pipeline'
        ? styles.pipelineButton
        : props.buttonType === 'environment'
        ? styles.environmentButton
        : props.buttonType === 'civil'
        ? styles.civilButton
        : props.buttonType === 'oilfield'
        ? styles.oilfieldButton
        : ''}>
            Learn More
        </Link>
    )
}

export default ServicesButton