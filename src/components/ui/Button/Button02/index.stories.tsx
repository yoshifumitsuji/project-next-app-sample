import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useFloatingContent } from 'src/hooks/useFloatingContent'

import { Button02 } from '.'

export default {
  component: Button02,
} as ComponentMeta<typeof Button02>

export const Default: ComponentStory<typeof Button02> = () => {
  const { open, handleOpen } = useFloatingContent()
  return <Button02 active={open} onClick={handleOpen} />
}
