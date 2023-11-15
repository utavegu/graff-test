import React, { useEffect } from 'react';
import styles from './Modal.module.css';

function Modal({
  isOpened,
  setIsOpened,
  children,
}: {
  isOpened: boolean;
  setIsOpened: (arg: boolean) => void;
  children: React.ReactNode;
}) {
  const closeModalButton = React.useRef<HTMLButtonElement>(null);

  const handleFocus = () => {
    closeModalButton?.current?.focus();
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const closeByButton = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeByButton, false);
    return () => {
      document.removeEventListener('keydown', closeByButton, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={isOpened ? `${styles.overlay} ${styles.active}` : `${styles.overlay}`}
      onClick={closeModal}
    >
      <div
        className={isOpened ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
        onClick={(evt) => evt.stopPropagation()}
      >
        <span
          onFocus={handleFocus}
          tabIndex={0}
          aria-hidden="true"
        ></span>
        <button
          className={styles.closeModalButton}
          onClick={closeModal}
          ref={closeModalButton}
        >
          <span className="visually-hidden">Закрыть модальное окно</span>
        </button>
        {children}
        <span
          onFocus={handleFocus}
          tabIndex={0}
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
}

export default Modal;
