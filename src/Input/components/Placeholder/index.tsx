import React from 'react'

import { PlaceholderStyles } from '../../types'

import * as Styled from './styled'

interface Props extends PlaceholderStyles {
  focused: boolean
  placeholderValue: string
  heightControl: number
}

export const Placeholder: React.FC<Props> = ({ focused, placeholderValue, heightControl, ...styles }) => {
  return (
    <Styled.Placeholder focused={focused} heightControl={heightControl} styles={styles} htmlFor={'1'}>
      {placeholderValue}
    </Styled.Placeholder>
  )
}