import { useCallback, useRef } from 'react'

import styles from './index.module.scss'

type Props = {
  active: boolean
  onClick: () => void
}

export const Button02 = (props: Props) => {
  const clickRef = useRef<HTMLAudioElement>(null)
  const overRef = useRef<HTMLAudioElement>(null)

  const handleMouseOver = useCallback(() => {
    const audioClick = clickRef.current
    if (audioClick) {
      audioClick.currentTime = 0
      audioClick.play()
    }
  }, [clickRef])

  const handleMouseUp = useCallback(() => {
    const audioClick = overRef.current
    if (audioClick) {
      audioClick.currentTime = 0
      audioClick.play()
    }
  }, [overRef])

  return (
    <>
      <a className={styles.button} onMouseOver={handleMouseOver} onMouseUp={handleMouseUp}>
        <span>My Button</span>
      </a>

      <audio id='click' ref={clickRef}>
        <source src='/sound/btn_click.mp3' />
        <source src='/sound/btn_click.ogg' />
      </audio>

      <audio id='over' ref={overRef}>
        <source src='/sound/btn_over.mp3' />
        <source src='/sound/btn_over.ogg' />
      </audio>
    </>
  )
}
