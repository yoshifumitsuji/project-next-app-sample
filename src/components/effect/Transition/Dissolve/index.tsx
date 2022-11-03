import { SAMPLE_IMG_PORTRAIT_01, SAMPLE_IMG_PORTRAIT_02 } from 'src/config'

import styles from './index.module.scss'

type Props = {}

export const Dissolve = (props: Props) => {
  return (
    <div className={styles.dissolve}>
      <div className={styles.slide01}>
        <img src={SAMPLE_IMG_PORTRAIT_01} alt='Sample' />
      </div>
      <div className={styles.slide02}>
        <img src={SAMPLE_IMG_PORTRAIT_02} alt='Sample' />
      </div>
    </div>
  )
}
