import React from 'react'

import { TableHeader, TableStyles } from '../../types'
import * as Styled from './styled'

interface Props {
  headers: TableHeader[]
  isButtons: boolean
  styles: TableStyles
}

export const Head: React.FC<Props> = ({ headers, isButtons, styles }) => {
  const cells = headers.map(({ field, title, align }) => (
    <Styled.Cell
      key={field}
      align={align ?? 'left'}
      styles={styles}
    >
      {title}
    </Styled.Cell>
  ))

  return (
    <Styled.Head>
      <Styled.Row>
        {cells}
        {isButtons && (
          <Styled.Cell styles={styles} aria-label="Actions column">{' '}</Styled.Cell>
        )}
      </Styled.Row>
    </Styled.Head>
  )
}