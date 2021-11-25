import styled from 'styled-components'

import { ControlStyles } from './types'

interface Props extends ControlStyles {
  focused: boolean
}

export const Control = styled.div<Props>`
  margin:  10px;
  position: relative;
  width: ${({ widthControl }) => widthControl}px;
  height: ${({ heightControl }) => heightControl}px;
  display: flex;
  align-items: center;
  border: solid ${({ ...props }) => props.focused ? `${props.borderWidthControlFocused}px ${props.borderColorControlFocused}` : `${props.borderWidthControl}px ${props.borderColorControl}`};
  border-radius: 5px;
  box-shadow: ${({ focused, boxShadowColorControlFocused }) => focused ? `0 0 5px ${boxShadowColorControlFocused}` : 'none'};
`