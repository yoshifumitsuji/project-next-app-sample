import styles from './index.module.scss'

type Props = {
  active: boolean
  onClick: () => void
}

export const Drawer01 = (props: Props) => {
  return (
    <button className={`${styles.button} ${props.active && styles.active}`} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
