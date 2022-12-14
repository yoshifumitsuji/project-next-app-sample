import { useCallback, useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  color: string
  blur: number
  offsetX: number
  offsetY: number
  children: string
}

export const ScrollBar = (props: Props) => {
  const currentValue = useRef(0)
  const targetValue = useRef(0)
  const thumbTo = useRef(0)
  const thumbNow = useRef(0)
  const thumbRef = useRef<HTMLDivElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const tick = useCallback(() => {
    if (!thumbRef.current || !contentRef.current) {
      return
    }
    currentValue.current += (targetValue.current - currentValue.current) * 0.1
    contentRef.current.style.top = `${-1 * currentValue.current}px`
  }, [])

  const mouseMoveHandler = useCallback(
    (event: any) => {
      if (!thumbRef.current || !scrollbarRef.current || !contentRef.current || !containerRef.current) {
        return
      }

      const thumbRect = thumbRef.current.getBoundingClientRect()
      const scrollbarRect = scrollbarRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()

      const min = 0
      const max = scrollbarRect.height - thumbRect.height

      let thumbY = event.pageY - scrollbarRect.top - thumbRect.height / 2
      thumbY = Math.max(min, Math.min(max, thumbY))
      thumbTo.current = thumbY
      thumbRef.current.style.top = `${thumbY}px`

      const contentArea = contentRect.height - containerRect.height
      const rate = thumbY / max
      targetValue.current = contentArea * rate
    },
    [thumbRef, scrollbarRef, contentRef, containerRef]
  )

  const mouseDownHandler = useCallback(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
  }, [mouseMoveHandler])

  const mouseUpHandler = useCallback(() => {
    document.removeEventListener('mousemove', mouseMoveHandler)
  }, [mouseMoveHandler])

  const wheelHandler = useCallback(
    (event: any) => {
      if (!thumbRef.current || !scrollbarRef.current || !contentRef.current || !containerRef.current) {
        return
      }

      const thumbRect = thumbRef.current.getBoundingClientRect()
      const scrollbarRect = scrollbarRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()

      const min = 0
      const max = scrollbarRect.height - thumbRect.height

      let thumbY = thumbRect.top + event.deltaY
      thumbY = Math.max(min, Math.min(max, thumbY))
      thumbRef.current.style.top = `${thumbY}px`

      const contentArea = contentRect.height - containerRect.height
      const rate = thumbY / max
      targetValue.current = contentArea * rate
    },
    [thumbRef, scrollbarRef, contentRef, containerRef]
  )

  useEffect(() => {
    const scrollbar = scrollbarRef.current
    const container = containerRef.current

    container?.addEventListener('wheel', wheelHandler)
    scrollbar?.addEventListener('mousedown', mouseDownHandler)
    scrollbar?.addEventListener('mousedown', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)

    setInterval(tick, 1000 / 60)

    return () => {
      scrollbar?.removeEventListener('mousedown', mouseDownHandler)
      container?.addEventListener('wheel', wheelHandler)
      document.removeEventListener('mousemove', mouseDownHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [scrollbarRef, containerRef, mouseDownHandler, mouseUpHandler, mouseMoveHandler, wheelHandler, tick])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content} ref={contentRef}>
        <img src='/img/thumbnails.jpg' alt='thumbnails' />
      </div>
      <div className={styles.scrollbar} ref={scrollbarRef}>
        <div className={styles.thumb} ref={thumbRef}></div>
      </div>
    </div>
  )
}
