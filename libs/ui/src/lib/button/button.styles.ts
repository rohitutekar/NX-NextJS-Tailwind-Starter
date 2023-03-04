import { cva } from 'class-variance-authority';

export default cva(
  'flex items-center justify-center px-6 py-2 rounded font-medium focus:outline-none focus:ring-4 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      variant: {
        brand: 'bg-brand text-white',
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        success: 'bg-success text-white',
        danger: 'bg-danger text-white',
        warning: 'bg-warning text-white',
      },
      fullWidth: {
        true: 'w-full',
      },
      outline: {
        true: 'bg-transparent outline',
      },
    },
    compoundVariants: [
      { variant: ['brand'], outline: true, class: 'text-brand' },
      { variant: ['primary'], outline: true, class: 'text-primary' },
      { variant: ['secondary'], outline: true, class: 'text-secondary' },
      { variant: ['success'], outline: true, class: 'text-success' },
      { variant: ['danger'], outline: true, class: 'text-danger' },
      { variant: ['warning'], outline: true, class: 'text-warning' },
    ],
    defaultVariants: {
      variant: 'brand',
    },
  },
);
