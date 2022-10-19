import styles from './index.module.scss'

type Props = {
  onClick: () => void
}

export const ModalButton = (props: Props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      OPEN
    </button>
  )
}
