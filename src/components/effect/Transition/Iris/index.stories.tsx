import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Iris } from '.'

export default {
  component: Iris,
} as ComponentMeta<typeof Iris>

export const Default: ComponentStoryObj<typeof Iris> = {}
