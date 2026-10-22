import { colord } from 'colord'
import { ThemeColors } from './types'

function toHex(value: string): string {
  if (value.startsWith('#')) return value

  const color = colord(value)
  if (!color.isValid()) {
    throw new Error(`Invalid theme color: ${value}`)
  }

  return color.toHex()
}

function normalizeColorGroup<Group extends Record<string, string>>(group: Group): Group {
  const normalized = { ...group }

  for (const key in group) {
    normalized[key] = toHex(group[key]) as Group[typeof key]
  }

  return normalized
}

export function normalizeThemeColors(colors: ThemeColors): ThemeColors {
  return {
    background: normalizeColorGroup(colors.background),
    foreground: normalizeColorGroup(colors.foreground),
    border: normalizeColorGroup(colors.border),
    primary: normalizeColorGroup(colors.primary),
    git: normalizeColorGroup(colors.git),
    rainbow: normalizeColorGroup(colors.rainbow),
    utility: normalizeColorGroup(colors.utility),
    debug: toHex(colors.debug),
  }
}