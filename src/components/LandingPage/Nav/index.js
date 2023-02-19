import { Button } from '@/components/shared/Button'
import React from 'react'
import styles from './index.module.css'

export function Nav() {
  return (
    <div className={styles['container']}>
      <img src='/logo.png' alt="Visaprof logo" />

      <div className={styles['navlinks']}>
        <div className={styles['navlink']}> Agent information</div>
        <div className={styles['navlink']}> Country requirements</div>
        <div className={styles['navlink']}> About Us</div>
        <div className={styles['navlink']}> Contact Us</div>
      </div>

      <div className={styles['button-group']}>
        <Button solid={false} >Sign In</Button>
        <Button>Sign Up</Button>
      </div>

    </div>
  )
}