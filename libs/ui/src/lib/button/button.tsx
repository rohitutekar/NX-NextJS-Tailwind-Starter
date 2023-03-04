import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import buttonStyles from './button.styles';

export interface Props
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonStyles> {}

export const Button = ({ intent, fullWidth, outline, ...props }: Props) => {
  return (
    <button
      className={buttonStyles({ intent, fullWidth, outline })}
      {...props}
    />
  );
};
