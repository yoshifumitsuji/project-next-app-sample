import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { YoutubePlayer } from '.'

export default {
  component: YoutubePlayer,
  args: {
    id: 'axZIjv9BRwQ',
    title: 'ASIAN KUNG-FU GENERATION 『出町柳パラレルユニバース』Music Video',
  },
} as ComponentMeta<typeof YoutubePlayer>

export const Default: ComponentStoryObj<typeof YoutubePlayer> = {}

export const AutoPlay: ComponentStoryObj<typeof YoutubePlayer> = {
  args: {
    autoplay: 1,
    mute: 1,
    playsinline: 1,
  },
}
