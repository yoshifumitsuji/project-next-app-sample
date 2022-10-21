import { useRef, useEffect } from 'react'

import styles from './index.module.scss'

type Props = {
  children?: React.ReactNode
}

export const Transition01 = (props: Props) => {
  const initialized = useRef(false)

  useEffect(() => {
    initialized.current = true
  }, [])

  return <div className={styles.transition}>{props.children}</div>
}
