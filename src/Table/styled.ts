import styled from 'styled-components'

import { TableStyles } from './types'

interface Props {
  styles: TableStyles
}

export const Table = styled.table<Props>`
  width: 100%;
  border-collapse: collapse;
  grid-gap: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.baseTextSize};
  background: ${({ theme, styles }) => styles.backgroundColor ?? theme.colorBackground};
  color: ${({ theme, styles }) => styles.textColor ?? theme.colorBody};
`
export const TableBody = styled.tbody``