import styles from './index.module.scss'

type Props = {
  sepia?: boolean
  invert?: boolean
}

export const Film = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${props.sepia && styles.sepia}  ${props.invert && styles.invert}`}>
        <div className={styles.film}>
          <div className={styles.effect}>
            <div className={styles.grain}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
