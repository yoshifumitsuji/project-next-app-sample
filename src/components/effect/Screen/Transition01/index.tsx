import { SlideInProps, SlideIn } from '../../Slide/SlideIn01'
import styles from './index.module.scss'

type Props = {
  children: string
} & SlideInProps

export const SlideInText01 = ({ children, ...props }: Props) => {
  return (
    <SlideIn {...props}>
      <div className={styles.content}>INNER CONTENT</div>
    </SlideIn>
  )
}
