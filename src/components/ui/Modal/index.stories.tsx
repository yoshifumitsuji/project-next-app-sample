import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useFloatingContent } from 'src/hooks/useFloatingContent'

import { ModalButton } from '../Button/ModalButton'

import { Modal } from '.'

export default {
  component: Modal,
  subcomponents: { ModalButton },
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', background: 'linear-gradient(blue, pink)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Modal>

export const Default: ComponentStory<typeof Modal> = () => {
  const { open, ref, handleOpen, handleClose } = useFloatingContent()

  return (
    <>
      <div style={{ position: 'fixed', top: '0', right: '0' }}>
        <ModalButton onClick={handleOpen} />
      </div>
      <Modal ref={ref} open={open} onClose={handleClose} />
    </>
  )
}
