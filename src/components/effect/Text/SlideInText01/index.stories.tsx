import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { GSAP_EASING } from 'src/config'

import { SlideInText01 } from './index'

export default {
  component: SlideInText01,
  argTypes: {
    slideInDuration: {
      control: {
        type: 'range',
        step: 0.01,
        default: 1,
        max: 10,
      },
    },
    slideInEase: {
      control: 'select',
      options: GSAP_EASING,
    },
    slideInDelay: {
      control: {
        type: 'range',
        step: 0.01,
        default: 0,
        max: 10,
      },
    },
    slideOutDuration: {
      control: {
        type: 'range',
        step: 0.01,
        default: 1,
        max: 10,
      },
    },
    slideOutEase: {
      control: 'select',
      options: GSAP_EASING,
    },
    slideOutDelay: {
      control: {
        type: 'range',
        step: 0.01,
        default: 0,
        max: 10,
      },
    },
  },
  args: {
    color: '#fff',
    backgroundColor: '#000',
    slideInDuration: 0.3,
    slideInEase: 'power1.inOut',
    slideInDelay: 0,
    slideOutDuration: 0.3,
    slideOutEase: 'power1.inOut',
    slideOutDelay: 0,
    children: 'Sample',
  },
} as ComponentMeta<typeof SlideInText01>

export const Default: ComponentStoryObj<typeof SlideInText01> = {}
