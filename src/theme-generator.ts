import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'

const execAsync = promisify(exec)
const readdirAsync = promisify(fs.readdir)
const unlinkAsync = promisify(fs.unlink)

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
  const srcDir = path.resolve(__dirname, '../themes')
  const themeFiles = await readdirAsync(srcDir)
  const tsFiles = new Set(
    themeFiles.filter(file => file.endsWith('-color-theme.ts')).map(file => file.replace('.ts', '.json'))
  )

  for (const file of themeFiles) {
    if (file.endsWith('.json') && !tsFiles.has(file)) {
      const filePath = path.join(srcDir, file)
      try {
        await unlinkAsync(filePath)
        console.log(`✅ Deleted orphaned JSON file: ${filePath}`)
      } catch (error) {
        console.error(`🔴 Error deleting file: ${filePath}`, error)
      }
    }
  }
}

export async function generateAllThemes() {
  const srcDir = path.resolve(__dirname, '../themes')
  const themeFiles = await readdirAsync(srcDir)

  for (const file of themeFiles) {
    if (file.endsWith('-color-theme.ts')) {
      const scriptPath = path.join(srcDir, file)
      const outputFileName = file.replace('.ts', '.json')
      const outputPath = path.resolve(__dirname, '../themes', outputFileName)
      await generateTheme(scriptPath, outputPath)
    }
  }

  await deleteOrphanedJsonFiles()
}
