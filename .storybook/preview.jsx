import { kDefaultSettings } from '../src/constants'
import { StoryDecorator, getColorsPresets } from '../src/stories'

export const decorators = [
  (Story, { viewMode }) => (
    <StoryDecorator isDoc={viewMode === 'docs'}>
      <Story />
    </StoryDecorator>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    presetColors: getColorsPresets(kDefaultSettings)
  },
}