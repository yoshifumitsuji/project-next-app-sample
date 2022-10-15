import React from 'react'

import { useIntersectionObserver } from 'src/hooks/IntersectionObserver'

import styles from './index.module.scss'

type ReactIntersect = {}

export const ReactIntersect = (props: ReactIntersect) => {
  const { ref, active } = useIntersectionObserver<HTMLDivElement>()
  return <div ref={ref} className={`${styles.box} ${active ? styles.active : ''}`}></div>
}
