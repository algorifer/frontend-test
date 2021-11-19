import styled from 'styled-components'

interface ElementProps {
  width: number
  height: number
}

interface WidthHandlerProps {
  isDragging: boolean
  right?: boolean
}

interface HeightHandlerProps {
  isDragging: boolean
  bottom?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.spaceL};
  box-sizing: border-box;
  background: ${({ theme }) => theme.colorBackground};
`

export const DocWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colorBackground};
`

export const Element = styled.div<ElementProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ theme }) => theme.spaceS};
  border: 1px solid ${({ theme }) => theme.colorBorder};
  border-radius: ${({ theme }) => theme.radius};
  box-sizing: border-box;
`

export const DocElement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ElementWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`

export const WidthHandler = styled.button<WidthHandlerProps>`
  position: absolute;
  top: 50%;
  right: ${({ right, theme }) => (right ? `calc(${theme.spaceS} * -1.5)` : 'auto')};
  left: ${({ right, theme }) => (right ? 'auto' : `calc(${theme.spaceS} * -2)`)};
  display: block;
  width: calc(${({ theme }) => theme.spaceS} / 2);
  flex-grow: 0;
  height: ${({ theme }) => theme.spaceM};
  transform: translateY(-50%);
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colorButtom};
  box-sizing: border-box;
  box-shadow: ${({ isDragging }) => (isDragging
    ? '-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)'
    : 'none')};
  &:hover {
    background: ${({ theme }) => theme.colorAccent};
  }
`

export const HeightHandler = styled.button<HeightHandlerProps>`
  position: absolute;
  left: 50%;
  top: ${({ bottom, theme }) => (bottom ? 'auto' : `calc(${theme.spaceS} * -1)`)};
  bottom: ${({ bottom, theme }) => (bottom ? `calc(${theme.spaceS} * -1)` : 'auto')};
  display: block;
  height: calc(${({ theme }) => theme.spaceS} / 2);
  width: ${({ theme }) => theme.spaceM};
  transform: translateX(-50%);
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colorButtom};
  box-shadow: ${({ isDragging }) => (isDragging
    ? '-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)'
    : 'none')};
  &:hover {
    background: ${({ theme }) => theme.colorAccent};
  }
`