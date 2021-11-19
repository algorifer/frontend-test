import React from 'react'

import { TableHeader, TableButton, TableStyles } from './types'
import { Head, Row, LoadingRow } from './components'
import * as Styled from './styled'

export interface TableProps extends TableStyles {
  headers: TableHeader[]
  rows: Record<string, any>[]
  buttons: TableButton[]
  pageSize: number
  loading?: boolean
  onRowClick?(row: Record<string, any>): void
  onButtonClick?(row: Record<string, any>, button: string): void
}

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  buttons,
  pageSize,
  loading,
  onRowClick,
  onButtonClick,
  ...styles
}) => {
  const rowItems = loading 
    ? new Array(pageSize).fill(null).map((_, i) => (
      <LoadingRow key={i} i={i} headers={headers} />
    )) 
    : rows.map((it) => (
      <Row
        entity={it}
        headers={headers}
        buttons={buttons}
        styles={styles}
        onRowClick={onRowClick}
        onButtonClick={onButtonClick}
      />
    ))

  return (
    <Styled.Table styles={styles}>
      <Head
        headers={headers}
        isButtons={buttons.length !== 0}
        styles={styles}
      />
      <Styled.TableBody>
        {rowItems}
      </Styled.TableBody>
    </Styled.Table>
  )
}