/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './index.module.css'

export function SecondSection() {
  return (
    <div className={styles['container']}>
      <div className={styles['ratings']}>
        <div className={styles['ratings-number']}>
          <div className={styles['ratings-top']}>200</div>
          <div className={styles['ratings-buttom']}>clients who have trusted us</div>
        </div>

        <div className={styles['ratings-percent']}>
          <div className={styles['ratings-top']}>98%</div>
          <div className={styles['ratings-buttom']}>Successful visa process rate</div>
        </div>

        <div className={styles['ratings-time']}>
          <div className={styles['ratings-top']}>60 hrs</div>
          <div className={styles['ratings-buttom']}>Application approval time</div>
        </div>
      </div>

      <div className={styles['text-section']}>
        <div className={styles['text-title']}>
          Africa's <span>leading</span> visa consultants
        </div>
        <div className={styles['text-body']}>
          VISAPROF is a pioneer in Nigeria's online travel industry. The organization started in 2020 on the basis of an idea conceived by its promoters. VISAPROF is trusted by over 200 clients. We assist applicants in navigating the visa process to any country in which they choose to stay or visit.
        </div>
      </div>

      <img src="" alt="man on headphones" />
    </div>
  )
}