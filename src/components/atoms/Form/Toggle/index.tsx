import styles from './index.module.scss'

type Props = {
  active: boolean
  onChange: () => void
}

export const Toggle = (props: Props) => {
  return (
    <div className={styles.toggle} onClick={props.onChange}>
      <div className={styles.line}>
        <div className={`${styles.indicator} ${props.active && styles.active}`} />
      </div>
      <button className={`${styles.knob} ${props.active && styles.active}`} />
    </div>
  )
}
