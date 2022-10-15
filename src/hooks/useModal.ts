import { useCallback, useRef } from 'react'
import { useRecoilState } from 'recoil'

import { ModalType, ModalVisibility } from 'src/states/modal'

import { useClickAwayListener } from './useClickAwayListener'
import { useScrollLock } from './useScrollLock'

export const useModal = (modalType: ModalType) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useRecoilState(ModalVisibility)

  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const { clickAway } = useClickAwayListener<HTMLDivElement>(ref, open, handleClose)

  useScrollLock(open)

  return {
    open,
    ref,
    handleOpen,
    handleClose,
  }
}
