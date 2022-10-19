import React, { forwardRef } from 'react'

import styles from './index.module.scss'

export type Props = {
  open: boolean
  onClose: () => void
}

export const Modal = forwardRef<HTMLDivElement, Props>(function Modal(props, ref) {
  return (
    <div className={`${styles.modal} ${props.open ? styles.active : ''}`}>
      <div className={styles.content} ref={ref}>
        <button className={styles.close} onClick={props.onClose}>
          ×
        </button>
      </div>
    </div>
  )
})
