import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Form } from '.'

export default {
  component: Form,
  args: {
    onSubmit: action('submit'),
    onError: action('onError'),
  },
} as ComponentMeta<typeof Form>

export const Default: ComponentStoryObj<typeof Form> = {}
