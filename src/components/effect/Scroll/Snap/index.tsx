import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'

import styles from './index.module.scss'

type Props = {
  items: string[]
}

export const Snap = (props: Props) => {
  const rootRef = useRef(null)
  const itemRefs = useRef(props.items.map(() => createRef<HTMLDivElement>()))
  const anchorRefs = useRef(props.items.map(() => createRef<HTMLAnchorElement>()))

  const clickPagination = useCallback((e: any) => {
    e.preventDefault()
    const targetId = e.currentTarget.hash
    const target = document.querySelector(targetId)
    target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        const intersected = entry.find((e) => e.isIntersecting)
        const index = +((intersected?.target as HTMLElement).dataset.index ?? 0)
        setActiveIndex(index)
      },
      { root: rootRef.current, rootMargin: '-50% 0px', threshold: 0 }
    )

    const observers = itemRefs.current.map((element) => {
      observer.observe(element.current!)
    })

    return () =>
      observers.forEach((element) => {
        observer.unobserve(element!)
      })
  }, [itemRefs])

  return (
    <>
      <div className={styles.container} ref={rootRef}>
        {props.items.map((it, index) => (
          <div
            id={`section-item-${index}`}
            key={`${it}-${index}`}
            className={`${styles.item} ${styles.block}`}
            data-index={index}
            ref={itemRefs.current[index]}
          >
            <h2>{index}</h2>
          </div>
        ))}
      </div>
      <nav className={styles.pagination}>
        {props.items.map((it, index) => (
          <a
            id={`anchor-item-${index}`}
            key={`key-${it}`}
            className={activeIndex === index ? styles.active : ''}
            ref={anchorRefs.current[index]}
            href={`#section-item-${index}`}
            data-index={index}
            onClick={clickPagination}
          ></a>
        ))}
      </nav>
    </>
  )
}
