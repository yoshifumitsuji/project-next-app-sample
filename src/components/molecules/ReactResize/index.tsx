import React from 'react'

import { useResizeObserver } from 'src/hooks/useResizeObserver'

import styles from './index.module.scss'

type ReactResizeProps = {}

export const ReactResize = (props: ReactResizeProps) => {
  const { ref } = useResizeObserver<HTMLDivElement>(() => console.log('resize!'))
  return <div ref={ref} className={styles.box}></div>
}
