import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Glitch } from '.'

export default {
  component: Glitch,
  decorators: [
    (Story) => (
      <div style={{ width: '50%', height: '100vh', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {},
} as ComponentMeta<typeof Glitch>

export const Default: ComponentStoryObj<typeof Glitch> = {}
