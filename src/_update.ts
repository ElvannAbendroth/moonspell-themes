import path from 'path'
import { promises as fs } from 'fs'

export async function updateThemes() {
  const themesDir = path.resolve(__dirname, '../themes')
  const packageJsonPath = path.resolve(__dirname, '../package.json')

  const files = await fs.readdir(themesDir)
  const themes: { label: string; uiTheme: string; path: string }[] = []

  for (const file of files.filter(file => file.endsWith('.json')).sort()) {
    const themePath = path.join(themesDir, file)
    let themeData
    try {
      themeData = JSON.parse(await fs.readFile(themePath, 'utf8'))
    } catch (error) {
      console.error(`Error loading theme file ${file}; package.json was not updated.`, error)
      throw error
    }
    themes.push({
      label: themeData.name,
      uiTheme: themeData.type === 'dark' ? 'vs-dark' : 'vs',
      path: `./themes/${file}`,
    })
  }

  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))
  packageJson.contributes.themes = themes

  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8')
  console.log('package.json updated successfully with themes.')
}
