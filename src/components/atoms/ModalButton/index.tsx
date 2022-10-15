import { useModal } from 'src/hooks/useModal'

import styles from './index.module.scss'

export const ModalButton = () => {
  const { handleOpen } = useModal('common')
  return (
    <button className={styles.button} onClick={handleOpen}>
      OPEN
    </button>
  )
}
