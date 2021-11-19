import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  margin: 0;
  padding: ${({ theme }) => `calc(${theme.textFrameY} / 2) ${theme.textFrameX}`};
  background: none;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colorAccent};
  opacity: 1;
  
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorAccent};
    color: ${({ theme }) => theme.colorAccentContrasted};
  }
`