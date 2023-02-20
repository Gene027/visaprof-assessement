import React from 'react'
import styles from './index.module.css'

export function Cards({ img, title, textbottom }) {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>{title}</div>

            <img src={img} alt="card image" />

            <div className={styles['stats']}>
                <div className={styles['text-top']}>Processing time:</div>
                <div className={styles['text-middle']}>2-3 working days</div>
                <div className={styles['text-bottom']}><span>&#8358;</span>{textbottom}</div>
            </div>
        </div>
    )
}