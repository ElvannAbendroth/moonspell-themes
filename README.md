# Moonspell Themes

✨ Moonspell – A mystical collection of VS Code themes inspired by ethereal nights, northern lights, and pastels. Blending deep hues with soft highlights, Moonspell evokes the magic of moonlit skies, enchanted gems, and celestial rainbows. 🌙🔮✨

## Authoring Colors

Theme palettes in `src/theme-*.ts` accept hex, HSL, and RGB colors:

```ts
primary: {
	default: 'hsl(151, 72%, 65%)',
	muted: 'hsl(151 62% 57%)',
	highlight: '#8fe8b9',
	foreground: 'rgb(184, 236, 254)',
},
```

All templates convert HSL and RGB palette values to hex before applying
transparency and generating JSON. Existing hex values are preserved, and the
source palette is not modified. Use opaque colors for palette entries where
templates append their own opacity suffixes.

Run `npm run dev` to regenerate themes as you edit the TypeScript files.

## 💎 Dark Cave Themes

### Amethyst

![Amethyst Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-amethyst.png?raw=true)

### Ruby
![Ruby Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-ruby.png?raw=true)

### Gold

![Ruby Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-gold.png?raw=true))

## 🪻Light Flower Themes

### Lavender
![Lavender Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-lavender.png?raw=true)

## 🌈 Other Themes

### Northern Lights

![Northern Lights Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-northern-lights.png?raw=true)