import React from 'react'
import styles from './index.module.css'

export function FrequentlyAsked() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Frequently asked <span>questions</span></div>
      <div className={styles['list-items']}>
          <div className={styles['question']}>
            <div>What are the requirements to get a visa?</div>
            <div className={styles['trigger']}><img src="/Ellipse 243.png" alt="close" /></div>
          </div>
          <div>
            <div className={styles['answer']}>The requirement depends on the country you’re applying to. Log in to see different countries and their requirements.</div>
          </div>

          <div className={styles['question']}>
            <div>How long does the visa processing take?</div>
            <div className={styles['trigger']}><img src="/Ellipse 243 (1).png" alt="open" /></div>
          </div>
          <div className={styles['answer']}></div>

          <div className={styles['question']}>
            <div >Can I still be approved if I have no travel history?</div>
            <div className={styles['trigger']}><img src="/Ellipse 243 (1).png" alt="open" /></div>
          </div>
          <div className={styles['answer']}></div>

          <div className={styles['question']}>
            <div >How does VISAPROF obtain a visa for me?</div>
            <div className={styles['trigger']}><img src="/Ellipse 243 (1).png" alt="open" /></div>
          </div>
          <div className={styles['answer']}></div>

          <div className={styles['question']}>
            <div >Do I need my passport at early stages of application?</div>
            <div className={styles['trigger']}><img src="/Ellipse 243 (1).png" alt="open" /></div>
          </div>
          <div className={styles['answer']}></div>

          <div className={styles['question']}>
            <div>Must I be vaccinated to travel abroad?</div>
            <div className={styles['trigger']}><img src="/Ellipse 243 (1).png" alt="open" /></div>
          </div>
          <div className={styles['answer']}></div>
      </div>
    </div>
  )
}