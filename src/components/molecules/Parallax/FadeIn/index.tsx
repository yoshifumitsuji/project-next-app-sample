import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {}

export const FadeIn = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(ref.current, {
      opacity: 1,
      duration: 0.6,
      delay: 0.5,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        invalidateOnRefresh: true,
        markers: false,
      },
    })
  }, [ref])

  return <div ref={ref} className={styles.box}></div>
}
