import { ComponentProps } from 'react';

import { VariantProps } from 'class-variance-authority';

import buttonStyles from './button.styles';

export interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonStyles> {}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  rounded,
  fullWidth,
  outline,
  ...props
}) => {
  return (
    <button className={buttonStyles({ intent, size, rounded, fullWidth, outline })} {...props} />
  );
};
