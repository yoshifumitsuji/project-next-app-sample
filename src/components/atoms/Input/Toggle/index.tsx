import { forwardRef } from 'react'

import styles from './index.module.scss'

type Props = {
  active: boolean
  onChange: () => void
}

export const Toggle = forwardRef<HTMLDivElement, Props>(function Toggle(props, ref) {
  return (
    <div className={styles.toggle} onClick={props.onChange} ref={ref}>
      <div className={styles.line}>
        <div className={`${styles.indicator} ${props.active && styles.active}`} />
      </div>
      <div className={`${styles.knob} ${props.active && styles.active}`} />
    </div>
  )
})
