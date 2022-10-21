import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { GSAP_EASING } from 'src/config'

import { SlideInText02 } from './index'

export default {
  component: SlideInText02,
  argTypes: {
    duration: {
      control: {
        type: 'range',
        step: 0.01,
        default: 1,
        max: 10,
      },
    },
    ease: {
      control: 'select',
      options: GSAP_EASING,
    },
    delay: {
      control: {
        type: 'range',
        step: 0.01,
        default: 0,
        max: 10,
      },
    },
  },
  args: {
    duration: 0.3,
    ease: 'power1.inOut',
    delay: 0,
    children: 'Sample',
  },
} as ComponentMeta<typeof SlideInText02>

export const Default: ComponentStoryObj<typeof SlideInText02> = {}
