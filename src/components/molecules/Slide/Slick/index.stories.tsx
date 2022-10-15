import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Slide } from './index'

export default {
  component: Slide,
  args: {
    children: 'Sample',
  },
} as ComponentMeta<typeof Slide>

export const Default: ComponentStoryObj<typeof Slide> = {}
