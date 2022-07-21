import React, {FC} from "react";
import styles from './modal.module.scss'

interface IModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: FC<React.PropsWithChildren<IModalProps>> = ({show, onClose, children}) => {
  const onModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if ((e?.target as Element).className === styles.modal) onClose()
  }

  return (
    <div
      style={{display: show ? 'flex' : 'none'}}
      className={styles.modal}
      onClick={onModalClose}
    >
      <div className={styles.modalBody}>
        {children}
      </div>
    </div>
  )
}

export {Modal}