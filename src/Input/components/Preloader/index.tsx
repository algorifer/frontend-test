import React from 'react'

import { PreloaderStyles } from '../../types'

import * as Styled from './styled'

interface Props extends PreloaderStyles {
  heightControl: number
}

export const Preloader: React.FC<Props> = ({ heightControl, ...styles}) => {
  return (
    <Styled.Preloader heightControl={heightControl} styles={styles}>
      <Styled.PreloaderContainer {...styles}>
        <Styled.PreloaderRound {...styles} />
      </Styled.PreloaderContainer>
    </Styled.Preloader>
  )
}