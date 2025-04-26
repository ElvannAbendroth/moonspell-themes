export interface ThemeMeta {
  name: string
  description: string
  type: 'dark' | 'light' | 'high-contrast'
}

export interface ThemeColors {
  background: {
    muted: string
    default: string
    highlight: string
    active: string
  }
  foreground: {
    highlight: string
    default: string
    muted: string
    inactive: string
  }
  border: {
    default: string
    highlight: string
  }
  primary: {
    default: string
    muted: string
    highlight: string
    foreground: string
  }
  git: {
    modified: string
    untracked: string
    added: string
    ignored: string
    error: string
    deleted: string
    conflict: string
  }
  rainbow: {
    purple: string
    blue: string
    cyan: string
    green: string
    yellow: string
    orange: string
    pink: string
    red: string
    white: string
    black: string
  }
  utility: {
    info: string
    success: string
    warn: string
    error: string
  }
  debug: string
}
