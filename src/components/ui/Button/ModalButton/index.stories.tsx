import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ModalButton } from 'src/components/ui/Button/ModalButton'

export default {
  component: ModalButton,
  args: {
    onClick: action('click'),
  },
} as ComponentMeta<typeof ModalButton>

export const Default: ComponentStoryObj<typeof ModalButton> = {}
