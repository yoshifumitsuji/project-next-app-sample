import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import * as SlideInStories from '../../Slide/SlideIn01/index.stories'

import { Dissolve } from './index'

export default {
  component: Dissolve,
  argTypes: SlideInStories.default.argTypes,
  args: SlideInStories.default.args,
} as ComponentMeta<typeof Dissolve>

export const Default: ComponentStoryObj<typeof Dissolve> = {}
