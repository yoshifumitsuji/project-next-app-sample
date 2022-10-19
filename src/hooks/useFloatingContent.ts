import { useCallback, useRef, useState } from 'react'

import { useClickAwayListener } from './useClickAwayListener'
import { useScrollLock } from './useScrollLock'

export const useFloatingContent = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])

  useScrollLock(open)
  useClickAwayListener<HTMLDivElement>(ref, open, handleClose)

  return {
    ref,
    open,
    handleOpen,
    handleClose,
  }
}
