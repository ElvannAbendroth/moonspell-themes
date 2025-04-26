export function makeCelestialTheme(meta, colors) {
  return {
    name: meta.name,
    type: meta.type,
    description: meta.description,
    colors: {
      'titleBar.border': colors.border.default,
      'titleBar.activeBackground': colors.background.default,
      /*Git*/
      'gitDecoration.addedResourceForeground': colors.git.added,
      'gitDecoration.conflictingResourceForeground': colors.git.conflict,
      'gitDecoration.deletedResourceForeground': colors.git.deleted,
      'gitDecoration.ignoredResourceForeground': colors.git.ignored,
      'gitDecoration.modifiedResourceForeground': colors.git.modified,
      'gitDecoration.untrackedResourceForeground': colors.git.untracked,
      /*Bracket Customization*/
      'editorBracketHighlight.foreground1': '#616f6e',
      'editorBracketHighlight.foreground2': '#616f6e',
      'editorBracketHighlight.foreground3': '#616f6e',
      'editorBracketHighlight.foreground4': '#616f6e',
      'editorBracketHighlight.foreground5': '#616f6e',
      'editorBracketHighlight.foreground6': '#616f6e',
      // Activity Bar
      'activityBar.border': colors.border.default,
      'activityBar.background': colors.background.default,
      'activityBar.foreground': '#7b88a1',
      'activityBarBadge.background': '#dda2f6',
      'activityBarBadge.foreground': '#1d2128',
      // Badge
      'badge.background': '#dda2f6',
      'badge.foreground': '#1d2128',
      // Breadcrumbs
      'breadcrumb.activeSelectionForeground': colors.foreground.default,
      'breadcrumb.background': colors.background.highlight,
      'breadcrumb.foreground': '#7b88a199',
      'breadcrumbPicker.background': colors.background.highlight,
      // Button
      'button.background': '#434c5e',
      'button.foreground': colors.foreground.default,
      'button.hoverBackground': '#4c566a',
      // Others
      'debugExceptionWidget.background': '#4c566a',
      'debugExceptionWidget.border': colors.background.highlight,
      'debugToolBar.background': '#20242c',
      'diffEditor.insertedTextBackground': '#a3be8c22',
      'diffEditor.removedTextBackground': '#bf616a22',
      // Dropdown
      'dropdown.background': colors.background.highlight,
      'dropdown.border': '#272c36',
      'dropdown.foreground': colors.foreground.default,
      /* Editor Selection Color */
      'editor.background': colors.background.default,
      'editor.selectionBackground': '#7a22ff50',
      'editor.inactiveSelectionBackground': '#7a22ff23',
      'editor.selectionHighlightBackground': '#5e88943e',
      'editor.wordHighlightBackground': '#5e889424',
      'editor.wordHighlightStrongBackground': '#5e889424',
      'editor.findMatchHighlightBackground': '#dda2f633',
      'editor.findRangeHighlightBackground': '#dda2f633',
      'editor.foreground': '#7b88a1',
      'editor.hoverHighlightBackground': '#20242ccf',
      'editor.lineHighlightBackground': '#434c5e33',
      'editor.lineHighlightBorder': '#434c5e33',
      'editor.rangeHighlightBackground': '#434c5e52',
      'editor.snippetFinalTabstopHighlightBorder': '#7b88a1',
      'editor.snippetTabstopHighlightBackground': '#7b88a155',
      'editorBracketMatch.background': '#191c2200',
      'editorBracketMatch.border': '#dda2f655',
      'editorCodeLens.foreground': '#4c566a',
      'editorCursor.foreground': '#dda2f6',
      'editorError.border': '#bf616a00',
      'editorError.foreground': colors.utility.error,
      'editorGroup.border': '#272c3600',
      'editorGroup.dropBackground': '#272c3699',
      'editorGroup.emptyBackground': colors.background.highlight,
      'editorGroupHeader.noTabsBackground': colors.background.highlight,
      'editorGroupHeader.tabsBackground': colors.background.highlight,
      'editorGroupHeader.tabsBorder': '#272c3600',
      'editorGutter.addedBackground': '#9aefea',
      'editorGutter.background': colors.background.highlight,
      'editorGutter.deletedBackground': colors.utility.error,
      'editorGutter.modifiedBackground': '#ebcb8b',
      'editorHoverWidget.background': '#20242c',
      'editorHoverWidget.border': '#272c36',
      'editorIndentGuide.activeBackground1': '#4c566a',
      'editorIndentGuide.background1': '#434c5eb3',
      'editorInlayHint.background': '#00000000',
      'editorInlayHint.foreground': '#7E7EDD77',
      'editorInlayHint.parameterBackground': '#00000000',
      'editorInlayHint.parameterForeground': '#7E7EDD77',
      'editorInlayHint.typeBackground': '#00000000',
      'editorInlayHint.typeForeground': '#7E7EDD77',
      'editorLineNumber.activeForeground': '#687692',
      'editorLineNumber.foreground': '#4c566a',
      'editorLink.activeForeground': '#dda2f6',
      'editorMarkerNavigation.background': '#5e81acc0',
      'editorMarkerNavigationError.background': '#bf616ac0',
      'editorMarkerNavigationWarning.background': '#ebcb8bc0',
      'editorOverviewRuler.addedForeground': '#A3BE8C99',
      'editorOverviewRuler.border': '#00000000',
      'editorOverviewRuler.bracketMatchForeground': '#00000000',
      'editorOverviewRuler.commonContentForeground': colors.utility.error,
      'editorOverviewRuler.currentContentForeground': colors.utility.error,
      'editorOverviewRuler.deletedForeground': '#bf616a99',
      'editorOverviewRuler.errorForeground': colors.utility.error,
      'editorOverviewRuler.findMatchForeground': '#00000000',
      'editorOverviewRuler.incomingContentForeground': colors.utility.error,
      'editorOverviewRuler.infoForeground': '#00000000',
      'editorOverviewRuler.modifiedForeground': '#ebcb8b99',
      'editorOverviewRuler.rangeHighlightForeground': '#00000000',
      'editorOverviewRuler.selectionHighlightForeground': '#00000000',
      'editorOverviewRuler.warningForeground': '#ebcb8b',
      'editorOverviewRuler.wordHighlightForeground': '#00000000',
      'editorOverviewRuler.wordHighlightStrongForeground': '#00000000',
      'editorRuler.foreground': '#434c5e',
      'editorSuggestWidget.background': colors.background.highlight,
      'editorSuggestWidget.border': '#272c36',
      'editorSuggestWidget.foreground': colors.foreground.default,
      'editorSuggestWidget.highlightForeground': '#dda2f6',
      'editorSuggestWidget.selectedBackground': '#434c5e',
      'editorWarning.border': '#ebcb8b00',
      'editorWarning.foreground': '#ebcb8b',
      'editorWhitespace.foreground': '#4c566ab3',
      'editorWidget.background': colors.background.highlight,
      'editorWidget.resizeBorder': '#dda2f6',
      // Others
      errorForeground: colors.utility.error,
      'extensionButton.prominentBackground': '#434c5e',
      'extensionButton.prominentForeground': colors.foreground.default,
      'extensionButton.prominentHoverBackground': '#4c566a',
      focusBorder: '#00000000',
      foreground: '#7b88a1',
      // Input
      'input.background': '#272c3655',
      'input.border': '#272c36',
      'input.foreground': colors.foreground.default,
      'input.placeholderForeground': '#d8dee999',
      'inputOption.activeBorder': '#dda2f6',
      'inputValidation.errorBackground': colors.utility.error,
      'inputValidation.errorBorder': colors.utility.error,
      'inputValidation.infoBackground': '#81a1c1',
      'inputValidation.infoBorder': '#81a1c1',
      'inputValidation.warningBackground': colors.utility.warn,
      'inputValidation.warningBorder': colors.utility.warn,
      // List
      'list.activeSelectionBackground': '#20242c',
      'list.activeSelectionForeground': '#eceff4',
      'list.dropBackground': '#dda2f699',
      'list.errorForeground': colors.utility.error,
      'list.focusBackground': '#434c5e',
      'list.focusForeground': colors.foreground.default,
      'list.highlightForeground': '#dda2f6',
      'list.hoverBackground': '#272c3699',
      'list.hoverForeground': '#eceff4',
      'list.inactiveSelectionBackground': colors.background.highlight,
      'list.inactiveSelectionForeground': colors.foreground.default,
      'list.warningForeground': '#ebcb8b',
      'menu.background': colors.background.highlight,
      'menu.foreground': '#7b88a1',
      'menu.separatorBackground': '#7b88a1',
      'menubar.selectionBackground': '#7b88a133',
      'merge.border': '#272c3600',
      'merge.currentContentBackground': '#81a1c14d',
      'merge.currentHeaderBackground': '#81a1c166',
      'merge.incomingContentBackground': '#8fbcbb4d',
      'merge.incomingHeaderBackground': '#8fbcbb66',
      'notificationLink.foreground': '#dda2f6',
      'notifications.background': colors.background.highlight,
      'notifications.foreground': colors.foreground.default,
      // Panel
      'panel.background': colors.background.highlight,
      'panel.border': colors.background.highlight,
      'panelTitle.activeBorder': '#dda2f600',
      'panelTitle.activeForeground': '#dda2f6',
      'panelTitle.inactiveForeground': '#7b88a1',
      // PeekView
      'peekView.border': '#4c566a',
      'peekViewEditor.background': colors.background.highlight,
      'peekViewEditor.matchHighlightBackground': '#dda2f6cc',
      'peekViewEditorGutter.background': colors.background.highlight,
      'peekViewResult.background': colors.background.highlight,
      'peekViewResult.fileForeground': '#dda2f6',
      'peekViewResult.lineForeground': '#d8dee966',
      'peekViewResult.matchHighlightBackground': '#dda2f6cc',
      'peekViewResult.selectionBackground': '#434c5e',
      'peekViewResult.selectionForeground': colors.foreground.default,
      'peekViewTitle.background': '#272c36',
      'peekViewTitleDescription.foreground': colors.foreground.default,
      'peekViewTitleLabel.foreground': '#dda2f6',
      'pickerGroup.border': '#272c3600',
      'pickerGroup.foreground': colors.foreground.default,
      'progressBar.background': '#dda2f6',
      'scrollbar.shadow': '#00000000',
      'scrollbarSlider.activeBackground': '#434c5e55',
      'scrollbarSlider.background': '#434c5e55',
      'scrollbarSlider.hoverBackground': '#434c5e55',
      'selection.background': '#dda2f633',
      // Sidebar
      'sideBar.border': colors.border.default,
      'sideBar.background': colors.background.highlight,
      'sideBar.foreground': '#7b88a1',
      'sideBarSectionHeader.background': colors.background.highlight,
      'sideBarSectionHeader.foreground': '#7b88a1',
      'sideBarTitle.foreground': '#7b88a1',
      // Status Bar
      'statusBar.background': colors.background.highlight,
      'statusBar.border': '#272c3600',

      'statusBar.foreground': '#7b88a1',
      'statusBar.noFolderBackground': colors.background.highlight,
      'statusBar.noFolderForeground': colors.foreground.default,
      'statusBarItem.activeBackground': colors.background.active,
      'statusBarItem.hoverBackground': colors.primary.default + 55,
      'statusBarItem.prominentBackground': colors.background.default,
      'statusBarItem.prominentHoverBackground': colors.background.highlight,
      'statusBar.debuggingBackground': colors.primary.default,
      'statusBar.debuggingForeground': colors.primary.foreground,
      'statusBar.debuggingHoverForeground': colors.primary.foreground,
      'statusBar.debuggingHoverBackground': colors.primary.highlight,
      // Tab
      'tab.activeBackground': colors.background.highlight,
      'tab.activeBorderTop': '#dda2f6',
      'tab.activeForeground': colors.foreground.default,
      'tab.border': '#272c3600',
      'tab.hoverBackground': '#dda2f600',
      'tab.inactiveBackground': colors.background.highlight,
      'tab.inactiveForeground': '#7b88a1',
      'tab.unfocusedActiveBorder': '#dda2f600',
      'tab.unfocusedActiveForeground': '#d8dee999',
      'tab.unfocusedHoverBackground': '#272c36b3',
      'tab.unfocusedHoverBorder': '#dda2f600',
      'tab.unfocusedInactiveForeground': '#d8dee966',
      // Terminal
      'terminal.ansiBlack': colors.rainbow.black,
      'terminal.ansiBlue': colors.rainbow.blue,
      'terminal.ansiBrightBlack': colors.rainbow.white,
      'terminal.ansiBrightBlue': colors.rainbow.blue,
      'terminal.ansiBrightCyan': colors.rainbow.cyan,
      'terminal.ansiBrightGreen': colors.rainbow.green,
      'terminal.ansiBrightMagenta': colors.rainbow.pink,
      'terminal.ansiBrightRed': colors.rainbow.red,
      'terminal.ansiBrightWhite': colors.rainbow.white,
      'terminal.ansiBrightYellow': colors.rainbow.yellow,
      'terminal.ansiCyan': colors.rainbow.cyan,
      'terminal.ansiGreen': colors.rainbow.green,
      'terminal.ansiMagenta': colors.rainbow.pink,
      'terminal.ansiRed': colors.rainbow.red,
      'terminal.ansiWhite': colors.rainbow.white,
      'terminal.ansiYellow': colors.rainbow.yellow,
      'terminal.background': colors.background.default,
      'terminal.foreground': colors.foreground.default,
      'terminal.selectionBackground': `${colors.primary.default}33`,
      'terminalCursor.background': colors.background.highlight,
      'terminalCursor.foreground': colors.primary.default,
      'terminal.border': colors.border.default,
      'textLink.activeForeground': '#dda2f6',
      'textLink.foreground': '#8FBCBB',
      'textPreformat.foreground': '#8FBCBB',
      'textSeparator.foreground': '#8FBCBB',
      'titleBar.activeForeground': '#7b88a1',
      'titleBar.inactiveBackground': colors.background.highlight,
      'titleBar.inactiveForeground': '#7b88a199',
      'tree.indentGuidesStroke': '#7b88a155',
      'walkThrough.embeddedEditorBackground': colors.background.highlight,
      'widget.shadow': '#00000066',
    },
    tokenColors: [
      {
        scope: [
          'punctuation.quasi.element',
          'punctuation.definition.string.begin',
          'punctuation.definition.string.end',
          'punctuation.definition.quasi.begin',
          'punctuation.definition.quasi.end',
          'keyword.operator.assignment',
          'punctuation.definition.tag.begin',
          'punctuation.definition.tag.end',
          'storage.type.function',
          'punctuation.accessor',
        ],
        settings: {
          foreground: '#5a6b77',
        },
      },
      {
        scope: ['keyword.control'],
        settings: {
          foreground: '#63747f',
          fontStyle: 'bold',
        },
      },
      {
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: '#687d88',
          fontStyle: '',
        },
      },
      {
        scope: ['meta.jsx.children'],
        settings: {
          foreground: '#ffffff',
          fontStyle: 'italic',
        },
      },
      {
        scope: ['variable.other.property'],
        settings: {
          foreground: '#cadaea',
        },
      },
      {
        scope: ['support.class.component'],
        settings: {
          foreground: '#A571F4',
          fontStyle: '',
        },
      },
      {
        scope: 'comment',
        settings: {
          foreground: '#555C77',
        },
      },
      {
        scope: 'entity.name.type',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'entity.other.inherited-class',
        settings: {
          foreground: '#9AEFEA',
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'keyword.control',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'keyword.other.special-method',
        settings: {
          foreground: '#F5FAFF',
        },
      },
      {
        scope: 'keyword.other.unit',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'storage',
        settings: {
          foreground: '#7B88A1',
        },
      },
      {
        scope: 'storage.type.annotation',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'storage.type.primitive',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'storage.modifier.package',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'storage.modifier.import',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'constant',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'constant.variable',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'constant.numeric',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'constant.other.color',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'constant.other.symbol',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'variable',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'variable.interpolation',
        settings: {
          foreground: '#4D8ACB',
        },
      },
      {
        scope: 'variable.parameter',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'string',
        settings: {
          foreground: '#9AEFEA',
        },
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'string.regexp source.ruby.embedded',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'fenced_code.block.language.markdown',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'punctuation.definition.comment',
        settings: {
          foreground: '#555C77',
        },
      },
      {
        scope: 'punctuation.definition',
        settings: {
          foreground: '#7e7edd',
        },
      },
      {
        scope:
          'punctuation.definition.method-parameters\npunctuation.definition.function-parameters\npunctuation.definition.parameters\npunctuation.definition.separator\npunctuation.definition.seperator\npunctuation.definition.array',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'punctuation.definition.heading, punctuation.definition.identity',
        settings: {
          foreground: '#F5FAFF',
        },
      },
      {
        scope: 'punctuation.definition.bold',
        settings: {
          foreground: '#A571F4',
          fontStyle: ' bold',
        },
      },
      {
        scope: 'punctuation.definition.italic',
        settings: {
          foreground: '#7E7EDD',
          fontStyle: ' italic',
        },
      },
      {
        scope: 'punctuation.section.embedded',
        settings: {
          foreground: '#4D8ACB',
        },
      },
      {
        scope: 'punctuation.section.method, punctuation.section.class, punctuation.section.inner-class',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'support.class',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'support.type',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'support.function',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'support.function.any-method',
        settings: {
          foreground: '#F5FAFF',
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'entity.name.class, entity.name.type.class',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'entity.name.section',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: '#7e7edd',
        },
      },
      {
        scope: 'meta.class.body',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'meta.method-call, meta.method',
        settings: {
          foreground: '#7B88A1',
        },
      },
      {
        scope: 'meta.definition.variable',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'meta.link',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'meta.require',
        settings: {
          foreground: '#F5FAFF',
        },
      },
      {
        scope: 'meta.selector',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'meta.tag',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'underline',
        settings: {
          fontStyle: ' underline',
        },
      },
      {
        scope: 'none',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          foreground: '#523D14',
        },
      },
      {
        scope: ' invalid.illegal',
        settings: {
          foreground: '#FFFFFF',
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          foreground: '#DDA2F6',
          fontStyle: ' bold',
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          foreground: '#7E7EDD',
          fontStyle: ' italic',
        },
      },
      {
        scope: 'markup.heading',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'markup.heading punctuation.definition.heading',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'markup.link',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: '#9AEFEA',
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: '#9AEFEA',
        },
      },
      {
        scope: 'source.cs keyword.operator',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'source.css property-name, source.css property-value',
        settings: {
          foreground: '#7D839B',
        },
      },
      {
        scope: 'source.css property-name.support, source.css property-value.support',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'source.gfm link entity',
        settings: {
          foreground: '#F5FAFF',
        },
      },
      {
        scope: 'source.go storage.type.string',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'source.ini keyword.other.definition.ini',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'source.java storage.modifier.import',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'source.java storage.type',
        settings: {
          foreground: '#A571F4',
        },
      },
      {
        scope: 'source.java keyword.operator.instanceof',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'source.java-properties meta.key-pair',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'source.js keyword.operator',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope:
          'source.js keyword.operator.js, source.js keyword.operator.delete, source.js keyword.operator.in, source.js keyword.operator.of, source.js keyword.operator.instanceof, source.js keyword.operator.new, source.js keyword.operator.typeof, source.js keyword.operator.void',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'source.ruby constant.other.symbol punctuation',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'source.python keyword.operator.logical.python',
        settings: {
          foreground: '#7E7EDD',
        },
      },
      {
        scope: 'source.python variable.parameter',
        settings: {
          foreground: '#DDA2F6',
        },
      },
      {
        scope: 'source.java-properties meta.key-pair punctuation',
        settings: {
          foreground: '#B9BED5',
        },
      },
      {
        scope: 'source.json meta.structure.dictionary.json string.quoted.json',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope: 'source.json meta.structure.dictionary.json string.quoted.json punctuation.string',
        settings: {
          foreground: '#85B1E0',
        },
      },
      {
        scope:
          'source.json meta.structure.dictionary.json value.json string.quoted.json, source.json meta.structure.array.json value.json string.quoted.json, source.json meta.structure.dictionary.json value.json string.quoted.json punctuation, source.json meta.structure.array.json value.json string.quoted.json punctuation',
        settings: {
          foreground: '#9AEFEA',
        },
      },
      {
        scope:
          'source.json meta.structure.dictionary.json constant.language.json, source.json meta.structure.array.json constant.language.json',
        settings: {
          foreground: '#93DDFB',
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: '#6796E6',
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: '#CD9731',
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: '#F44747',
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: '#B267E6',
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown ',
        settings: {
          foreground: colors.primary.highlight,
        },
      },
    ],
  }
}
