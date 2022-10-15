import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SlideInText02 } from './index'

export default {
  component: SlideInText02,
  args: {
    children: 'Sample',
  },
} as ComponentMeta<typeof SlideInText02>

export const Default: ComponentStoryObj<typeof SlideInText02> = {}
