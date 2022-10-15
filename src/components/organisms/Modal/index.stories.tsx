import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ModalButton } from 'src/components/atoms/ModalButton'
import { Modal } from 'src/components/organisms/Modal'

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
  render: (args) => (
    <>
      <div style={{ position: 'fixed', top: '0', right: '0' }}>
        <ModalButton />
      </div>
      <Modal {...args} />
    </>
  ),
} as ComponentMeta<typeof Modal>

export const Close: ComponentStoryObj<typeof Modal> = {
  args: {
    open: false,
    onClose: action('onClose'),
  },
}

export const Open: ComponentStoryObj<typeof Modal> = {
  args: {
    ...Close.args,
    open: true,
  },
}
