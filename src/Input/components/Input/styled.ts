import styled from 'styled-components'

import { InputStyles } from '../../types'

interface Props {
  styles: InputStyles
}

export const Input = styled.input<Props>`
  padding: 0 25px 0 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: ${({ styles }) => styles.fontSizeInput}px;
  color: ${({ styles }) => styles.fontColorInput};
`
