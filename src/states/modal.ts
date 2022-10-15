import { atom } from 'recoil'

export type ModalType = 'common'

export const ModalVisibility = atom({
  key: 'ModalVisibility',
  default: false,
})
