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
    <div className={styles.shine}>
      <Link href={props.href}>
        <span className={styles.mask}>
          <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
        </span>
      </Link>
    </div>
  )
}
