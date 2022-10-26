import { useCallback, useLayoutEffect, useMemo, useRef } from 'react'

import { useIntersectionObserver } from 'src/hooks/IntersectionObserver'
import { loadImage } from 'src/libs/image'

type Props = {
  src: string
  alt?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  onLoaded?: () => void
}

export const Image = (props: Props) => {
  const alt = useMemo(() => props.alt || props.src?.split('/')?.pop() || 'No Image', [props])
  const ref = useRef(null)
  const { active } = useIntersectionObserver<HTMLImageElement>(ref, {
    rootMargin: '100px',
  })

  const setImgSize = useCallback(() => {
    loadImage(props.src).then((result: any) => {
      props?.onLoaded?.()
    })
  }, [props])

  useLayoutEffect(() => {
    if (!active || props.loading !== 'lazy') return
    setImgSize()
  }, [props, active, setImgSize])

  return <img src={props.src} alt={alt} width={props.width} height={props.height} loading={props.loading} ref={ref} />
}
