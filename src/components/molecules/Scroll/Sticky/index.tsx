import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  target: React.LegacyRef<HTMLDivElement>
}

export const Sticky = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const st = ScrollTrigger.create({
      trigger: ref.current,
      pin: true,
      markers: true,
      start: 'top top',
      end: 'bottom top',
    })

    return () => {
      st.kill()
    }
  }, [ref])

  return (
    <>
      <div className={`${styles.block} ${styles.relative}`}>
        <h2>1</h2>
      </div>
      <div className={`${styles.block} ${styles.sticky}`} ref={ref}>
        <h2>2</h2>
      </div>
      <div className={`${styles.block} ${styles.relative}`}>
        <h2>3</h2>
      </div>
    </>
  )
}
