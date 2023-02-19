import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import data from './shared/data'

export function WhatWeOffer() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>What we offer our clients</div>
      <div>
        {data.map(item => {
          return (
            <Cards key={item.id}
              top={item.top}
              middle={item.middle}
              buttom={item.buttom} />
          )
        })}
      </div>
    </div>
  )
}