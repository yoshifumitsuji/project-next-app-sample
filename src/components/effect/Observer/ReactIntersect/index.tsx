import React, { useRef } from 'react'

import { useIntersectionObserver } from 'src/hooks/IntersectionObserver'

import styles from './index.module.scss'

type ReactIntersect = {}

export const ReactIntersect = (props: ReactIntersect) => {
  const ref = useRef(null)
  const { active } = useIntersectionObserver<HTMLDivElement>({ ref })
  return <div ref={ref} className={`${styles.box} ${active && styles.active}`}></div>
}
