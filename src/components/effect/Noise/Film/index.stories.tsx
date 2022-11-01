import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Film } from '.'

export default {
  component: Film,
  args: {
    sepia: false,
    invert: false,
  },
} as ComponentMeta<typeof Film>

export const Default: ComponentStoryObj<typeof Film> = {}
