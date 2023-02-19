import React from 'react'
import styles from './index.module.css'

export function Cards({ img, title, textButtom }) {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>{title}</div>

            <img src={img} alt="card image" />

            <div className={styles['stats']}>
                <div className={styles['textTop']}>Processing time:</div>
                <div className={styles['textMiddle']}>2-3 working days</div>
                <div className={styles['textButtom']}>{textButtom}</div>
            </div>
        </div>
    )
}