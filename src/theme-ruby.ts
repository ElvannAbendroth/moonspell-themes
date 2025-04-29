import { makeGemTheme } from './templates/gems'
import { ThemeColors, ThemeMeta } from './types'

const meta: ThemeMeta = {
  name: 'Moonspell - Ruby',
  description: 'A dark theme with a red  hue inspired by dark caves & rubies inspired by August Themes Drawbridge',
  type: 'dark',
}

const colors: ThemeColors = {
  background: {
    muted: '#0F111A',
    default: '#131520',
    highlight: '#1b1f32',
    active: '#252a41',
  },
  foreground: {
    highlight: '#d8dee9',
    default: '#d8dee9',
    muted: '#d8dee9',
    inactive: '#d8dee9',
  },
  border: {
    default: '#252527',
    highlight: '#2f2f32',
  },
  primary: {
    default: '#ce294a',
    muted: '#a31c37',
    highlight: '#e4758b',
    foreground: '#d8dee9',
  },
  git: {
    modified: '#b78eff',
    untracked: '#99e659',
    added: '#67c9e4',
    ignored: '#b8cdfe55',
    error: '#e4758b',
    deleted: '#e4758b',
    conflict: '#f49267',
  },
  rainbow: {
    purple: '#f6d55c',
    blue: '#b78eff',
    cyan: '#f49267',
    green: '#e4758b',
    yellow: '#f6d55c',
    orange: '#f49267',
    pink: '#e4758b',
    red: '#e4758b',
    white: '#d8dee9',
    black: '#d8dee9',
  },
  utility: {
    info: '#67c9e4',
    success: '#99e659',
    warn: '#f2b66f',
    error: '#f53fb2',
  },
  debug: '#F28989',
}

const theme = makeGemTheme(meta, colors)

console.log(JSON.stringify(theme, null, 2))
