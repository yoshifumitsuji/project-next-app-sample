import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Loading } from 'src/components/atoms/Loading'

export default {
  component: Loading,
} as ComponentMeta<typeof Loading>

export const Default: ComponentStoryObj<typeof Loading> = { args: { show: true } }
