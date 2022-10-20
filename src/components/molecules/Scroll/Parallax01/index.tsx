import React from 'react'

import styles from './index.module.scss'

type Props = {
  target: React.LegacyRef<HTMLDivElement>
}

export const Parallax01 = (props: Props) => {
  return (
    <div>
      <div className={`${styles.item} ${styles.block}`}>
        <h2>1</h2>
      </div>
      <div className={`${styles.item} ${styles.fixed}`}>
        <h2>2</h2>
      </div>
      <div className={`${styles.item} ${styles.block}`}>
        <h2>3</h2>
      </div>
    </div>
  )
}
