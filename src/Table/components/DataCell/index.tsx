import React from 'react'

import { TableHeader, TableStyles } from '../../types'
import * as Styled from './styled'

interface Props {
  header: TableHeader
  data: any
  styles: TableStyles
}

export const DataCell: React.FC<Props> = ({ header, data, styles }) => (
  <Styled.Cell
    key={`${header.field}:${data}`}
    align={header.align ?? 'left'}
    styles={styles}
  >
    {data}
  </Styled.Cell>
)