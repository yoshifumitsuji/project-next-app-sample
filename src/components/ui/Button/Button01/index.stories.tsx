import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useFloatingContent } from 'src/hooks/useFloatingContent'

import { Button01 } from '.'

export default {
  component: Button01,
} as ComponentMeta<typeof Button01>

export const Default: ComponentStory<typeof Button01> = () => {
  const { open, handleOpen } = useFloatingContent()
  return <Button01 active={open} onClick={handleOpen} />
}
