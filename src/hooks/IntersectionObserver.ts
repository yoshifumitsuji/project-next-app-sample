import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting)
    })

    const element = ref.current
    observer.observe(element!)

    return () => observer.unobserve(element!)
  }, [ref])

  return { ref, active }
}
