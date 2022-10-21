import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import * as SlideInStories from '../../Slide/SlideIn01/index.stories'

import { SlideInText01 } from './index'

export default {
  component: SlideInText01,
  argTypes: SlideInStories.default.argTypes,
  args: SlideInStories.default.args,
} as ComponentMeta<typeof SlideInText01>

export const Default: ComponentStoryObj<typeof SlideInText01> = {}
