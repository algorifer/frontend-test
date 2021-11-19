import React, { MouseEvent } from 'react'

import { TableButton } from '../../types'
import * as Styled from './styled'

interface Props {
  entity: Record<string, any>
  button: TableButton
  onButtonClick(row: Record<string, any>, button: string): void
}

export const ActionButton: React.FC<Props> = ({ entity, button, onButtonClick }) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onButtonClick(entity, button.id)
  }

  return (
    <Styled.Button
      key={`${button.id}:${entity.id}`}
      type="button"
      onClick={onClick}
    >
      {button.label}
    </Styled.Button>
  )
}