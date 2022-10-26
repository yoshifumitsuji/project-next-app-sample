import { useEffect, useState } from 'react'

export const useIntersectionObserver = <T extends HTMLElement>(ref: any, option?: any) => {
  // const ref = useRef<T>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting)
    }, option)

    const element = ref.current
    observer.observe(element!)

    return () => observer.unobserve(element!)
  }, [ref, option])

  return { ref, active }
}
