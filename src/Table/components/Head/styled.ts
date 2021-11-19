import styled from 'styled-components'

import { TableStyles } from '../../types'

interface Props {
  styles: TableStyles
}

export const Head = styled.thead``
export const Row = styled.tr``

export const Cell = styled.th<Props>`
  padding: ${({ theme }) => theme.spaceS};
  font-weight: bold;
  color: ${({ theme }) => theme.colorBodyDimmer};
  border-bottom: 1px solid ${({ theme, styles }) => styles.borderColor ?? theme.colorBorder};
  text-align: ${({ align }) => align};
`