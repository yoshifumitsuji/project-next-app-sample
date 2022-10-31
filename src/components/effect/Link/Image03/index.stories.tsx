import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SAMPLE_IMG_PORTRAIT_01 } from 'src/config'

import { ImageLink } from '.'

export default {
  component: ImageLink,
  decorators: [
    (Story) => (
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    href: '#',
    src: SAMPLE_IMG_PORTRAIT_01,
    alt: '',
  },
} as ComponentMeta<typeof ImageLink>

export const Default: ComponentStoryObj<typeof ImageLink> = {}
