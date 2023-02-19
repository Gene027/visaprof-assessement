import React from 'react'
import styles from './index.module.css'

export function FrequentlyAsked() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Frequently asked <span>questions</span></div>
      <div className={styles['list-items']}>
        <ul>
          <li>
            <div className={styles['question']}>What are the requirements to get a visa?</div>
            <div className={styles['trigger']}>trigger</div>
            <div className={styles['answer']}>The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.</div>
          </li>

          <li>
            <div className={styles['question']}>How long does the visa processing take?</div>
            <div className={styles['trigger']}>trigger</div>
            <div className={styles['answer']}></div>
          </li>

          <li>
            <div className={styles['question']}>Can I still be approved if I have no travel history?</div>
            <div className={styles['trigger']}>trigger</div>
            <div className={styles['answer']}></div>
          </li>

          <li>
            <div className={styles['question']}>How does VISAPROF obtain a visa for me?</div>
            <div className={styles['trigger']}>trigger</div>
            <div className={styles['answer']}></div>
          </li>

          <li>
            <div className={styles['question']}>Do I need my passport at early stages of application?</div>
            <div className={styles['trigger']}>trigger</div>
            <div className={styles['answer']}></div>
          </li>

          <li>
            <div className={styles['question']}>Must I be vaccinated to travel abroad?</div>
            <div className={styles['trigger']}>trigger</div>
            <div className={styles['answer']}></div>
          </li>

        </ul>
      </div>
    </div>
  )
}