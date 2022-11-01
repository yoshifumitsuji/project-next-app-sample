import { useEffect, useState } from 'react'

import { SAMPLE_IMG_PORTRAIT_01 } from 'src/config'

import styles from './index.module.scss'

type Props = {}

export const Glitch = (props: Props) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(!active)
    }, 2000)
  }, [active])

  return (
    <div
      className={`${styles.glitch} ${active && styles.active}`}
      style={{ backgroundImage: `url(${SAMPLE_IMG_PORTRAIT_01})` }}
    >
      <div className={`${styles.channel} ${styles.r}`}></div>
      <div className={`${styles.channel} ${styles.g}`}></div>
      <div className={`${styles.channel} ${styles.b}`}></div>
    </div>
  )
}
