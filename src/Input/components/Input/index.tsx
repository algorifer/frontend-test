import React from 'react'

import { InputStyles } from '../../types'

import * as Styled from './styled'

interface Props extends InputStyles {
  onBlur: () => void
  onFocus: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ onBlur, onFocus, onChange, ...styles }) => {
  return (
    <Styled.Input
      id={'1'}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      styles={styles}
    />
  )
}