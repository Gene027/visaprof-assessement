import React from 'react'
import styles from './index.module.css'
import { GoChevronDown } from 'react-icons/go'

export function Cards ({top, bottom, middle}) {
    return (
        <div className={styles['container']}>
            <div className={styles['top']}>{top}</div>
            <div className={styles['lower']}>
                <div className={styles['middle']}>{middle} <GoChevronDown /></div>
                <div className={styles['bottom']}>{bottom}</div>
            </div>
        </div>
    )
}