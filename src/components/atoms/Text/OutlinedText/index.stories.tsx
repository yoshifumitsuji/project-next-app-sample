import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { OutlinedText } from './index'

export default {
  component: OutlinedText,
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', background: 'linear-gradient(blue, pink)' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    color: 'rgba(247, 246, 237, 0.6)',
    blur: 1,
    offsetX: 1,
    offsetY: 1,
    children: 'Sample',
  },
} as ComponentMeta<typeof OutlinedText>

export const Default: ComponentStoryObj<typeof OutlinedText> = {}
