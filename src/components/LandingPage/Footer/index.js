import React from 'react'
import styles from './index.module.css'

export function Footer() {
  return (
    <div className={styles['container']}>
      <div className={styles['footer-top']}>
        <div className={styles['social-handle']}>
          <a href="http://"><img src="/Linkedin_perspective_matte.png" alt="linkedIn" /></a>
          <a href="http://"><img src="/WhatsappOctDenoiserBeauty_001 copy.png" alt="whatsapp" /></a>
          <a href="http://"><img src="/Twitter_perspective_matte.png" alt="twitter" /></a>
          <a href="http://"><img src="/Facebook_perspective_matte.png" alt="facebook" /></a>
          <a href="http://"><img src="/Instagram_perspective_matte.png" alt="instagram" /></a>
        </div>

        <div className={styles['footer-main-section']}>
          <div className={styles['top']}>Company</div>
          <a href="http://" className={styles['middle']}>Home</a>
          <a href="http://" className={styles['middle']}>About Us</a>
        </div>

        <div className={styles['footer-main-section']}>
          <div className={styles['top']}>Legal</div>
          <a href="http://" className={styles['middle']}>Terms of service</a>
          <a href="http://" className={styles['middle']}>Privacy policy</a>
        </div>

        <div className={styles['footer-main-section']}>
          <div className={styles['top']}>Community</div>
          <a href="http://" className={styles['middle']}>Blog</a>
          <a href="http://" className={styles['middle']}>FAQs</a>
        </div>

        <div className={styles['footer-main-section']}>
          <div className={styles['top']}>Contact</div>
          <a href="http://info@visaprof.com" className={styles['middle']}>info@visaprof.com</a>
          <a href="http://" className={styles['middle']}>07017401336</a>
        </div>
      </div>

      <div className={styles['footer-buttom']}>
        <div className={styles['footer-buttom-content']}><span>&copy</span> 2022 VISAPROF Visa processing firm. All rights reserved</div>
      </div>
    </div>
  )
}