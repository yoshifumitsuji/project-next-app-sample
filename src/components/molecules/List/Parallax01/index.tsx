import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { createRef, useEffect, useRef } from 'react'

import { Image } from '../../../../types/Image'
import styles from './index.module.scss'

type Props = {
  images: Image[]
}

export const ParallaxList = ({ images, ...props }: Props) => {
  const rectRefs = useRef(images.map(() => createRef<HTMLLIElement>()))
  const itemRefs = useRef(images.map(() => createRef<HTMLLIElement>()))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    rectRefs.current.forEach((el, index) => {
      gsap.to(el.current, {
        height: 0,
        duration: 0.3,
        scrollTrigger: {
          id: `rect-${index + 1}`,
          trigger: el.current,
          start: 'top 80%',
          end: 'bottom 20%',
          invalidateOnRefresh: true,
          markers: false,
        },
      })
    })

    itemRefs.current.forEach((el, index) => {
      let scrubSpeed = 0
      switch (el.current?.dataset.index) {
        case '0':
          scrubSpeed = 1.0
          break
        case '1':
          scrubSpeed = 1.8
          break
        case '2':
          scrubSpeed = 1.4
          break
      }

      gsap.set(el.current, {
        y: 100,
      })

      gsap.to(el.current, {
        y: 0,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          id: `item-${index + 1}`,
          trigger: el.current,
          start: 'top 80%',
          end: 'bottom 20%',
          invalidateOnRefresh: true,
          scrub: scrubSpeed,
          markers: false,
        },
      })
    })
  }, [])

  return (
    <ul className={styles.list}>
      {images.map(({ src, alt, width, height }, index) => (
        <li key={index} ref={itemRefs.current[index]} className={styles.item} data-index={index % 3}>
          <img src={src} alt={alt} width={width} height={height} />
          <span className={styles.rect} ref={rectRefs.current[index]} />
        </li>
      ))}
    </ul>
  )
}
