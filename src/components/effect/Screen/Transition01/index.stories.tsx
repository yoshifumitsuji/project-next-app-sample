import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Transition01 } from '.'

export default {
  component: Transition01,
  render: () => (
    <>
      <Transition01 />
      <div style={{ width: '100%', height: '100vh' }}>Inner Content</div>
    </>
  ),
} as ComponentMeta<typeof Transition01>

export const Default: ComponentStoryObj<typeof Transition01> = {}
