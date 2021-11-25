import styled from 'styled-components'

import { PlaceholderStyles } from '../../types'

interface Props {
  focused: boolean
  heightControl: number
  styles: PlaceholderStyles
}

export const Placeholder = styled.label<Props>`
  width: auto;
  position: absolute;
  top: ${({ focused, heightControl, styles }) => focused ? '-8px' : `${(heightControl / 2) - (styles.fontSizePlaceholder + 2) / 2}px`};
  left: 10px;
  font-size: ${({ focused, styles }) => focused ? `${styles.fontSizePlaceholderFocused}px` : `${styles.fontSizePlaceholder}px`};
  line-height: ${({ focused, styles }) => focused ? `${styles.fontSizePlaceholderFocused + 2}px` : `${styles.fontSizePlaceholder + 2}px`};
  color: ${({ focused, styles }) => focused ? `${styles.fontColorPlaceholderFocused}` : `${styles.fontColorPlaceholder}`};
  background-color: #fff;
  transition: all ease-in-out .3s;
  cursor: text;
`
