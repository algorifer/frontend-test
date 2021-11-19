import React from 'react'

import { TableHeader } from '../../types'
import * as Styled from './styled'

interface Props {
  i: number
  headers: TableHeader[]
}

export const LoadingRow: React.FC<Props> = ({ headers, i }) => {
  const cells = headers.map((header) => (
    <Styled.Cell key={`${i}:${header.field}`}>
      <Styled.Loader />
    </Styled.Cell>
  ))

  return (
    <Styled.Row>
      {cells}
    </Styled.Row>
  )
}