import { VariantProps } from 'class-variance-authority';

import alertStyles from './alert.styles';

export type AlertProps = VariantProps<typeof alertStyles>;

export const Alert = ({ variant, ...props }: AlertProps) => {
  return (
    <div className={alertStyles({ variant })} role="alert" {...props}>
      <p className="font-bold">Be Warned</p>
      <p>Something not ideal might be happening.</p>
    </div>
  );
};

export default Alert;
