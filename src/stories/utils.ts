import { ThemeSettings } from '../types'

const kContarastedAccentL = 95
const kInitialGrayL = 93
const kGrayscaleLightnessIncrement = 11.3
const kDefaultLigthBackground = 'white'

const gray1L = kInitialGrayL
const gray2L = kInitialGrayL - kGrayscaleLightnessIncrement * 1
const gray3L = kInitialGrayL - kGrayscaleLightnessIncrement * 2
const gray4L = kInitialGrayL - kGrayscaleLightnessIncrement * 3
const gray5L = kInitialGrayL - kGrayscaleLightnessIncrement * 4
const gray6L = kInitialGrayL - kGrayscaleLightnessIncrement * 5
const gray7L = kInitialGrayL - kGrayscaleLightnessIncrement * 6
const gray8L = kInitialGrayL - kGrayscaleLightnessIncrement * 7

interface Preset {
  title: string
  color: string
}

export const getColorsPresets = (settings: ThemeSettings): Preset[] => {
  const colors = {
    colorAccent: `hsl(${settings.accentH}, ${settings.accentS}%, ${settings.accentL}%)`,
    colorAccentContrasted: `hsl(${settings.accentH}, ${settings.accentS}%, ${kContarastedAccentL}%)`,
    colorGray1: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray1L}%)`,
    colorGray2: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray2L}%)`,
    colorGray3: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray3L}%)`,
    colorGray4: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray4L}%)`,
    colorGray5: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray5L}%)`,
    colorGray6: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray6L}%)`,
    colorGray7: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray7L}%)`,
    colorGray8: `hsl(${settings.accentH}, ${settings.grayS}%, ${gray8L}%)`,
    colorBorder: settings.darkMode
      ? `hsla(${settings.accentH}, ${settings.grayS}%, ${gray1L}%, 0.1)`
      : `hsla(${settings.accentH}, ${settings.grayS}%, ${gray8L}%, 0.1)`,
    colorOverlay: settings.darkMode
      ? `hsla(${settings.accentH}, ${settings.grayS}%, ${gray1L}%, 0.07)`
      : `hsla(${settings.accentH}, ${settings.grayS}%, ${gray8L}%, 0.07)`,
    colorBackground: settings.darkMode
      ? `hsl(${settings.accentH}, ${settings.grayS}%, ${gray8L}%)`
      : kDefaultLigthBackground,
    colorBody: settings.darkMode
      ? `hsl(${settings.accentH}, ${settings.grayS}%, ${gray1L}%)`
      : `hsl(${settings.accentH}, ${settings.grayS}%, ${gray8L}%)`,
    colorBodyDimmer: settings.darkMode
      ? `hsla(${settings.accentH}, ${settings.grayS}%, ${gray1L}%, 0.5)`
      : `hsla(${settings.accentH}, ${settings.grayS}%, ${gray8L}%, 0.5)`,
    colorFieldBorder: settings.darkMode
      ? `hsl(${settings.accentH}, ${settings.grayS}%, ${gray6L}%)`
      : `hsl(${settings.accentH}, ${settings.grayS}%, ${gray2L}%)`,
    colorButtom: settings.darkMode
      ? `hsl(${settings.accentH}, ${settings.grayS}%, ${gray6L}%)`
      : `hsl(${settings.accentH}, ${settings.grayS}%, ${gray2L}%)`,
  }

  return Object.entries(colors).map(([title, color]) => ({
    title,
    color,
  }))
}