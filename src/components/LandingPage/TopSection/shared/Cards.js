import React from 'react'
import styles from './index.module.css'

export function Cards ({top, buttom, middle}) {
    return (
        <div className={styles['container']}>
            <div className={styles['top']}>{top}</div>
            <div className={styles['middle']}>{middle} <span>^</span></div>
            <div className={styles['buttom']}>{buttom}</div>
        </div>
    )
}