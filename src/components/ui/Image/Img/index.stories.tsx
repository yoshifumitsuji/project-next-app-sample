import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SAMPLE_IMG_PORTRAIT_01 } from 'src/config'

import { Img } from '.'

export default {
  component: Img,
  args: {
    src: SAMPLE_IMG_PORTRAIT_01,
    alt: '',
  },
} as ComponentMeta<typeof Img>

export const Default: ComponentStoryObj<typeof Img> = {}
