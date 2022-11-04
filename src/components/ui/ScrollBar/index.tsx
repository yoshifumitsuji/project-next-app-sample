import { useCallback, useEffect, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  color: string
  blur: number
  offsetX: number
  offsetY: number
  children: string
}

export const OutlinedText = (props: Props) => {
  const thumbRef = useRef<HTMLDivElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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
      console.log('max', max)

      let thumbY = event.pageY - scrollbarRect.top - thumbRect.height / 2
      // つまみの座標を稼動範囲に収める
      thumbY = Math.max(min, Math.min(max, thumbY))
      thumbRef.current.style.top = `${thumbY}px`

      // スクロールバーの値を反映
      const contentArea = contentRect.height - containerRect.height
      const rate = thumbY / max
      const targetY = contentArea * rate
      contentRef.current.style.top = `${-1 * targetY}px`
    },
    [thumbRef, scrollbarRef, contentRef, containerRef]
  )

  const mouseDownHandler = useCallback(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
  }, [mouseMoveHandler])

  const mouseUpHandler = useCallback(() => {
    console.log('tewst')

    document.removeEventListener('mousemove', mouseMoveHandler)
  }, [mouseMoveHandler])

  useEffect(() => {
    const thumb = thumbRef.current
    if (thumb) {
      thumb.addEventListener('mousedown', mouseDownHandler)
    }
    document.addEventListener('mouseup', mouseUpHandler)

    return () => {
      if (thumb) {
        thumb.removeEventListener('mousedown', mouseDownHandler)
      }
      document.removeEventListener('mousemove', mouseDownHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [thumbRef, mouseDownHandler, mouseUpHandler])

  // function mouseMoveHandler(event) {
  //   // スクロールバーの可動範囲
  //   var min = 0
  //   var max = $('#scroller').height() - $('#thumb').height()
  //   // つまみの座標
  //   var thumbY = event.pageY - $('#scroller').position().top - $('#thumb').height() / 2
  //   // つまみの座標を稼動範囲に収める
  //   thumbY = Math.max(min, Math.min(max, thumbY))
  //   $('#thumb').css('top', thumbY) // 適用

  //   // スクロールバーの値を反映
  //   var contentArea = $('#content').height() - $('#container').height()
  //   var rate = thumbY / max
  //   var targetY = contentArea * rate
  //   $('#content').css('top', -1 * targetY) // 適用
  // }

  // function mouseUpHandler(event) {
  //   $(document).unbind('mousemove', mouseMoveHandler)
  //   $(document).unbind('mouseup', mouseUpHandler)
  // }

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content} ref={contentRef}>
        <img src='/img/thumbnails.jpg' alt='thumbnails' />
      </div>
      <div className={styles.scroller} ref={scrollbarRef}>
        <div className={styles.thumb} ref={thumbRef}></div>
      </div>
    </div>
  )
}
