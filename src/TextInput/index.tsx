import React from 'react'

import * as Styled from './styled'
import { TextInputStyles } from './types'

export interface InputProps extends TextInputStyles {
  pageSize: number
  onChangeText: (value: string) => void
  // onFocus for analytics?
  placeholder: string
}

export const TextInput: React.FC<InputProps> = ({ onChangeText, placeholder, ...styles }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value)

  return (
    <Styled.TextInput
      type='textarea'
      placeholder={placeholder}
      styles={styles}
      onChange={onChange}
    ></Styled.TextInput>
  )
}