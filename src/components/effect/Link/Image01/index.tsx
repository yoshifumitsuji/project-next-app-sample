import { Image } from 'src/components/ui/Image'

import { Link } from '../../../ui/Link'
import styles from './index.module.scss'

type Props = {
  href: string
  src: string
  alt?: string
  width: number
  height: number
}

export const ImageLink = (props: Props) => {
  return (
    <span className={styles.wrap}>
      <Link href={props.href}>
        <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
      </Link>
    </span>
  )
}
