import React from 'react'

import { DocContainer } from './Doc'
import { CanvasContainer } from './Canvas'

interface Props {
  isDoc: boolean
  children: any
}

export const StoryDecorator: React.FC<Props> = ({ isDoc, children }) => {
  if (isDoc) {
    return (
      <DocContainer>
        {children}
      </DocContainer>
    )
  }

  return (
    <CanvasContainer>
      {children}
    </CanvasContainer>
  )
}