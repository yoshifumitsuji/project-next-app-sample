import { useState, useEffect, useCallback } from 'react'

type Size = {
  width: number
  height: number
}

export const useWindowSize = () => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 })

  const init = useCallback(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  const resize = useCallback(() => {
    init()
  }, [init])

  useEffect(() => {
    init()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [init, resize])

  return { ...size }
}
