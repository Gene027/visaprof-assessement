import { Button } from '@/components/shared/Button'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './index.module.css'

export function Nav() {
  const [signupDropdown, setSignupDropdown] = useState(false)
  const { push } = useRouter()

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
        <Button solid={false} onClick={() => push('/auth/login')}>Sign In</Button>
        <Button onClick={() => setSignupDropdown(s => !s)}>Sign Up</Button>

        {
          signupDropdown &&
          <div className={styles['signup-dropdown']}>
              <div onClick={() => push('/auth/signup')}>Sign up as myself</div>
              <hr/>
              <div onClick={() => push('/auth/signup')}>Sign up as an agent</div>
          </div>
        }
      </div>

    </div>
  )
}