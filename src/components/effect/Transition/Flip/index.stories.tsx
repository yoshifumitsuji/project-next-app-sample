import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Slide } from '.'

export default {
  component: Slide,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Slide>

export const Default: ComponentStoryObj<typeof Slide> = {}
