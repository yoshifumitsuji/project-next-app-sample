import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import * as SlideInStories from '../../Slide/SlideIn02/index.stories'

import { SlideInText02 } from './index'

export default {
  component: SlideInText02,
  argTypes: SlideInStories.default.argTypes,
  args: SlideInStories.default.args,
} as ComponentMeta<typeof SlideInText02>

export const Default: ComponentStoryObj<typeof SlideInText02> = {}
