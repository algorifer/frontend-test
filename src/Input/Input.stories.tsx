import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Control, ControlProps } from './index'

const meta: ComponentMeta<React.FC<ControlProps>> = {
  title: 'Elements / Control',
  component: Control,
  argTypes: {
    loading: {
      name: 'Загрузка',
      table: { category: 'State' }
    },
    placeholderValue: {
      name: 'Значение Placeholder',
      table: { category: 'State' }
    },
    widthControl: {
      name: 'Ширина Control',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    heightControl: {
      name: 'Высота Control',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    fontSizeInput: {
      name: 'Размер шрифта Input',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    fontColorInput: {
      name: 'Цвет шрифта Input',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    fontSizePlaceholder: {
      name: 'Размер шрифта неактивного Placeholder',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    fontSizePlaceholderFocused: {
      name: 'Размер шрифта активного Placeholder',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    fontColorPlaceholder: {
      name: 'Цвет шрифта неактивного Placeholder',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    fontColorPlaceholderFocused: {
      name: 'Цвет шрифта активного Placeholder',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    borderColorControl: {
      name: 'Цвет границы неактивного Control',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    borderColorControlFocused: {
      name: 'Цвет границы активного Control',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    borderWidthControl: {
      name: 'Размер границы неактивного Control',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    borderWidthControlFocused: {
      name: 'Размер границы активного Control',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    boxShadowColorControlFocused: {
      name: 'Цвет тени активного Control',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    colorPreloader: {
      name: 'Цвет Preloader 1',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    colorPreloaderAfter: {
      name: 'Цвет Preloader 2',
      control: { type: 'color' },
      table: { category: 'Styles' }
    },
    colorPreloaderBefore: {
      name: 'Цвет Preloader 3',
      control: {type: 'color'},
      table: {category: 'Styles'}
    },
    widthPreloader: {
      name: 'Ширина Preloader',
      control: { type: 'number' },
      table: { category: 'Styles' }
    },
    heightPreloader: {
      name: 'Высота Preloader',
      control: { type: 'number' },
      table: { category: 'Styles' }
    }
  }
}

const Template: ComponentStory<React.FC<ControlProps>> = (args) => (
  <Control {...args} />
)

export const Base = Template.bind({})
Base.args = {
  loading: false,
  widthControl: 300,
  heightControl: 30,
  fontSizeInput: 14,
  fontColorInput: '#000',
  fontSizePlaceholder: 14,
  fontSizePlaceholderFocused: 11,
  fontColorPlaceholder: '#ccc',
  fontColorPlaceholderFocused: '#000',
  borderColorControl: '#ccc',
  borderColorControlFocused: '#4285f4',
  borderWidthControl: 1,
  borderWidthControlFocused: 1,
  boxShadowColorControlFocused: 'rgba(66, 133, 244, 0.5)',
  placeholderValue: 'Введите текст',
  colorPreloader: '#4285f4',
  colorPreloaderAfter: '#fff',
  colorPreloaderBefore: '#4285f4',
  widthPreloader: 15,
  heightPreloader: 15
}

export default meta