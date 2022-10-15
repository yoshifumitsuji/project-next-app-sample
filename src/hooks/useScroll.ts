import { useState, useEffect, useRef, useCallback } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState('')
  const offset = useRef({ x: 0, y: 0 })

  const handleScroll = useCallback(() => {
    const diffY = scrollY - offset.current.y
    if (diffY > 0) setDirection('down')
    if (diffY < 0) setDirection('up')
    setScrollY(window.scrollY)
    offset.current.y = scrollY
  }, [scrollY, offset])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { scrollY, direction }
}
