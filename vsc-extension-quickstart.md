# Welcome to your VS Code Extension

## What's in the folder

* This folder contains all of the files necessary for your color theme extension.
* `package.json` - this is the manifest file that defines the location of the theme file and specifies the base theme of the theme.
* `themes/****.json` - the color theme definitions files.

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Open the color theme picker with  the `File > Preferences > Theme > Color Theme` menu item, or use the `Preferences: Color Theme command (Ctrl+K Ctrl+T)` and pick your theme
* Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).

## Make changes

* Changes to the theme file are automatically applied to the Extension Development Host window.

## Adopt your theme to Visual Studio Code

* The token colorization is done based on standard TextMate themes. Colors are matched against one or more scopes.

To learn more about scopes and how they're used, check out the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

## Install your extension

* To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.


## Docs


### Authoring Colors

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