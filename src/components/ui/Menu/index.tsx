import React, { forwardRef } from 'react'

import styles from './index.module.scss'

export type Props = {
  open: boolean
  items: string[]
  onClose: () => void
}

export const Menu = forwardRef<HTMLDivElement, Props>(function Modal(props, ref) {
  return (
    <div className={`${styles.menu} ${props.open && styles.active}`}>
      <div className={`${styles.content} ${props.open && styles.active}`} ref={ref}>
        <ul>
          {props.items.map((item) => (
            <li key={`menu-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
})
