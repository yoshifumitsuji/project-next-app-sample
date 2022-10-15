import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  scrollTrigger: any
  children: React.ReactNode
}

export const SlideInText02 = (props: Props) => {
  const wrap = useRef<HTMLDivElement>(null)
  const word = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.timeline().to(wrap.current, {
      duration: 0.8,
      ease: 'none',
      width: '100%',
      delay: 0.2,
    })
  }, [wrap])

  return (
    <div className={styles.slide} ref={wrap}>
      <div className={styles.word} ref={word}>
        {props.children}
      </div>
    </div>
  )
}
