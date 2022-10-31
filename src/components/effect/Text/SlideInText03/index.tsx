import { useRef } from 'react'

import { useIntersectionObserver } from 'src/hooks/IntersectionObserver'

import styles from './index.module.scss'

type Props = {
  children: string
}

export const SlideIn = (props: Props) => {
  const ref = useRef<HTMLSpanElement>(null)
  const { active } = useIntersectionObserver<HTMLSpanElement>({ ref })
  return (
    <span className={`${styles.wrap} ${active && styles.active}`}>
      <span className={`${styles.slide} ${active && styles.active}`} ref={ref}>
        <span>{props.children}</span>
      </span>
    </span>
  )
}
