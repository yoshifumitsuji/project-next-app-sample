import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Snap } from '.'

export default {
  component: Snap,
  args: {
    items: ['item1', 'item2', 'item3'],
  },
} as ComponentMeta<typeof Snap>

export const Default: ComponentStoryObj<typeof Snap> = {}
