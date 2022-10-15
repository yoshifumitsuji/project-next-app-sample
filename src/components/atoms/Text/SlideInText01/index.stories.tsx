import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SlideInText01 } from './index'

export default {
  component: SlideInText01,
  args: {
    children: 'Sample',
  },
} as ComponentMeta<typeof SlideInText01>

export const Default: ComponentStoryObj<typeof SlideInText01> = {}
