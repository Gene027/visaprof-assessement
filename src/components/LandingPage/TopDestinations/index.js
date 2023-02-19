import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import data from './shared/data'

export function TopDestinations() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Top <span>Destinations</span></div>
      <div>
        {data.map(item => {
          return (
            <Cards key={item.id}
              img={item.img}
              text={item.text}
              bgColor={item.bgColor} />
          )
        })}
      </div>
    </div>
  )
}