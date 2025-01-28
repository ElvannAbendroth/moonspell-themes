import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

const execAsync = promisify(exec)

async function generateTheme(scriptPath: string, outputPath: string) {
  const command = `ts-node ${scriptPath} > ${outputPath}`
  try {
    await execAsync(command)
    console.log(`Generated theme: ${outputPath}`)
  } catch (error) {
    console.error(`Error generating theme: ${outputPath}`, error)
  }
}

async function main() {
  const themes = [
    { script: 'src/oodri-test-color-theme.ts', output: 'themes/oodri-test-color-theme.json' },
    { script: 'src/oodri-purple-dream-color-theme.ts', output: 'themes/oodri-purple-dream-color-theme.json' },
  ]

  for (const theme of themes) {
    await generateTheme(path.resolve(__dirname, theme.script), path.resolve(__dirname, theme.output))
  }
}

main().catch(console.error)
