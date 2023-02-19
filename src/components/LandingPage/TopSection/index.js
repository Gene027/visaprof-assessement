import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import {data} from './shared/data'
export function TopSection() {
  return (
    <div className={styles['container']}>

      <div className={styles['text-header']}>
        prompt and easy steps for visa processing
      </div>

      <div className={styles['destinations']}>
        <div className={styles['cards-container']}>
          {data.map(item => {
            return (
              <Cards key={item.id}
                top={item.top}
                middle={item.middle}
                buttom={item.buttom} />
            )
          })}
        </div>
        <div className={styles['swap-icon']}> <img src="/swap-button.png" alt="swap button" /></div>
        <div className={styles['next-button']}> <img src="/next-button.png" alt="next button" /></div>
      </div>
    </div>
  )
}