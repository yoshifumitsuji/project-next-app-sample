import { useState, useCallback, useEffect, RefObject } from 'react'

export const useClickAwayListener = <T extends HTMLElement>(
  ref: RefObject<T>,
  active: boolean,
  callback: () => void
) => {
  // TODO: I want to delete the event state ...
  const [event, setEvent] = useState(false)
  const [clickAway, setClickAway] = useState(false)

  const handleClickAway = useCallback(
    (event: any) => {
      if (!!ref.current?.contains(event.target)) return
      callback()
    },
    [ref, callback]
  )

  useEffect(() => {
    setEvent(active)
  }, [active])

  useEffect(() => {
    if (!event) return

    document.addEventListener('click', handleClickAway, { passive: false })
    document.addEventListener('touchstart', handleClickAway, { passive: false })

    return () => {
      document.removeEventListener('click', handleClickAway)
      document.removeEventListener('touchstart', handleClickAway)
    }
  }, [event, handleClickAway])

  return { clickAway }
}
