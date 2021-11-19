import React from 'react'

import { kDefaultSettings } from '../../constants'
import { ThemeProvider } from '../../ThemeProvider'
import * as Styled from './styled'

interface Props {
  children: React.ReactNode
}

export const DocContainer = ({ children }: Props): JSX.Element => (
  <ThemeProvider settings={kDefaultSettings}>
    <Styled.DocWrapper>
      <Styled.DocElement>
        {children}
      </Styled.DocElement>
    </Styled.DocWrapper>
  </ThemeProvider>
)