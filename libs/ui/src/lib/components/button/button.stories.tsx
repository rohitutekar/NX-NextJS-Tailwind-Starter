import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['brand', 'primary', 'secondary', 'success', 'danger', 'warning'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    rounded: {
      type: 'boolean',
    },
    outline: {
      type: 'boolean',
    },
    fullWidth: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Brand = Template.bind({});
Brand.args = {
  intent: 'brand',
};

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  intent: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  intent: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  intent: 'warning',
};
