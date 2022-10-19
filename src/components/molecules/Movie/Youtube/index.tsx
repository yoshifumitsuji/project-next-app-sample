import React from 'react'

import styles from './index.module.scss'

type Props = {
  id: string
  title: string
  autoplay?: 0 | 1
  mute?: 0 | 1
  playsinline?: 0 | 1
}

export const YoutubePlayer = React.forwardRef<HTMLIFrameElement, Props>(function MoviePlayer(
  { id, title, autoplay = 0, mute = 0, playsinline = 0 },
  ref
) {
  return (
    <iframe
      ref={ref}
      className={styles.player}
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay}&mute=${mute}&playsinline=${playsinline}`}
      title={title}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )
})
