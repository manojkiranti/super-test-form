import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  width?: 'inline' | 'full';
  onClick?: () => void;
  inProgress?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  width = 'inline',
  onClick,
  inProgress = false,
  children,
  ...rest
}: ButtonProps) => {
  const buttonClasses = {
    base: 'btn',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    small: 'btn-sm',
    medium: '',
    large: 'btn-lg',
    inline: '',
    full: 'btn-full',
    progress: 'progress',
  };

  const getButtonClasses = () => {
    const variantClass = buttonClasses[variant] || buttonClasses['primary'];
    const sizeClass = buttonClasses[size] || '';
    const widthClass = buttonClasses[width] || '';
    const progressClass = inProgress ? buttonClasses['progress'] : '';

    return `${buttonClasses.base} ${variantClass} ${sizeClass} ${widthClass} ${progressClass}`.trim();
  };

  return (
    <button className={getButtonClasses()} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
