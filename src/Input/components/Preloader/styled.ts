import styled, { keyframes } from 'styled-components'

import { PreloaderStyles } from '../../types'

const loadingInsideWhite = keyframes`
  0% {
    -webkit-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
  }
  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
`

const loadingInsideBlue = keyframes`
  0% {
    -webkit-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
  }
  30% {
    -webkit-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
  }
  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
`

interface PreloaderProps {
  heightControl: number
  styles: PreloaderStyles
}

export const Preloader = styled.div<PreloaderProps>`
  position: absolute;
  top: ${({ heightControl, styles }) => `${(heightControl / 2) - styles.heightPreloader / 2}px`};
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`

export const PreloaderContainer = styled.div<PreloaderStyles>`
  width: ${({ widthPreloader }) => widthPreloader}px;
  height: ${({ heightPreloader }) => heightPreloader}px;
  position: relative;
`

export const PreloaderRound = styled.span<PreloaderStyles>`
  width: ${({ widthPreloader }) => widthPreloader}px;
  height: ${({ heightPreloader }) => heightPreloader}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 10px;
  background: ${({ colorPreloader }) => colorPreloader};
  border-radius: 50px;
  
  &::after,
  &::before {
    content: '';
    width: ${({ widthPreloader }) => widthPreloader}px;
    height: ${({ heightPreloader }) => heightPreloader}px;
    position: absolute;
    top: 0;
    left: 0px;
    right: 10px;
    border-radius: 50px;
  }

  &::after {
    background: ${({ colorPreloaderAfter }) => colorPreloaderAfter};
    animation: ${loadingInsideWhite} 1s ease-in-out infinite;
  }

  &::before {
    z-index: 10;
    background: ${({ colorPreloaderBefore }) => colorPreloaderBefore};
    animation: ${loadingInsideBlue} 1s ease-in-out infinite;
  }
`