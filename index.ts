import { generateAllThemes } from './src/_generate'
import { updateThemes } from './src/_update'

generateAllThemes().then(updateThemes).catch(console.error)
