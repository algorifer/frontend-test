import React, { useState } from 'react'
import {
  DndContext,
  useSensor,
  useSensors,
  useDraggable,
  MouseSensor,
  PointerSensor,
} from '@dnd-kit/core'

import { kDefaultSettings } from '../../constants'
import { ThemeProvider } from '../../ThemeProvider'

import * as Styled from './styled'

interface Props {
  children: any
}

enum Handler {
  WidthLeft = 'widthLeft',
  WidthRight = 'widthRight',
  HeightTop = 'heightTop',
  HeightBottom = 'heightBottom',
}

const kWidth = 600
const kHeight = 300

const TopHandler = () => {
  const {
    setNodeRef, isDragging, attributes, listeners,
  } = useDraggable({ id: Handler.HeightTop })

  return (
    <Styled.HeightHandler
      ref={setNodeRef}
      isDragging={isDragging}
      {...attributes}
      {...listeners}
    />
  )
}

const BottomHandler = () => {
  const {
    setNodeRef, isDragging, attributes, listeners,
  } = useDraggable({ id: Handler.HeightBottom })

  return (
    <Styled.HeightHandler
      bottom
      ref={setNodeRef}
      isDragging={isDragging}
      {...attributes}
      {...listeners}
    />
  )
}

const LeftHandler = () => {
  const {
    setNodeRef, isDragging, attributes, listeners,
  } = useDraggable({ id: Handler.WidthLeft })

  return (
    <Styled.WidthHandler
      ref={setNodeRef}
      isDragging={isDragging}
      {...attributes}
      {...listeners}
    />
  )
}

const RightHandler = () => {
  const {
    setNodeRef, isDragging, attributes, listeners,
  } = useDraggable({ id: Handler.WidthRight })

  return (
    <Styled.WidthHandler
      right
      ref={setNodeRef}
      isDragging={isDragging}
      {...attributes}
      {...listeners}
    />
  )
}

export const CanvasContainer: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState<number>(kWidth)
  const [height, setHeight] = useState<number>(kHeight)

  const [startWidth, setStartWidth] = useState<number>(kWidth)
  const [startHeight, setStartHeight] = useState<number>(kHeight)

  const mouseSensor = useSensor(MouseSensor)
  const pointerSensor = useSensor(PointerSensor)
  const sensors = useSensors(mouseSensor, pointerSensor)

  return (
    <DndContext
      sensors={sensors}
      onDragStart={() => {
        setStartWidth(width)
        setStartHeight(height)
      }}
      onDragMove={({ delta, active }) => {
        let nextWidth = startWidth
        let nextHeight = startHeight

        switch (active.id) {
          case Handler.WidthLeft:
            nextWidth = startWidth + delta.x * -2
            break
          case Handler.WidthRight:
            nextWidth = startWidth + delta.x * 2
            break
          case Handler.HeightTop:
            nextHeight = startHeight + delta.y * -2
            break
          case Handler.HeightBottom:
            nextHeight = startHeight + delta.y * 2
            break
          default:
            break
        }

        setWidth(nextWidth)
        setHeight(nextHeight)
      }}
    >
      <ThemeProvider settings={kDefaultSettings}>
        <Styled.Container>
          <Styled.Element width={width} height={height}>
            <Styled.ElementWrapper>
              {children}
            </Styled.ElementWrapper>
            <TopHandler />
            <BottomHandler />
            <LeftHandler />
            <RightHandler />
          </Styled.Element>
        </Styled.Container>
      </ThemeProvider>
    </DndContext>
  )
}