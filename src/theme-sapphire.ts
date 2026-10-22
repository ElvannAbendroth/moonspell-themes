import { makeGemTheme } from './templates/gems'
import { ThemeColors, ThemeMeta } from './types'

const meta: ThemeMeta = {
  name: 'Moonspell - Sapphire',
  description: 'A dark theme with deep blue accents inspired by ocean depths and August Themes Drawbridge',
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
    highlight: '#c3cdfe',
    default: '#b8cdfe',
    muted: '#b8cdfe',
    inactive: '#b8cdfe',
  },
  border: {
    default: '#1b1f32',
    highlight: '#282C42',
  },
  primary: {
    default: 'hsl(227, 99%, 73%)',
    muted: 'hsl(227, 61%, 62%)',
    highlight: 'hsl(227, 80%, 74%)',
    foreground: '#0F111A',
  },
  git: {
    modified: '#9889F2',
    untracked: '#24dbc3',
    added: '#67c9e4',
    ignored: '#b8cdfe55',
    error: '#ea96f2',
    deleted: '#ea96f2',
    conflict: '#e19981',
  },
  rainbow: {
    purple: '#B396F9',
    blue: '#8EA7FF',
    cyan: '#67c9e4',
    green: '#8EA7FF',
    yellow: '#B396F9',
    orange: '#e19981',
    pink: '#ea96f2',
    red: '#ea96f2',
    white: '#E1E1E1',
    black: '#B8B8B8',
  },
  utility: {
    info: '#67c9e4',
    success: '#24dbc3',
    warn: '#e19981',
    error: '#ea96f2',
  },
  debug: '#9889F2',
}

const theme = makeGemTheme(meta, colors)

console.log(JSON.stringify(theme, null, 2))
