import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'

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
  const [src, setSrc] = useState('')
  const [show, setShow] = useState(false)
  const alt = useMemo(() => props.alt || props.src?.split('/')?.pop() || 'No Image', [props])
  const ref = useRef(null)
  const { active } = useIntersectionObserver(ref, {
    rootMargin: '100px',
  })

  const load = useCallback(() => {
    loadImage(props.src).then(() => {
      setSrc(props.src)
      setShow(true)
      props?.onLoaded?.()
    })
  }, [props])

  useLayoutEffect(() => {
    if (!active || props.loading !== 'lazy') return
    load()
  }, [props, active, load])

  return (
    <img
      className={`${styles.image} ${show && styles.active}`}
      src={props.loading === 'lazy' ? src : props.src}
      alt={alt}
      width={props.width}
      height={props.height}
      ref={ref}
      loading={props.loading}
    />
  )
}
