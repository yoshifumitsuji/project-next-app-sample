import { SAMPLE_IMG_PORTRAIT_01, SAMPLE_IMG_PORTRAIT_02 } from 'src/config'

import styles from './index.module.scss'

type Props = {}

export const Iris = (props: Props) => {
  return (
    <div className={styles.iris}>
      <div className={styles.effect}>
        <div className={styles.item01}>
          <img src={SAMPLE_IMG_PORTRAIT_01} alt='Sample' />
        </div>
        <div className={styles.item02}>
          <img src={SAMPLE_IMG_PORTRAIT_02} alt='Sample' />
        </div>
      </div>
    </div>
  )
}
