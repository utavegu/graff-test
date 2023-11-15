import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';

type PropTypes = {
  variant: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isDisabled?: boolean;
};

const Button: FC<PropTypes> = ({
  variant,
  className,
  children,
  type = 'button',
  onClick,
  isDisabled = false,
}): JSX.Element => {
  const buttonClasses = classnames(className, styles.button, {
    [styles.buttonPrimary]: variant === 'primary',
    [styles.buttonSecondary]: variant === 'secondary',
    [styles.buttonTertiary]: variant === 'tertiary',
  });
  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
