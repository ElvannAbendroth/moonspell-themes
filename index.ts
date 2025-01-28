import { generateAllThemes } from './src/theme-generator'
import { updateThemes } from './src/update-themes'

generateAllThemes().catch(console.error)

updateThemes()
