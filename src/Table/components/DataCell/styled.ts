import styled from 'styled-components'

import { TableStyles } from '../../types'

interface Props {
  styles: TableStyles
}

export const Cell = styled.td<Props>`
  min-width: ${({ theme }) => theme.spaceXXL};
  padding: ${({ theme }) => theme.spaceS};
  text-align: ${({ align }) => align};
  border-bottom: 1px solid ${({ theme, styles }) => styles.borderColor ?? theme.colorBorder};
`