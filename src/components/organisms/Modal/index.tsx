import React from 'react'

import { useModal } from 'src/hooks/useModal'

import styles from './index.module.scss'

type MoviePlayerProps = {
  id: string
}

export const MoviePlayer = React.forwardRef<HTMLIFrameElement, MoviePlayerProps>(function MoviePlayer(props, ref) {
  return (
    <iframe
      ref={ref}
      className={styles.modal__movie}
      src={`https://www.youtube-nocookie.com/embed/${props.id}?autoplay=1&mute=1&playsinline=1`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )
})

export type ModalProps = {
  open: boolean
  onClose: () => void
}

export const Modal = (props: ModalProps) => {
  const { open, ref, handleClose } = useModal('common')

  return (
    <div className={`${styles.modal} ${open ? styles.active : ''}`}>
      <div className={styles.content} ref={ref}>
        <button className={styles.close} onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  )
}
