import { useCallback, useEffect } from 'react'

export const useScrollLock = (active: boolean) => {
  const disableScroll = useCallback((event: Event) => {
    event.preventDefault()
  }, [])

  const handleKeyDown = useCallback((e: any) => {
    switch (e.keyCode) {
      case 0x25:
      case 0x26:
      case 0x27:
      case 0x28:
        e.preventDefault()
        break
    }
  }, [])

  useEffect(() => {
    if (!active) {
      return
    }

    window.addEventListener('touchmove', disableScroll, { passive: false })
    window.addEventListener('mousewheel', disableScroll, { passive: false })
    document.addEventListener('keydown', handleKeyDown, { passive: false })
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('touchmove', disableScroll)
      window.removeEventListener('mousewheel', disableScroll)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'visible'
    }
  }, [active, disableScroll, handleKeyDown])
}
