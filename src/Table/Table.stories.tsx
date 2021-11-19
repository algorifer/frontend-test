import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Table, TableProps } from './index'
import { kMockTableHeaders, kMockTableRows, kMockTableButtons } from './_mock'

const meta: ComponentMeta<React.FC<TableProps>> = {
  title: 'Elements / Table',
  component: Table,
  argTypes: {
    backgroundColor: {
      name: 'Table Background',
      type: {
        name: 'string',
        required: false,
      },
      description: 'Global theme or custom color',
      control: { type: 'color' },
      table: {
        category: 'Styles',
        defaultValue: {
          summary: 'undefined',
          detail: 'The default color `colorBackground` or the color of the previous breakpoint is applied.',
        },
      },
    },
    borderColor: {
      control: { type: 'color' },
      table: { category: 'Styles' },
    },
    textColor: {
      control: { type: 'color' },
      table: { category: 'Styles' },
    },
    headers: {
      description: 'List of headers',
      defaultValue: [],
      type: {
        name: 'other',
        value: '[{field: string}]',
        required: true,
      },
      table: {
        type: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
        category: 'Data',
      },
      control: {
        type: null,
      },
    },
    rows: {
      table: {
        category: 'Data',
      },
      control: {
        type: null,
      },
    },
    buttons: {
      table: {
        category: 'Data',
      },
      control: {
        type: null,
      },
    },
    onRowClick: {
      table: {
        category: 'Action',
      },
    },
    onButtonClick: {
      table: {
        category: 'Action',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The element receives a list of fields for headers and a list of received data for rows.',
      },
    },
  },
}

const Template: ComponentStory<React.FC<TableProps>> = (args) => (
  <Table {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  headers: kMockTableHeaders,
  rows: kMockTableRows,
  buttons: [],
  pageSize: 10,
  loading: false,
}

export const WithButtons = Template.bind({})
WithButtons.args = {
  headers: kMockTableHeaders,
  rows: kMockTableRows,
  buttons: kMockTableButtons,
  pageSize: 10,
  loading: false,
}
WithButtons.parameters = {
  docs: {
    description: {
      story: 'Props `buttons` creating Action Buttons for eath row',
    },
  },
}

export default meta