import React from 'react'
import styles from './index.module.css'
import { Button } from '@/components/shared/Button'

export function Assessment() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Get free assessment today</div>
      <div className={styles['sub-title']}>Feel free to enquire about any questions you have</div>
      <div>
        <form className={styles['form-container']} action="">
          <input type="text" name='fullName' placeholder='Full name' />
          <input type="email" name='email'  placeholder='Email address' />
          <textarea name='textarea' placeholder='Type message here' />
          <div><Button>Send</Button></div>
        </form>
      </div>
    </div>
  )
}