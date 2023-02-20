import React from 'react'
import styles from './index.module.css'
import { Cards } from './shared/Cards'
import {data} from './shared/data'
import { MdOutlineSwapHoriz } from 'react-icons/md'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export function TopSection() {
  return (
    <div className={styles['container']}>
      <div className={styles['overlay']}></div>

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
                bottom={item.bottom} />
            )
          })}
        </div>
        <div className={styles['swap-icon']}> <MdOutlineSwapHoriz /></div>
        <div className={styles['next-button']}> <HiOutlineArrowNarrowRight /></div>
      </div>
    </div>
  )
}