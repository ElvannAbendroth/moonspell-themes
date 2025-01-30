import { generateAllThemes } from './src/_generate'
import { updateThemes } from './src/_update'

generateAllThemes().catch(console.error)

updateThemes()
