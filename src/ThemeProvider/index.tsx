import React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import { ThemeSettings } from '../types'
import { useTheme } from './useTheme'

interface Props {
  settings: ThemeSettings
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ settings, children }) => {
  const theme = useTheme(settings)

  return (
    <StyledProvider theme={theme}>
      {children}
    </StyledProvider>
  )
}

export * from './useTheme'