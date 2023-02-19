/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './index.module.css'

export function Cards({ img, name, story }) {
    return (
        <div className={styles['container']}>
            <img src={img} alt="client image" />

            <div className={styles['stats']}>
                <div className={styles['client-name']}>{name}</div>
                <div className={styles['client-story']}> <span>"</span>{story} <span>"</span></div>
                <div className={styles['stars-icon']}>react-star-icon</div>
            </div>
        </div>
    )
}