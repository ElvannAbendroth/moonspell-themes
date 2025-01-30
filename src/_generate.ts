import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'

const execAsync = promisify(exec)
const readdirAsync = promisify(fs.readdir)
const unlinkAsync = promisify(fs.unlink)

const themesDir = path.resolve(__dirname, '../themes')
const srcDir = path.resolve(__dirname, '../src')

async function generateTheme(scriptPath: string, outputPath: string) {
  const command = `ts-node ${scriptPath} > ${outputPath}`
  try {
    await execAsync(command)
    console.log(`🌈 Generated theme: ${outputPath}`)
  } catch (error) {
    console.error(`🔴 Error generating theme: ${outputPath}`, error)
  }
}

async function deleteOrphanedJsonFiles() {
  const themeFiles = await readdirAsync(themesDir)
  const srcFiles = await readdirAsync(srcDir)

  const tsFiles = new Set(
    srcFiles.filter(file => file.startsWith('theme-') && file.endsWith('.ts')).map(file => file.replace('.ts', '.json'))
  )

  for (const file of themeFiles) {
    if (file.endsWith('.json') && !tsFiles.has(file)) {
      const filePath = path.join(themesDir, file)
      await unlinkAsync(filePath)
      console.log(`🗑️ Deleted orphaned theme file: ${filePath}`)
    }
  }
}

export async function generateAllThemes() {
  const themeFiles = await readdirAsync(srcDir)

  for (const file of themeFiles) {
    if (file.startsWith('theme-') && file.endsWith('.ts')) {
      const scriptPath = path.join(srcDir, file)
      const outputFileName = file.replace('.ts', '.json')
      const outputPath = path.resolve(__dirname, '../themes', outputFileName)
      await generateTheme(scriptPath, outputPath)
    }
  }

  await deleteOrphanedJsonFiles()
}
