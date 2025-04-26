import { makeCelestialTheme } from './templates/celestial'
import { ThemeColors, ThemeMeta } from './types'

const meta: ThemeMeta = {
  name: 'Moonspell - Northern Lights',
  description:
    'A dark theme with bright pastels inspired by the Northern Lights and based on the Ariake Dark theme from August Themes',
  type: 'dark',
}

const colors: ThemeColors = {
  background: {
    muted: '#101216',
    default: '#16191e',
    highlight: '#191c22',
    active: '#242930',
  },
  foreground: {
    highlight: '#d8dee9',
    default: '#d8dee9',
    muted: '#d8dee999',
    inactive: '#d8dee977',
  },
  border: {
    default: '#272c36',
    highlight: '#272c36',
  },
  primary: {
    default: '#7966E6',
    muted: '#634FD5',
    highlight: '#9889F2',
    foreground: '#b8cdfe',
  },
  git: {
    modified: '#ebcb8b',
    untracked: '#8bf18c',
    added: '#9aefea',
    ignored: '#d8dee977',
    error: '#dda2f6',
    deleted: '#dda2f6',
    conflict: '#dda2f6',
  },
  rainbow: {
    purple: '#B396F9',
    blue: '#9aefea',
    cyan: '#9aefea',
    green: '#A571F4',
    yellow: '#B396F9',
    orange: '#9aefea',
    pink: '#dda2f6',
    red: '#dda2f6',
    white: '#E1E1E1',
    black: '#B8B8B8',
  },
  utility: {
    info: '#9aefea',
    success: '#8bf18c',
    warn: '#EDB463',
    error: '#E365EF',
  },
  debug: '#fcba03',
}

const theme = makeCelestialTheme(meta, colors)

console.log(JSON.stringify(theme, null, 2))
