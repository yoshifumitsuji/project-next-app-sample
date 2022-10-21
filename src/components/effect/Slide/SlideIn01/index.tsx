import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import styles from './index.module.scss'

export type SlideInProps = {
  color?: string
  itemBackgroundColor?: string
  rectBackgroundColor?: string
  slideInDuration?: number
  slideInEase?: string
  slideInDelay?: number
  slideOutDuration?: number
  slideOutEase?: string
  slideOutDelay?: number
  scrollTrigger?: any
  children: React.ReactNode
}

export const SlideIn = ({
  color = '#fff',
  itemBackgroundColor = '#000',
  rectBackgroundColor = '#000',
  slideInDuration = 0.3,
  slideInEase = 'power1.inOut',
  slideInDelay = 0,
  slideOutDuration = 0.3,
  slideOutEase = 'power1.inOut',
  slideOutDelay = 0,
  scrollTrigger = null,
  ...props
}: SlideInProps) => {
  const item = useRef<HTMLDivElement>(null)
  const rect = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap
      .timeline({ scrollTrigger })
      .set(rect.current, {
        x: '-101%',
        y: 0,
        z: 0,
      })
      .set(item.current, {
        opacity: 0,
      })
      .to(rect.current, {
        duration: slideInDuration,
        ease: slideInEase,
        delay: slideInDelay,
        x: 0,
        y: 0,
        z: 0,
      })
      .set(item.current, {
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
    item,
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
    <div className={styles.wrap}>
      <div className={styles.item} style={{ backgroundColor: itemBackgroundColor, color }} ref={item}>
        {props.children}
      </div>
      <div className={styles.rect} style={{ backgroundColor: rectBackgroundColor, color }} ref={rect} />
    </div>
  )
}
