import styled from 'styled-components'

import { TextInputStyles } from './types'

interface Props {
  styles: TextInputStyles
}

export const TextInput = styled.input<Props>`
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 7px 10px;
  margin: 0px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.baseTextSize};
  background: ${({ theme, styles }) => styles.backgroundColor ?? theme.colorBackground};
  color: ${({ theme, styles }) => styles.textColor ?? theme.colorBody};
  &:focus {
    outline-color: ${({ styles }) => styles.borderColor};
    background-color: ${({ theme, styles }) => styles.backgroundColor ?? theme.colorBackground};
  }
`