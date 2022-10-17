import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { FadeIn } from './index'

export default {
  component: FadeIn,
} as ComponentMeta<typeof FadeIn>

export const Default: ComponentStoryObj<typeof FadeIn> = {
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', background: 'linear-gradient(blue, pink)' }}>
        <p>Please scroll</p>
        <div style={{ position: 'absolute', top: '150%', left: '50%', transform: 'translateX(-50%)' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}
