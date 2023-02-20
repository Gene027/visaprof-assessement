import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import {data} from './shared/data'

export function ClientFeedback() {
  return (
    <div className={styles['container']}>
      <img className={styles['circle-vector-right']} src='/circle-vector-right.png' alt=''/>
      <img className={styles['circle-vector-left']} src='/circle-vector-left.png' alt=''/>
      <div className={styles['title']}>What <span>our clients</span> have to say?</div>
      <div className={styles['cards']}>
        {data.map(item => {
          return (
            <Cards key={item.id}
              img={item.img}
              name={item.name}
              story={item.story} />
          )
        })}
      </div>
    </div>
  )
}