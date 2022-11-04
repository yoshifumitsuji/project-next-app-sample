import styles from './index.module.scss'

type Props = {
  active: boolean
  onClick: () => void
}

export const Button01 = (props: Props) => {
  return (
    <a className={`${styles.button} ${props.active && styles.active}`}>
      <span>My Button</span>
    </a>
  )
}
