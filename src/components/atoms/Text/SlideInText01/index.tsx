import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  scrollTrigger: any
  children: React.ReactNode
}

export const SlideInText01 = (props: Props) => {
  const word = useRef<HTMLDivElement>(null)
  const rect = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(rect.current, {
        duration: 0.3,
        ease: 'power1.inOut',
        x: 0,
        y: 0,
        z: 0,
      })
      .set(word.current, {
        opacity: 1,
      })
      .to(rect.current, {
        duration: 0.3,
        ease: 'power1.inOut',
        x: '-101%',
        y: 0,
        z: 0,
      })
  }, [word, rect])

  return (
    <div className={styles.wrap}>
      <div className={styles.word} ref={word}>
        {props.children}
      </div>
      <div className={styles.rect} ref={rect} />
    </div>
  )
}
