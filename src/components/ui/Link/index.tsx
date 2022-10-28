type Props = {
  href: string
  blank?: boolean
  children: React.ReactNode
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
