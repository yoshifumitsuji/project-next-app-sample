import React, { useState } from 'react'

import { useResizeObserver } from 'src/hooks/useResizeObserver'

import styles from './index.module.scss'

type ReactResizeProps = {}

export const ReactResize = (props: ReactResizeProps) => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const { ref: block } = useResizeObserver<HTMLDivElement>((entries: any) => {
    const { width, height } = entries[0].contentRect
    setSize({ width, height })
  })
  return <div ref={block} className={styles.block}>{`width: ${size.width} / height: ${size.height}`}</div>
}
