import styles from './index.module.css';

export function WelcomeMessage({ header, subHeader }){
    return(
        <div className={styles['welcome-message']}>
            <div className={styles['header']}>{header}</div>
            <div className={styles['sub']}>{subHeader}</div>
        </div>
    )
}