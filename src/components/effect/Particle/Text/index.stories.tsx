import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Text } from '.'

export default {
  component: Text,
  args: {
    width: window.innerWidth,
    height: 500,
    colors: ['#468966', '#FFF0A5', '#FFB03B', '#B64926', '#8E2800'],
    text: 'Hello World !!',
  },
} as ComponentMeta<typeof Text>

export const Default: ComponentStoryObj<typeof Text> = {}
