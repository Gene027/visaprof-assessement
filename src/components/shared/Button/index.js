import classNames from 'classnames'
import React from 'react'
import styles from './index.module.css'
import { FaSpinner } from 'react-icons/fa'

export function Button({ onClick, loading = false, solid = true, style, children, disabled }) {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={classNames(styles['button'], solid ? styles['solid'] : styles['outline'])}>
      {children}
      {
        loading && <FaSpinner />
      }
    </button>
  )
}
