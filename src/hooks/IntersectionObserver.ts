import { RefObject, useCallback, useEffect, useState } from 'react'

type Args<T extends HTMLElement> = {
  ref: RefObject<T>
  option?: any
  callback?: () => void
}
export const useIntersectionObserver = <T extends HTMLElement>({ ref, option, callback }: Args<T>) => {
  const [active, setActive] = useState(false)

  const onEnter = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return
      setActive(entry.isIntersecting)
      callback?.()
    },
    [callback]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => onEnter(entry), option)

    const element = ref.current
    observer.observe(element!)

    return () => observer.unobserve(element!)
  }, [ref, option, onEnter])

  return { ref, active }
}
