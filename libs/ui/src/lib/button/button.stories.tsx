import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['brand', 'primary', 'secondary', 'success', 'danger', 'warning'],
      },
    },
    fullWidth: {
      type: 'boolean',
    },
    outline: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Brand = Template.bind({});
Brand.args = {
  variant: 'brand',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};
