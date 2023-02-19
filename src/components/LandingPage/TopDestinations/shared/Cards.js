import React from 'react'
import styles from './index.module.css'

export function Cards({ img, text, bgColor }) {
    return (
        <div className={styles['container']}>
            <img src={img} alt="card image" />

            <div className={styles['text-section']} style={{ backgroundColor: bgColor }}>{text}</div>
        </div>
    )
}