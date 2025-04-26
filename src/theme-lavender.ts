import { makeFlowerTheme } from './templates/flower'
import { ThemeColors, ThemeMeta } from './types'

const meta: ThemeMeta = {
  name: 'Moonspell - Lavender',
  description:
    'A light theme for VSCode, inspired by the Lavender color palette. It features a light background with soft lavender and purple accents.',
  type: 'light',
}

const colors: ThemeColors = {
  background: {
    muted: '#e6e9ef',
    default: '#eff1f5',
    highlight: '#eef0f5',
    active: '#dce0e8',
  },
  foreground: {
    highlight: '#403A56',
    default: '#403A56',
    muted: '#726b8a',
    inactive: '#948daa',
  },
  border: {
    default: '#e6e9ef',
    highlight: '#dce0e8',
  },
  primary: {
    default: '#7A64E8',
    muted: '#6A52E5',
    highlight: '#9A8AF2',
    foreground: '#eff1f5',
  },
  git: {
    modified: '#DDA647',
    untracked: '#3FAD45',
    added: '#169392',
    ignored: '#ABA8BD',
    error: '#D44FE2',
    deleted: '#D44FE2',
    conflict: '#D44FE2',
  },
  rainbow: {
    purple: '#B08FF9',
    blue: '#169392',
    cyan: '#169392',
    green: '#9D5EF2',
    yellow: '#B08FF9',
    orange: '#169392',
    pink: '#D44FE2',
    red: '#D44FE2',
    white: '#403A56',
    black: '#2D2840',
  },
  utility: {
    info: '#169392',
    success: '#3FAD45',
    warn: '#DDA647',
    error: '#E03A81',
  },
  debug: '#DDA647',
}

const theme = makeFlowerTheme(meta, colors)

console.log(JSON.stringify(theme, null, 2))
