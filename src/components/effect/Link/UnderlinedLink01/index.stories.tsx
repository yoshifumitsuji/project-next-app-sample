import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { UnderlinedLink01 } from '.'

export default {
  component: UnderlinedLink01,
  args: {
    color: 'rgba(247, 246, 237, 0.6)',
    blur: 1,
    offsetX: 1,
    offsetY: 1,
    children: 'Sample',
  },
} as ComponentMeta<typeof UnderlinedLink01>

export const Default: ComponentStoryObj<typeof UnderlinedLink01> = {}
