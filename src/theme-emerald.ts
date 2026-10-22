import { makeGemTheme } from './templates/gems'
import { ThemeColors, ThemeMeta } from './types'

const meta: ThemeMeta = {
  name: 'Moonspell - Emerald',
  description: 'A dark theme with green accents hue inspired by dark forests and inspired by August Themes Drawbridge',
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
    highlight: 'hsl(184, 97%, 88%)',
    default: 'hsl(184, 97%, 86%)',
    muted: 'hsl(184, 97%, 86%)',
    inactive: 'hsl(184, 97%, 86%)',
  },

  border: {
    default: '#1b1f32',
    highlight: '#282C42',
  },

  primary: {
    default: 'hsl(151, 72%, 65%)',
    muted: 'hsl(151, 62%, 57%)',
    highlight: 'hsl(151, 80%, 74%)',
    foreground: 'rgb(184, 236, 254)',
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
