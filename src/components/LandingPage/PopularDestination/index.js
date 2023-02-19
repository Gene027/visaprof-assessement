import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import {data} from './shared/data'

export function PopularDestination() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Popular destinations</div>

      <div className={styles['subtitle']}>Tourist visa only</div>

      <div>
        <div className={styles['arrow']}>Arrow-left</div>
        <div>
          {data.map(item => {
            return (
              <Cards key={item.id}
                img={item.img}
                title={item.title}
                textButtom={item.textButtom} />
            )
          })}
        </div>
        <div className={styles['arrow']}>Arrow-right</div>
      </div>

    </div>
  )
}