import styles from './index.module.css';

export function ErrorMessage({message}){
    return(
        <div className={styles['error-message']}>{message}</div>
    )
}