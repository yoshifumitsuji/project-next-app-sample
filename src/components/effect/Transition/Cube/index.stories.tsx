import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Cube } from '.'

export default {
  component: Cube,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Cube>

export const Default: ComponentStoryObj<typeof Cube> = {}
