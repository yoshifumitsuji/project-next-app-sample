import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState, useCallback } from 'react'

import { Toggle } from '.'

export default {
  component: Toggle,
  args: {
    onChange: action('change'),
  },
} as ComponentMeta<typeof Toggle>

export const Default: ComponentStory<typeof Toggle> = (args) => {
  const [active, setActive] = useState(false)
  const handleClick = useCallback(() => {
    setActive(!active)
    args.onChange()
  }, [args, active])

  return <Toggle active={active} onChange={handleClick} />
}
