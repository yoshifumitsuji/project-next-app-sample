import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Geometry } from '.'

const CLICK_MODE = {
  attract: 'attract',
  bubble: 'bubble',
  push: 'push',
  remove: 'remove',
  repulse: 'repulse',
  pause: 'pause',
  trail: 'trail',
}

const HOVER_MODE = {
  attract: 'attract',
  bounce: 'bounce',
  bubble: 'bubble',
  connect: 'connect',
  grab: 'grab',
  light: 'light',
  repulse: 'repulse',
  slow: 'slow',
  trail: 'trail',
}

const DIV_MODE = {
  bounce: 'bounce',
  bubble: 'bubble',
  repulse: 'repulse',
}

export default {
  component: Geometry,
  argTypes: {
    onClickMode: {
      control: 'select',
      options: CLICK_MODE,
    },
    onHoverMode: {
      control: 'select',
      options: HOVER_MODE,
    },
    onDiveMode: {
      control: 'select',
      options: DIV_MODE,
    },
  },
  args: {
    id: 'particle',
    width: 1000,
    height: 200,
    autoPlay: true,
    color: '#333',
    fpsLimit: 120,
    onClickEnable: true,
    onClickMode: 'attract',
    onHoverEnable: true,
    onHoverMode: 'attract',
    onDivEnable: true,
    onDiveMode: 'bounce',
    onResizeEnable: false,
  },
} as ComponentMeta<typeof Geometry>

export const Default: ComponentStoryObj<typeof Geometry> = {}
