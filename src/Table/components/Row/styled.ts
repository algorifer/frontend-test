import styled from 'styled-components'

interface Props {
  clicable: boolean
}

export const Row = styled.tr<Props>`
  ${({ clicable }) => clicable && 'cursor: pointer'}
`