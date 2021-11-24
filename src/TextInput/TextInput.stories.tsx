import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputProps, TextInput } from './index'
import { kMockInput } from './_mock'

const meta: ComponentMeta<React.FC<InputProps>> = {
  title: 'Elements / Text input',
  component: TextInput,
  argTypes: {
    backgroundColor: {
      name: 'Input Background',
      type: {
        name: 'string',
        required: false,
      },
      description: 'Global theme or custom color',
      control: { type: 'color' },
      table: { category: 'Styles' },
    },
    borderColor: {
      name: 'Border Color',
      control: { type: 'color' },
      table: { category: 'Styles' },
    },
    textColor: {
      name: 'Text Color',
      control: { type: 'color' },
      table: { category: 'Styles' },
    },
    placeholder: {
      table: {
        category: 'Data',
      },
      name: 'Placeholder',
      type: {
        name: 'string',
        required: false,
      },
    },
    onChangeText: {
      table: {
        category: 'Action',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The element returns any user-written text data',
      },
    },
  },
}

const Template: ComponentStory<React.FC<InputProps>> = (args) => (
  <TextInput {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  pageSize: 10,
  ...kMockInput,
}

export default meta