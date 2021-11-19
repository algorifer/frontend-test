import React from 'react'

import { TableButton, TableStyles } from '../../types'
import { ActionButton } from '../ActionButton'
import * as Styled from './styled'

interface Props {
  entity: Record<string, any>
  buttons: TableButton[]
  styles: TableStyles
  onButtonClick?(row: Record<string, any>, button: string): void
}

export const ButtonsCell: React.FC<Props> = ({
  entity, buttons, styles, onButtonClick,
}) => {
  if (buttons.length === 0 || !onButtonClick) {
    return null
  }

  const items = buttons.map((it) => (
    <ActionButton
      key={`${it.id}:${entity.id}`}
      entity={entity}
      button={it}
      onButtonClick={onButtonClick}
    />
  ))

  return (
    <Styled.Cell styles={styles}>
      {items}
    </Styled.Cell>
  )
}