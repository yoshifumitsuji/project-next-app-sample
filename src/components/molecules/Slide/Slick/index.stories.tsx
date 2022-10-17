import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Slide } from './index'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    alt: 'forest',
    width: 6000,
    height: 4000,
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3273&q=80',
    alt: 'beach',
    width: 4621,
    height: 3072,
  },
  {
    src: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    alt: 'desert',
    width: 5835,
    height: 3890,
  },
]

export default {
  component: Slide,
  args: {
    images,
  },
} as ComponentMeta<typeof Slide>

export const Default: ComponentStoryObj<typeof Slide> = {}

export const CustomPaging: ComponentStoryObj<typeof Slide> = {
  args: {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={`${images[i].src}`} alt='' />
        </a>
      )
    },
  },
}
