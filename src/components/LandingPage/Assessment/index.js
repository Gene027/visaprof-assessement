import React from 'react'
import styles from './index.module.css'
import { Button } from '@/components/shared/Button'

export function Assessment() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Get free assessment today</div>
      <div className={styles['sub-title']}>Feel free to enquire about any questions you have</div>
      <div>
        <form action="">
          <input type="text" name='fullName' value={form.fullName} placeholder='Full name' />
          <input type="email" name='email' value={form.email} placeholder='Email address' />
          <textarea name='textarea' value={form.textarea} placeholder='Type message here' />
          <Button>Send</Button>
        </form>
      </div>
    </div>
  )
}