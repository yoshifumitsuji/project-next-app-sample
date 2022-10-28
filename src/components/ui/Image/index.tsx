import { useCallback, useMemo, useRef, useState } from 'react'

import { useIntersectionObserver } from 'src/hooks/IntersectionObserver'
import { loadImage } from 'src/libs/image'

import styles from './index.module.scss'

type Props = {
  src: string
  alt?: string
  width: number
  height: number
  loading?: 'lazy' | 'eager'
  onLoaded?: () => void
}

export const Image = (props: Props) => {
  const ref = useRef(null)

  const [src, setSrc] = useState('')
  const [enter, setEnter] = useState(false)

  const alt = useMemo(() => props.alt || props.src?.split('/')?.pop() || 'No Image', [props])

  const callback = useCallback(() => {
    loadImage(props.src).then(() => {
      setSrc(props.src)
      setEnter(true)
      props?.onLoaded?.()
    })
  }, [props])

  useIntersectionObserver({
    ref,
    option: { rootMargin: '100px' },
    callback,
  })

  return (
    <img
      className={`${styles.image} ${enter && styles.active}`}
      src={props.loading === 'lazy' ? src : props.src}
      alt={alt}
      width={props.width}
      height={props.height}
      ref={ref}
      loading={props.loading}
    />
  )
}
