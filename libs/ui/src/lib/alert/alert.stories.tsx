import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from './alert';

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: [
          'brand',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
        ],
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>Alert</Alert>
);

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
