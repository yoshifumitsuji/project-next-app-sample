import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ScrollBar } from './index'

export default {
  component: ScrollBar,
  decorators: [
    (Story) => (
      <div style={{ fontSize: '4rem', background: 'linear-gradient(blue, pink)' }}>
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
} as ComponentMeta<typeof ScrollBar>

export const Default: ComponentStoryObj<typeof ScrollBar> = {}
