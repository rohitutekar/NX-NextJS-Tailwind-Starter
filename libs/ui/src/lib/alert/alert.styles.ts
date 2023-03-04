import { cva } from 'class-variance-authority';

export default cva('border-l-4 p-4', {
  variants: {
    variant: {
      brand: 'bg-brand-light border-brand',
      primary: 'bg-primary-light border-primary text-white',
      secondary: 'bg-secondary-light border-secondary text-white',
      success: 'bg-success-light border-success text-white',
      danger: 'bg-danger-light border-danger text-white',
      warning: 'bg-warning-light border-warning text-white',
    },
  },
  defaultVariants: {
    variant: 'brand',
  },
});
