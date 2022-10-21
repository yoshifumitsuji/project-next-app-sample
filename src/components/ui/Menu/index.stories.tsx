import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useFloatingContent } from 'src/hooks/useFloatingContent'

import { Drawer01 } from '../Button/Drawer01'

import { Menu } from '.'

export default {
  component: Menu,
  decorators: [
    (Story) => (
      <div style={{ height: '300vh', background: 'linear-gradient(blue, pink)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Menu>

const items = new Array(3).fill(null).map((_, index) => `menu${index}`)

export const Default: ComponentStory<typeof Menu> = () => {
  const { open, ref, handleOpen, handleClose } = useFloatingContent()

  return (
    <>
      <div style={{ position: 'fixed', top: '0', right: '0', zIndex: 400 }}>
        <Drawer01 active={open} onClick={handleOpen} />
      </div>
      <Menu ref={ref} open={open} items={items} onClose={handleClose} />
    </>
  )
}
