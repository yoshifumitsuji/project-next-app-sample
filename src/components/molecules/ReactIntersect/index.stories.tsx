import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ReactIntersect } from 'src/components/molecules/ReactIntersect'

export default {
  component: ReactIntersect,
} as ComponentMeta<typeof ReactIntersect>

export const Default: ComponentStoryObj<typeof ReactIntersect> = {
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', background: 'linear-gradient(blue, pink)' }}>
        <p>Please scroll</p>
        <div style={{ position: 'absolute', top: '150%' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}
