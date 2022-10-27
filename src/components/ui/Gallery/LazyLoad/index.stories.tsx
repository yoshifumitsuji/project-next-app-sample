import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { List01 } from './index'

const images = new Array(50).fill(null).map((_, index) => `https://picsum.photos/500/420?random=${index}`, [])

export default {
  component: List01,
  args: {
    images,
  },
} as ComponentMeta<typeof List01>

export const Default: ComponentStoryObj<typeof List01> = {}
