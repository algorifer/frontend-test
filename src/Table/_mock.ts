import { TableHeader, TableButton, TableColumnAlign } from './types'

export const kMockTableHeaders: TableHeader[] = [{
  field: 'id',
  title: 'ID',
  align: TableColumnAlign.Left,
}, {
  field: 'name',
  title: 'Name',
  align: TableColumnAlign.Center,
}, {
  field: 'company_name',
  title: 'Company Name',
  align: TableColumnAlign.Left,
}, {
  field: 'city',
  title: 'City',
  align: TableColumnAlign.Right,
}]

export const kMockTableRows: Record<string, any>[] = [{
  id: 1,
  name: 'My Company (San Francisco)',
  company_name: 'YourCompany',
  city: 'San Francisco',
}, {
  id: 3,
  name: 'Mitchell Admin',
  company_name: 'YourCompany',
  city: 'Scranton',
}, {
  id: 7,
  name: 'Marc Demo',
  company_name: 'YourCompany',
  city: 'Eugene',
}, {
  id: 8,
  name: 'Joel Willis',
  company_name: 'YourCompany',
  city: 'Bayonne',
}]

export const kMockTableButtons: TableButton[] = [{
  id: 'remove',
  label: 'Delete',
}, {
  id: 'add',
  label: 'Add To Card',
}]