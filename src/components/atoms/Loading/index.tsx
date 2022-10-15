import { useCallback, useEffect } from 'react'

import styles from './index.module.scss'

type Props = {
  show: boolean
}

export const Loading = (props: Props) => {
  const disableScroll = useCallback((event: Event) => {
    event.preventDefault()
  }, [])

  useEffect(() => {
    if (props.show) {
      window.addEventListener('touchmove', disableScroll, { passive: false })
      window.addEventListener('mousewheel', disableScroll, { passive: false })
    } else {
      window.removeEventListener('touchmove', disableScroll)
      window.removeEventListener('mousewheel', disableScroll)
    }
    return () => {
      window.removeEventListener('touchmove', disableScroll)
      window.removeEventListener('mousewheel', disableScroll)
    }
  }, [disableScroll, props.show])

  return (
    <div className={`${styles.full} ${props.show ? styles.show : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.loading}>
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.shadow} />
          <div className={styles.shadow} />
          <div className={styles.shadow} />
        </div>
      </div>
    </div>
  )
}
