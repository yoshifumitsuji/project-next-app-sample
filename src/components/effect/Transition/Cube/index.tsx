import styles from './index.module.scss'

type Props = {}

export const Cube = (props: Props) => {
  return (
    <div className={styles.cube}>
      <div className={styles.effect}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
      </div>
    </div>
  )
}
