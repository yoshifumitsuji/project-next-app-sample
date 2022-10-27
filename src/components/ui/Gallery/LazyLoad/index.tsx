import { useRef, createRef } from 'react'

import { Image } from '../../Image'
import styles from './index.module.scss'

type Props = {
  images: string[]
}

export const List01 = ({ images, ...props }: Props) => {
  const itemRefs = useRef(images.map(() => createRef<HTMLLIElement>()))

  return (
    <ul className={styles.list}>
      {images.map((src, index) => (
        <li key={index} className={`${styles.item}`} ref={itemRefs.current[index]}>
          <Image src={src} width={500} height={420} alt='' loading='lazy' />
        </li>
      ))}
    </ul>
  )
}
