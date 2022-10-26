import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SAMPLE_IMG_PORTRAIT_01 } from 'src/config'

import { Image } from '.'

export default {
  component: Image,
  args: {
    src: SAMPLE_IMG_PORTRAIT_01,
    alt: '',
  },
} as ComponentMeta<typeof Image>

export const Default: ComponentStoryObj<typeof Image> = {}
