import React, { useEffect, useRef, useState } from 'react';
import useOutsideClickHandler from './useOutsideClickHandler';
import styles from './Modal.module.scss';
import { ICONS } from '../../icons';

/**
 * This component is used to make a Modal.
 *
 * @component
 * @example
 * const [modal, setModal] = useState(false)
 *
 * const closeModal = () => {
 * 	setModal(false);
 * 	//some other stuff
 * }
 *
 * return(
 * 	<Modal isModal={modal} onClose={closeModal}>
 * 		content
 * 	</Modal>
 * )
 */

const Modal = ({
  children,
  onClose,
  isModal,
  setIsModal,
  className,
  showCloseButton = false,
  disableOutsideClick,
  leftCloseIcon = false,
  disableCloseHover,
  closeColor
}) => {
  // for closing on outside click
  const modalRef = useRef(null);
  const closeRef = useRef();
  useOutsideClickHandler(modalRef, onClose, disableOutsideClick);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isModal) setShowModal(true);
  }, [isModal]);

  useEffect(() => {
    if (closeRef && showModal) closeRef.current.focus();
  }, [closeRef, showModal]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };
  const onAnimationEnd = () => {
    if (!isModal) setShowModal(false);
  };

  return (
    isModal && (
      <div
        className={`${styles.modalOverlay} ${isModal && styles.open}`}
        ref={closeRef}
        onKeyDown={handleKeyDown}
        tabIndex={-1}>
        <div
          className={`${styles.modalBox} ${isModal ? styles.open : styles.close} ${className}`}
          onAnimationEnd={onAnimationEnd}
          ref={modalRef}>
          {showCloseButton &&
            (closeColor == 'white' ? (
              <button
                className={`${styles.closeIcon} ${leftCloseIcon ? styles.leftClose : ''} ${
                  disableCloseHover ? styles.closeHoverless : ''
                } ${styles.closecolorbtn}`}
                onClick={onClose}>
                {ICONS.crosswhite}
              </button>
            ) : (
              <button
                className={`${styles.closeIcon} ${leftCloseIcon ? styles.leftClose : ''} ${
                  disableCloseHover ? styles.closeHoverless : ''
                }`}
                onClick={onClose}>
                {ICONS.close}
              </button>
            ))}
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
