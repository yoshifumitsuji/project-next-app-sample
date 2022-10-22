import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Wave } from './index'

export default {
  component: Wave,
  args: {
    width: 1000,
    height: 200,
    color: '#333',
    speed: 35,
    amplitude: 100,
  },
} as ComponentMeta<typeof Wave>

export const Default: ComponentStoryObj<typeof Wave> = {}
