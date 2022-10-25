import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SAMPLE_IMG_PORTRAIT_01, SAMPLE_IMG_PORTRAIT_02, SAMPLE_IMG_PORTRAIT_03 } from 'src/config'

import { List01 } from './index'

const IMAGES = [
  {
    src: SAMPLE_IMG_PORTRAIT_01,
    alt: 'forest',
    width: 4000,
    height: 6000,
  },
  {
    src: SAMPLE_IMG_PORTRAIT_02,
    alt: 'beach',
    width: 4672,
    height: 6864,
  },
  {
    src: SAMPLE_IMG_PORTRAIT_03,
    alt: 'desert',
    width: 3640,
    height: 5464,
  },
]

const images = new Array(10).fill(null).reduce((pre, _) => pre.concat(IMAGES), [])
export default {
  component: List01,
  args: {
    images,
  },
} as ComponentMeta<typeof List01>

export const Default: ComponentStoryObj<typeof List01> = {}
