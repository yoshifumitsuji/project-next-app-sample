import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  duration?: number
  ease?: string
  delay?: number
  scrollTrigger?: any
  children: string
}

export const SlideInText02 = ({ duration = 0.8, ease = 'none', delay = 0, scrollTrigger = null, ...props }: Props) => {
  const wrap = useRef<HTMLDivElement>(null)
  const word = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.timeline({ scrollTrigger }).to(wrap.current, {
      duration,
      ease,
      width: '100%',
      delay: 0.2,
    })
  }, [wrap, duration, ease, scrollTrigger])

  return (
    <div className={styles.slide} ref={wrap}>
      <div className={styles.word} ref={word}>
        {props.children}
      </div>
    </div>
  )
}
