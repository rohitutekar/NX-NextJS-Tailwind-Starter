import { cva } from 'class-variance-authority';

export default cva(
  'flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-4 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      intent: {
        brand: 'bg-brand',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        danger: 'bg-danger',
        warning: 'bg-warning',
      },
      size: {
        sm: 'px-4 py-1',
        md: 'px-6 py-2',
        lg: 'px-10 py-5',
      },
      fullWidth: {
        true: 'w-full',
      },
      outline: {
        true: 'bg-transparent outline',
      },
      rounded: {
        true: 'rounded',
      },
    },
    compoundVariants: [
      {
        intent: ['brand', 'primary', 'secondary', 'success', 'danger', 'warning'],
        outline: false,
        class: 'text-white',
      },
      { intent: ['brand'], outline: true, class: 'text-brand hover:bg-brand hover:text-white' },
      {
        intent: ['primary'],
        outline: true,
        class: 'text-primary hover:bg-primary hover:text-white',
      },
      {
        intent: ['secondary'],
        outline: true,
        class: 'text-secondary hover:bg-secondary hover:text-white',
      },
      {
        intent: ['success'],
        outline: true,
        class: 'text-success hover:bg-success hover:text-white',
      },
      { intent: ['danger'], outline: true, class: 'text-danger hover:bg-danger hover:text-white' },
      {
        intent: ['warning'],
        outline: true,
        class: 'text-warning hover:bg-warning hover:text-white',
      },
    ],
    defaultVariants: {
      intent: 'brand',
      size: 'md',
      fullWidth: false,
      outline: false,
      rounded: true,
    },
  },
);
