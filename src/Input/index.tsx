import React from 'react'

import { Input, Placeholder, Preloader } from './components'
import * as Styled from './styled'

export interface ControlProps {
  loading: boolean
  placeholderValue: string
  widthControl: number
  heightControl: number
  borderColorControl: string
  borderColorControlFocused: string
  borderWidthControl: number
  borderWidthControlFocused: number
  boxShadowColorControlFocused: string
  fontSizeInput: number
  fontColorInput: string
  fontSizePlaceholder: number
  fontSizePlaceholderFocused: number
  fontColorPlaceholder: string
  fontColorPlaceholderFocused: string
  colorPreloader: string
  colorPreloaderAfter: string
  colorPreloaderBefore: string
  widthPreloader: number
  heightPreloader: number
}

export const Control: React.FC<ControlProps> = ({ ...props }) => {
  const [focused, onHandleFocused] = React.useState(false)
  const [valueInput, onChangeValue] = React.useState('')

  const onFocus = (): void => {
    onHandleFocused(true)
  }

  const onBlur = (): void => {
    onHandleFocused(false)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    onChangeValue(value)
  }

  return (
    <Styled.Control focused={focused} {...props}>
      <Placeholder focused={focused || valueInput.length > 0 ? true : false} {...props} />
      <Input onBlur={onBlur} onFocus={onFocus} onChange={onChange} {...props} />
      {props.loading ? <Preloader {...props} /> : null}
    </Styled.Control>
  )
}