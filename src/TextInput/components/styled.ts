import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position-x: 100%;
  }
  to {
    background-position-x: 0;
  }
`

export const Loader = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.textS};
  border-radius: ${({ theme }) => theme.radius};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colorAccentContrasted},
    ${({ theme }) => theme.colorBorder}
  );
  background-size: 200% 100%;
  animation: ${loading} 0.8s ease-in-out infinite;
  animation-direction: alternate;
`