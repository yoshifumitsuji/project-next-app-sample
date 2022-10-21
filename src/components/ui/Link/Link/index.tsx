type Props = {
  href: string
  blank?: boolean
  children: string
}

export const Link = ({ blank = false, ...props }: Props) => {
  if (!blank) {
    return <a href={props.href}>{props.children}</a>
  }

  return (
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  )
}
