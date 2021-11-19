import styled from 'styled-components'

import { TableStyles } from '../../types'

interface Props {
  styles: TableStyles
}

export const Cell = styled.td<Props>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaceS};
  min-width: ${({ theme }) => theme.spaceXXL};
  padding: ${({ theme }) => `calc(${theme.spaceS} - ${theme.textFrameY} / 2)`};
  border-bottom: 1px solid ${({ theme, styles }) => styles.borderColor ?? theme.colorBorder};
  text-align: ${({ align }) => align};
`