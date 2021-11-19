export interface ThemeSettings {
  // Typography
  // 1 - 2 float
  textSizeIncrement: number
  // 0.8 - 2 float
  baseTextSize: number
  fontFamily: string
  // Spacing
  // 0.4 - 0.8 float
  unit: number
  // 1 - 2 float
  spaceIncrement: number
  // 0 - 1 float
  textFrameY: number
  // 1 - 3 float
  textFrameRatio: number
  // Color
  // 0 - 360 int
  accentH: number
  // 0 - 100 int
  accentS: number
  // 0 - 100 int
  accentL: number
  // 0 - 100 int
  grayS: number
  // Layer
  // 0 - 1 float
  radius: number
  // 1 - 3 int
  fieldBorderWidth: number
  roundButton: boolean
  darkMode: boolean
}

export interface Theme {
  // Typography
  fontFamily: string
  textSizeIncrement: number
  baseTextSize: string
  textXS: string
  textS: string
  textM: string
  textL: string
  textXL: string
  globalLineHeight: string
  // Spacing
  unit: string
  textFrameY: string
  textFrameX: string
  spaceS: string
  spaceM: string
  spaceL: string
  spaceXL: string
  spaceXXL: string
  spaceXXXL: string
  spaceXXXXL: string
  // Colors
  colorAccent: string
  colorAccentContrasted: string
  colorGray1: string
  colorGray2: string
  colorGray3: string
  colorGray4: string
  colorGray5: string
  colorGray6: string
  colorGray7: string
  colorGray8: string
  colorBorder: string
  colorOverlay: string
  colorBackground: string
  colorBody: string
  colorBodyDimmer: string
  colorFieldBorder: string
  colorButtom: string
  // Layer
  radius: string
  fieldBorderWidth: string
}

export enum Colors {
  ColorAccent = 'colorAccent',
  ColorAccentContrasted = 'colorAccentContrasted',
  ColorGray1 = 'colorGray1',
  ColorGray2 = 'colorGray2',
  ColorGray3 = 'colorGray3',
  ColorGray4 = 'colorGray4',
  ColorGray5 = 'colorGray5',
  ColorGray6 = 'colorGray6',
  ColorGray7 = 'colorGray7',
  ColorGray8 = 'colorGray8',
  ColorBorder = 'colorBorder',
  ColorOverlay = 'colorOverlay',
  ColorBackground = 'colorBackground',
  ColorBody = 'colorBody',
  ColorBodyDimmer = 'colorBodyDimmer',
  ColorFieldBorder = 'colorFieldBorder',
  ColorButtom = 'colorButtom',
}

export type Spaces =
  | 'spaceS'
  | 'spaceM'
  | 'spaceL'
  | 'spaceXL'
  | 'spaceXXL'
  | 'spaceXXXL'
  | 'spaceXXXXL'