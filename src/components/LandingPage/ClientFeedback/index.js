import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import data from './shared/data'

export function ClientFeedback() {
  return (
    <div className={styles['container']}>
      <div>What <span>our clients</span> have to say?</div>
      <div>
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