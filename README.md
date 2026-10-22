# Moonspell Themes

✨ Moonspell - A mystical collection of VS Code themes inspired by ethereal nights, northern lights, and pastels. Blending deep hues with soft highlights, Moonspell evokes the magic of moonlit skies, enchanted gems, and celestial rainbows. 🌙🔮✨

Run `npm run dev` to regenerate themes as you edit the TypeScript files.

## Publishing

`npm run publish` automatically authenticates with the `VSCE_PAT` environment variable. No separate login command is needed.

To set the token for your current Bash session without displaying it or saving it in shell history:

```bash
read -rsp "Marketplace token: " VSCE_PAT
printf '\n'
export VSCE_PAT
npm run publish
```

Subsequent publishes in the same session only need `npm run publish`. For CI, inject `VSCE_PAT` from your CI secret store before running that command. The token needs the Marketplace (Manage) scope and permission to publish for `oodri`.

A local `.env` file is not loaded automatically; the variable must be exported into the publishing process's environment. Never commit your token. Run `unset VSCE_PAT` when you no longer need it in the session.

## 💎 Gem Themes

### Amethyst

![Amethyst Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-amethyst.png?raw=true)

### Sapphire

![Amethyst Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-sapphire.png?raw=true)

### Fluorite

![Amethyst Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-fluorite.png?raw=true)

### Emerald

![Amethyst Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-emerald.png?raw=true)

### Gold

![Ruby Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-gold.png?raw=true))

### Ruby
![Ruby Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-ruby.png?raw=true)


### Pink Topaz

![Ruby Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-pink-topaz.png?raw=true))


## 🪻Light Flower Themes

### Lavender
![Lavender Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-lavender.png?raw=true)

## 🌈 Other Themes

### Northern Lights

![Northern Lights Theme Preview](https://github.com/ElvannAbendroth/moonspell-themes/blob/main/assets/theme-northern-lights.png?raw=true)