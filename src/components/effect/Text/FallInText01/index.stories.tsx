import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { FallInText } from './'

export default {
  component: FallInText,
  args: {
    in: false,
    duration: 1000,
    children: 'Hello World',
  },
} as ComponentMeta<typeof FallInText>

export const Default: ComponentStoryObj<typeof FallInText> = {}
