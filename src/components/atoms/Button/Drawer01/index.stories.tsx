import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useFloatingContent } from 'src/hooks/useFloatingContent'

import { Drawer01 } from '.'

export default {
  component: Drawer01,
} as ComponentMeta<typeof Drawer01>

export const Default: ComponentStory<typeof Drawer01> = () => {
  const { open, handleOpen } = useFloatingContent()
  return <Drawer01 active={open} onClick={handleOpen} />
}
