import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from './alert';

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['brand', 'primary', 'secondary', 'success', 'danger', 'warning'],
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}>Alert</Alert>;

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
