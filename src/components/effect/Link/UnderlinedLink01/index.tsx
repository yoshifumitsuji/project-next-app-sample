import { Link } from '../../../ui/Link'
import styles from './index.module.scss'

type Props = {
  children: string
}

export const UnderlinedLink01 = (props: Props) => {
  return (
    <span className={styles.link}>
      <Link href='#'>{props.children}</Link>
    </span>
  )
}
