import classNames from 'classnames'
import React from 'react'
import styles from './index.module.css'

export function Button({ onClick, loading = false, solid = true, style, children }) {

  return (
    <button
      onClick={onClick}
      style={style}
      className={classNames(styles['button'], solid ? styles['solid'] : styles['outline'])}>
      {children}
    </button>
  )
}
