import React from 'react'

import { TableHeader, TableButton, TableStyles } from '../../types'
import { DataCell } from '../DataCell'
import { ButtonsCell } from '../ButtonsCell'
import * as Styled from './styled'

interface Props {
  entity: Record<string, any>
  headers: TableHeader[]
  buttons: TableButton[]
  styles: TableStyles
  onRowClick?(row: Record<string, any>): void
  onButtonClick?(row: Record<string, any>, button: string): void
}

export const Row: React.FC<Props> = ({
  entity, headers, buttons, styles, onRowClick, onButtonClick,
}) => {
  const onClick = () => {
    if (onRowClick) {
      onRowClick(entity)
    }
  }

  const cells = headers.map((header) => (
    <DataCell
      key={`${entity.id}:${header.field}`}
      header={header}
      data={entity[header.field]}
      styles={styles}
    />
  ))

  return (
    <Styled.Row onClick={onClick} clicable={!!onRowClick}>
      {cells}
      <ButtonsCell
        entity={entity}
        buttons={buttons}
        styles={styles}
        onButtonClick={onButtonClick}
      />
    </Styled.Row>
  )
}