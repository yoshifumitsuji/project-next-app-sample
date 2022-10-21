type Props = {
  color: string
  blur: number
  offsetX: number
  offsetY: number
  children: string
}

export const OutlinedText = (props: Props) => {
  const textShadow = `${props.offsetX}px ${props.offsetY}px ${props.blur}px ${props.color}, -${props.offsetX}px ${props.offsetY}px ${props.blur}px ${props.color},
  ${props.offsetX}px -${props.offsetY}px ${props.blur}px ${props.color}, -${props.offsetX}px -${props.offsetY}px ${props.blur}px ${props.color}, ${props.offsetX}px 0 ${props.blur}px ${props.color},
  0 ${props.offsetY}px ${props.blur}px ${props.color}, -${props.offsetX}px 0 ${props.blur}px ${props.color}, 0 -${props.offsetY}px ${props.blur}px ${props.color}`

  return <span style={{ textShadow: textShadow }}>{props.children}</span>
}
