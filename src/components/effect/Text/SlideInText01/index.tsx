import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  color?: string
  backgroundColor?: string
  slideInDuration?: number
  slideInEase?: string
  slideInDelay?: number
  slideOutDuration?: number
  slideOutEase?: string
  slideOutDelay?: number
  scrollTrigger?: any
  children: string
}

export const SlideInText01 = ({
  color = '#fff',
  backgroundColor = '#000',
  slideInDuration = 0.3,
  slideInEase = 'power1.inOut',
  slideInDelay = 0,
  slideOutDuration = 0.3,
  slideOutEase = 'power1.inOut',
  slideOutDelay = 0,
  scrollTrigger = null,
  ...props
}: Props) => {
  const word = useRef<HTMLDivElement>(null)
  const rect = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap
      .timeline({ scrollTrigger })
      .to(rect.current, {
        duration: slideInDuration,
        ease: slideInEase,
        delay: slideInDelay,
        x: 0,
        y: 0,
        z: 0,
      })
      .set(word.current, {
        opacity: 1,
      })
      .to(rect.current, {
        duration: slideOutDuration,
        ease: slideOutEase,
        delay: slideOutDelay,
        x: '-101%',
        y: 0,
        z: 0,
      })
  }, [
    word,
    rect,
    slideInDuration,
    slideInEase,
    slideInDelay,
    slideOutDuration,
    slideOutEase,
    slideOutDelay,
    scrollTrigger,
  ])

  return (
    <span className={styles.wrap}>
      <span className={styles.word} style={{ backgroundColor, color }} ref={word}>
        {props.children}
      </span>
      <span className={styles.rect} style={{ backgroundColor, color }} ref={rect} />
    </span>
  )
}
