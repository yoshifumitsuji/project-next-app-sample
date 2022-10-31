import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SlideIn } from './index'

export default {
  component: SlideIn,
  args: {
    children: 'Hello World',
  },
} as ComponentMeta<typeof SlideIn>

export const Default: ComponentStoryObj<typeof SlideIn> = {}
