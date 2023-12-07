import ServicesButton from "./servicesButton/ServicesButton"
import styles from './ServicesPage.module.css'
import ynanchImg from './ServicesPagesImages/ynanchHyzmat.svg'
import ynanchImgBlack from './ServicesPagesImages/ynanchHyzmat_black.svg'


const ServicesPage = (props) => {

    return(
        
        <section className={props.servicesType === 'dynamic' 
                                ? styles.dynamic                               
                                : props.servicesType === 'pipeline'
                                ? styles.pipeline
                                : props.servicesType === 'environment'
                                ? styles.environment
                                : props.servicesType === 'civil'
                                ? styles.civil
                                : props.servicesType === 'oilfield'
                                ? styles.oilfield
                                : ''}>                         
            <div className="container">
                <div className={styles.servicesPage__flex}>
                    <p className={props.servicesType === 'civil' ? styles.servicesPageCivil__header : styles.servicesPage__header}>
                    <span className={styles.servicesHeader__span}>Featuring: </span>
                        {props.servicesType === 'dynamic' 
                        ? 'Electrical, Control Systems, Spare parts and etc.'
                        : props.servicesType === 'pipeline'
                        ? 'Pigging, In-Line Inspection, Hot Tapping.'
                        : props.servicesType === 'environment'
                        ? 'IWI-500 Machine.'
                        : props.servicesType === 'civil'
                        ? 'Range of services we provide.'
                        : props.servicesType === 'oilfield'
                        ? 'Completions, Packers.'
                        : ''}
                    </p>

                    <div className={styles.servicesPage__main}>
                        <div className={styles.servicesPage__mainLeft}>
                        <img src={props.servicesType === 'civil' ? ynanchImgBlack : ynanchImg}/>
                           {/*  <div className={props.servicesType === 'civil' ? styles.civilMainLeft__img : styles.mainLeft__img}/> */}
                            <h2 className={props.servicesType === 'dynamic' 
                                ? styles.dynamicLeftH2                               
                                : props.servicesType === 'pipeline'
                                ? styles.pipelineLeftH2
                                : props.servicesType === 'environment'
                                ? styles.environmentLeftH2
                                : props.servicesType === 'civil'
                                ? styles.civilLeftH2
                                : props.servicesType === 'oilfield'
                                ? styles.oilfieldLeftH2
                                : ''}>
                                {props.servicesType === 'dynamic' 
                                ? 'Dynamic-Static Equipment & System Maintenance'                               
                                : props.servicesType === 'pipeline'
                                ? 'Pipeline Services'
                                : props.servicesType === 'environment'
                                ? 'Environment Protection'
                                : props.servicesType === 'civil'
                                ? 'Civil Construction'
                                : props.servicesType === 'oilfield'
                                ? 'Oilfield Services'
                                : ''}
                            </h2>
                        </div>
                        <div className={props.servicesType === 'dynamic' 
                                ? styles.dynamicImg                               
                                : props.servicesType === 'pipeline'
                                ? styles.pipelineImg
                                : props.servicesType === 'environment'
                                ? styles.environmentImg
                                : props.servicesType === 'civil'
                                ? styles.civilImg
                                : props.servicesType === 'oilfield'
                                ? styles.oilfieldImg
                                : ''}/>
                    </div>

                    <div className={styles.servicesPage__footer}>
                        <div className={props.servicesType === 'civil' ? styles.civilFooter__left : styles.footer__left}>
                            <p>{props.servicesType === 'dynamic' 
                                ? '1/5' 
                                : props.servicesType === 'pipeline'
                                ? '2/5' 
                                : props.servicesType === 'environment'
                                ? '3/5'
                                : props.servicesType === 'civil'
                                ? '4/5'
                                : props.servicesType === 'oilfield'
                                ? '5/5'
                                : ''}
                                </p>
                        </div>
                        <ServicesButton buttonType={props.servicesType}/>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default ServicesPage