import gsap from 'gsap'
import { useRef, createRef, useEffect, useCallback } from 'react'

import { Image } from '../../Image'
import styles from './index.module.scss'

type Props = {
  images: string[]
}

export const List01 = ({ images, ...props }: Props) => {
  const itemRefs = useRef(images.map(() => createRef<HTMLLIElement>()))

  const callback = useCallback((i: number) => {
    gsap.to(itemRefs.current[i].current, {
      opacity: 1,
    })
  }, [])

  useEffect(() => {
    itemRefs.current.forEach((el) => {
      gsap.set(el.current, { opacity: 0 })
    })
  }, [])

  return (
    <ul className={styles.list}>
      {images.map((src, index) => (
        <li key={index} className={`${styles.item}`} ref={itemRefs.current[index]}>
          <Image src={src} width={500} height={420} alt='' onLoaded={() => callback(index)} loading='lazy' />
        </li>
      ))}
    </ul>
  )
}
