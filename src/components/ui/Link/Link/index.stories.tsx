import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Link } from '.'

export default {
  component: Link,
  args: {
    href: '',
    children: 'Sample',
  },
} as ComponentMeta<typeof Link>

export const Default: ComponentStoryObj<typeof Link> = {}
