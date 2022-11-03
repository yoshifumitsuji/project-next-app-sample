import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import * as SlideInStories from '../../Slide/SlideIn01/index.stories'

import { Slide } from './'

export default {
  component: Slide,
  argTypes: SlideInStories.default.argTypes,
  args: SlideInStories.default.args,
} as ComponentMeta<typeof Slide>

export const Default: ComponentStoryObj<typeof Slide> = {}
