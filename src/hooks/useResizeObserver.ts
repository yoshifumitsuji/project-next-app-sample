import { useEffect, useRef } from 'react'

export const useResizeObserver = <T extends HTMLElement>(callback: any) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      callback(entries)
    })

    resizeObserver.observe(ref.current!)

    return () => resizeObserver.disconnect()
  }, [callback])

  return { ref }
}
