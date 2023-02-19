import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import {data} from './shared/data'

export function PopularDestination() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Popular destinations</div>

      <div className={styles['subtitle']}>Tourist visa only</div>

      <div className={styles['cards-container']}>
        <div className={styles['arrow']}><img src="/arrow2.png" alt="arrow left" /></div>
        <div className={styles['cards']}>
          {data.map(item => {
            return (
              <Cards key={item.id}
                img={item.img}
                title={item.title}
                textButtom={item.textButtom} />
            )
          })}
        </div>
        <div className={styles['arrow']}><img src="/arrow1.png" alt="arrow left" /></div>
      </div>

    </div>
  )
}