import { Colors } from '../types'

export enum TableColumnAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export interface TableHeader {
  field: string
  title: string
  align: TableColumnAlign
}

export interface TableButton {
  id: string
  label: string
}

export interface TableStyles {
  backgroundColor?: Colors | string
  borderColor?: Colors | string
  textColor?: Colors | string
}