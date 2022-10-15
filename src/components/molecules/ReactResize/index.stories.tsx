import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ReactResize } from 'src/components/molecules/ReactResize'

export default {
  component: ReactResize,
} as ComponentMeta<typeof ReactResize>

export const Default: ComponentStoryObj<typeof ReactResize> = {}
