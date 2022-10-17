import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ParallaxList } from './index'
const IMG1 =
  'https://images.unsplash.com/photo-1665873183648-649ad63e4df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
const IMG2 =
  'https://images.unsplash.com/photo-1665925246028-1175f2e51757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
const IMG3 =
  'https://images.unsplash.com/photo-1665909235925-4ecc57b25249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80'

const IMAGES = [
  {
    src: IMG1,
    alt: 'forest',
    width: 4000,
    height: 6000,
  },
  {
    src: IMG2,
    alt: 'beach',
    width: 4672,
    height: 6864,
  },
  {
    src: IMG3,
    alt: 'desert',
    width: 3640,
    height: 5464,
  },
]

const images = new Array(10).fill(null).reduce((pre, _) => pre.concat(IMAGES), [])
export default {
  component: ParallaxList,
  args: {
    images,
  },
} as ComponentMeta<typeof ParallaxList>

export const Default: ComponentStoryObj<typeof ParallaxList> = {}
