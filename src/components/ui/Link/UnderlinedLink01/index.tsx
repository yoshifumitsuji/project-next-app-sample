import { Link } from '../Link'
import styles from './index.module.scss'

type Props = {
  color: string
  blur: number
  offsetX: number
  offsetY: number
  children: string
}

export const UnderlinedLink01 = (props: Props) => {
  return (
    <span className={styles.link}>
      <Link href=''>{props.children}</Link>
    </span>
  )
  // return <a className={styles.link}>{props.children}</a>
}
