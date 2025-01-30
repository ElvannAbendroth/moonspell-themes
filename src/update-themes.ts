import path from 'path'
import fs from 'fs'

export function updateThemes() {
  const themesDir = path.resolve(__dirname, '../themes')
  const packageJsonPath = path.resolve(__dirname, '../package.json')

  fs.readdir(themesDir, (err, files) => {
    if (err) {
      console.error('Error reading themes directory:', err)
      return
    }

    const themes: { label: string; uiTheme: string; path: string }[] = []

    files
      .filter(file => file.endsWith('-color-theme.json'))
      .forEach(file => {
        const themePath = path.join(themesDir, file)
        let themeData
        try {
          themeData = JSON.parse(fs.readFileSync(themePath, 'utf8'))
        } catch (err) {
          console.error(`Error parsing JSON from file ${file}:`, err)
          return
        }
        themes.push({
          label: themeData.name,
          uiTheme: themeData.type === 'dark' ? 'vs-dark' : 'vs',
          path: `./themes/${file}`,
        })
      })

    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading package.json:', err)
        return
      }

      const packageJson = JSON.parse(data)
      packageJson.contributes.themes = themes

      fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', err => {
        if (err) {
          console.error('Error writing package.json:', err)
          return
        }

        console.log('package.json updated successfully with themes.')
      })
    })
  })
}
