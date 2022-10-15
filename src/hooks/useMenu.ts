import { useState, useCallback, useRef, useEffect } from 'react'

import { useScroll } from './useScroll'

export const useMenu = () => {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [event, setEvent] = useState(false)

  const controlScroll = useCallback(() => {
    const ua = window.navigator.userAgent.toLowerCase()
    const isiOS =
      ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)

    if (isiOS) {
      document.body.style.position = open ? 'relative' : 'fixed'
      document.body.style.top = `-${scrollY}px`
    } else {
      document.body.style.overflow = open ? 'visible' : 'hidden'
    }
  }, [open, scrollY])

  const handleOpen = useCallback(() => {
    setOpen(true)
    controlScroll()
  }, [controlScroll])

  const handleClose = useCallback(() => {
    setOpen(false)
    controlScroll()
  }, [controlScroll])

  const handleClick = useCallback(
    (event: any) => {
      const element = ref.current
      if (!open || !!element?.contains(event.target)) return
      // handleClose()
    },
    [open]
  )

  useEffect(() => {
    setEvent(open)
  }, [open])

  useEffect(() => {
    if (!event) return
    window.addEventListener('click', handleClick, { passive: false })
    window.addEventListener('touchstart', handleClick, { passive: false })

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleClick)
    }
  }, [handleClick, event])

  return {
    open,
    ref,
    handleOpen,
    handleClose,
  }
}
