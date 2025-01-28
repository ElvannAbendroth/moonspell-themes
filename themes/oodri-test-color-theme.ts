const colors = {
  background: '#131521',
  backgroundHighlight: '#1b1f32',
  backgroundActive: '#23273c',
  foreground: '#b8cdfe',
  foregroundMuted: '#b8cdfe55',
  foregroundInactive: '#b8cdfe22',
  border: '#b8cdfe11',
  primaryDark: '#4961dacc',
  primary: '#4961da',
  primaryLight: '#8b9efd',
  accent1: '#99e9ff',
  accent2: '#ea96f2',
  info: '#99e9ff',
  untracked: '#24dbc3',
  error: '#e378ed',
  warn: '#e19981',
  debug: '#fff000',
}

const theme = {
  name: 'Oodri - Test Color Theme',
  type: 'dark',
  colors: {
    'activityBar.background': colors.background,
    'activityBar.border': colors.border,
    'activityBar.foreground': colors.foreground,
    'activityBarBadge.background': colors.primary,
    'activityBarBadge.foreground': colors.foreground,
    'badge.background': colors.primary,
    'badge.foreground': colors.foreground,
    'breadcrumb.activeSelectionForeground': colors.foregroundMuted,
    'breadcrumb.focusForeground': colors.foregroundMuted,
    'breadcrumb.foreground': colors.foregroundMuted,
    'breadcrumbPicker.background': colors.background,
    'button.background': colors.primary,
    'button.foreground': colors.foreground,
    'button.hoverBackground': colors.primary,
    'debugExceptionWidget.background': colors.background,
    'debugExceptionWidget.border': colors.border,
    'debugToolBar.background': colors.background,
    'debugToolBar.border': colors.border,
    descriptionForeground: colors.foreground,
    'diffEditor.insertedTextBackground': colors.foregroundMuted,
    'diffEditor.removedTextBackground': colors.foregroundMuted,
    'dropdown.background': colors.backgroundHighlight,
    'dropdown.border': colors.border,
    'dropdown.foreground': colors.foreground,
    'editor.background': colors.background,
    'editor.findMatchBackground': colors.background,
    'editor.findMatchBorder': colors.primary,
    'editor.findMatchHighlightBackground': colors.foregroundMuted,
    'editor.findMatchHighlightBorder': colors.primary,
    'editor.foreground': colors.foreground,
    'editor.hoverHighlightBackground': colors.backgroundHighlight + '55',
    'editor.inactiveSelectionBackground': colors.backgroundHighlight + '55',
    'editor.lineHighlightBackground': colors.backgroundHighlight,
    'editor.lineHighlightBorder': colors.backgroundHighlight,
    'editor.rangeHighlightBackground': colors.backgroundHighlight + '55',
    'editor.selectionBackground': colors.backgroundHighlight,
    'editor.selectionHighlightBackground': colors.backgroundHighlight + '55',
    'editor.wordHighlightBackground': colors.foregroundMuted,
    'editor.wordHighlightStrongBackground': colors.foregroundMuted,
    'editorBracketMatch.background': colors.background,
    'editorBracketMatch.border': colors.border,
    'editorCodeLens.foreground': colors.primary,
    'editorCursor.background': colors.background,
    'editorCursor.foreground': colors.primary,
    'editorError.foreground': colors.error,
    'editorGroup.border': colors.border,
    'editorGroup.dropBackground': colors.info,
    'editorGroup.emptyBackground': colors.background,
    'editorGroupHeader.noTabsBackground': colors.background,
    'editorGroupHeader.tabsBackground': colors.background,
    'editorGroupHeader.tabsBorder': colors.backgroundHighlight,
    'editorGutter.addedBackground': colors.primary,
    'editorGutter.background': colors.background,
    'editorGutter.deletedBackground': colors.error,
    'editorGutter.modifiedBackground': colors.primary,
    'editorHoverWidget.background': colors.backgroundHighlight,
    'editorHoverWidget.border': colors.border,
    'editorHoverWidget.foreground': colors.foreground,
    'editorIndentGuide.activeBackground1': colors.backgroundHighlight,
    'editorIndentGuide.background1': colors.backgroundHighlight,
    'editorInlayHint.background': colors.background,
    'editorInlayHint.foreground': colors.primary,
    'editorInlayHint.parameterBackground': colors.background,
    'editorInlayHint.parameterForeground': colors.primary,
    'editorInlayHint.typeBackground': colors.background,
    'editorInlayHint.typeForeground': colors.primary,
    'editorLineNumber.activeForeground': colors.foreground,
    'editorLineNumber.foreground': colors.foregroundMuted,
    'editorLink.activeForeground': colors.primary,
    'editorMarkerNavigation.background': colors.foregroundMuted,
    'editorMarkerNavigationError.background': colors.primary,
    'editorMarkerNavigationWarning.background': colors.warn,
    'editorOverviewRuler.addedForeground': colors.info,
    'editorOverviewRuler.border': colors.border,
    'editorOverviewRuler.bracketMatchForeground': colors.background,
    'editorOverviewRuler.commonContentForeground': colors.error,
    'editorOverviewRuler.currentContentForeground': colors.error,
    'editorOverviewRuler.deletedForeground': colors.error,
    'editorOverviewRuler.errorForeground': colors.error,
    'editorOverviewRuler.findMatchForeground': colors.background + '55',
    'editorOverviewRuler.incomingContentForeground': colors.error,
    'editorOverviewRuler.infoForeground': colors.background,
    'editorOverviewRuler.modifiedForeground': colors.primary,
    'editorOverviewRuler.rangeHighlightForeground': colors.background + '55',
    'editorOverviewRuler.selectionHighlightForeground': colors.background + '55',
    'editorOverviewRuler.warningForeground': colors.primary,
    'editorOverviewRuler.wordHighlightForeground': colors.background + '55',
    'editorOverviewRuler.wordHighlightStrongForeground': colors.background + '55',
    'editorRuler.foreground': colors.foreground,
    'editorSuggestWidget.background': colors.backgroundHighlight,
    'editorSuggestWidget.border': colors.border,
    'editorSuggestWidget.foreground': colors.foreground,
    'editorSuggestWidget.highlightForeground': colors.info,
    'editorSuggestWidget.selectedBackground': colors.background,
    'editorWarning.foreground': colors.primary,
    'editorWhitespace.foreground': colors.foregroundMuted,
    'editorWidget.background': colors.background,
    'editorWidget.border': colors.border,
    'editorWidget.resizeBorder': colors.info,
    errorForeground: colors.error,
    'extensionButton.prominentBackground': colors.primary,
    'extensionButton.prominentForeground': colors.foreground,
    'extensionButton.prominentHoverBackground': colors.primary,
    focusBorder: colors.background,
    foreground: colors.foregroundMuted,
    'gitDecoration.addedResourceForeground': colors.info,
    'gitDecoration.conflictingResourceForeground': colors.warn,
    'gitDecoration.deletedResourceForeground': colors.error,
    'gitDecoration.ignoredResourceForeground': colors.foregroundInactive,
    'gitDecoration.modifiedResourceForeground': colors.primary,
    'gitDecoration.untrackedResourceForeground': colors.untracked,
    'icon.foreground': colors.foregroundMuted,
    'input.background': colors.backgroundHighlight,
    'input.border': colors.border,
    'input.foreground': colors.info,
    'input.placeholderForeground': colors.foregroundMuted,
    'inputOption.activeBorder': colors.border,
    'inputValidation.errorBackground': colors.error,
    'inputValidation.errorBorder': colors.error,
    'inputValidation.infoBackground': colors.info,
    'inputValidation.infoBorder': colors.info,
    'inputValidation.warningBackground': colors.warn,
    'inputValidation.warningBorder': colors.warn,
    'list.activeSelectionBackground': colors.backgroundHighlight,
    'list.activeSelectionForeground': colors.foreground,
    'list.dropBackground': colors.info,
    'list.errorForeground': colors.error,
    'list.focusBackground': colors.backgroundHighlight,
    'list.focusForeground': colors.foreground,
    'list.highlightForeground': colors.foreground,
    'list.hoverBackground': colors.backgroundHighlight,
    'list.hoverForeground': colors.foreground,
    'list.inactiveSelectionBackground': colors.background,
    'list.inactiveSelectionForeground': colors.foreground,
    'list.invalidItemForeground': colors.error,
    'list.warningForeground': colors.warn,
    'menu.background': colors.background,
    'menu.foreground': colors.foregroundMuted,
    'menu.selectionBackground': colors.backgroundHighlight,
    'menu.selectionForeground': colors.info,
    'menu.separatorBackground': colors.primary,
    'menubar.selectionBackground': colors.backgroundHighlight,
    'merge.currentHeaderBackground': colors.foregroundMuted,
    'notificationCenterHeader.background': colors.backgroundHighlight,
    'notificationCenterHeader.foreground': colors.foregroundMuted,
    'notificationLink.foreground': colors.info,
    'notifications.background': colors.background,
    'notifications.border': colors.border,
    'notifications.foreground': colors.foregroundMuted,
    'panel.background': colors.background,
    'panel.border': colors.border,
    'panelTitle.activeBorder': colors.foreground,
    'panelTitle.activeForeground': colors.foreground,
    'panelTitle.inactiveForeground': colors.foregroundMuted,
    'peekView.border': colors.border,
    'peekViewEditor.background': colors.background,
    'peekViewEditor.matchHighlightBackground': colors.primary,
    'peekViewResult.background': colors.backgroundHighlight,
    'peekViewResult.fileForeground': colors.foreground,
    'peekViewResult.lineForeground': colors.foregroundMuted,
    'peekViewResult.matchHighlightBackground': colors.primary,
    'peekViewResult.selectionBackground': colors.backgroundHighlight,
    'peekViewResult.selectionForeground': colors.foreground,
    'peekViewTitle.background': colors.background,
    'peekViewTitleDescription.foreground': colors.foregroundMuted,
    'peekViewTitleLabel.foreground': colors.foreground,
    'pickerGroup.border': colors.border,
    'pickerGroup.foreground': colors.foregroundMuted,
    'progressBar.background': colors.primary,
    'scrollbar.shadow': colors.foreground,
    'scrollbarSlider.activeBackground': colors.backgroundActive,
    'scrollbarSlider.background': colors.backgroundHighlight,
    'scrollbarSlider.hoverBackground': colors.backgroundHighlight,
    'selection.background': colors.backgroundHighlight,
    'settings.dropdownForeground': colors.foreground,
    'settings.textInputBackground': colors.backgroundHighlight,
    'settings.textInputBorder': colors.backgroundHighlight,
    'sideBar.background': colors.background,
    'sideBar.border': colors.border,
    'sideBar.dropBackground': colors.foregroundMuted,
    'sideBar.foreground': colors.foregroundMuted,
    'sideBarSectionHeader.background': colors.background,
    'sideBarSectionHeader.foreground': colors.foreground,
    'sideBarTitle.foreground': colors.foreground,
    'statusBar.background': colors.background,
    'statusBar.border': colors.border,
    'statusBar.debuggingBackground': colors.background,
    'statusBar.debuggingBorder': colors.error,
    'statusBar.debuggingForeground': colors.foreground,
    'statusBar.foreground': colors.foregroundMuted,
    'statusBar.noFolderBackground': colors.background,
    'statusBar.noFolderBorder': colors.background,
    'statusBarItem.activeBackground': colors.backgroundHighlight,
    'statusBarItem.hoverBackground': colors.backgroundHighlight,
    'statusBarItem.prominentBackground': colors.backgroundHighlight,
    'statusBarItem.prominentHoverBackground': colors.backgroundHighlight,
    'tab.activeBackground': colors.background,
    'tab.activeBorder': colors.background,
    'tab.activeBorderTop': colors.foregroundMuted,
    'tab.activeForeground': colors.foreground,
    'tab.border': colors.border,
    'tab.hoverBackground': colors.background,
    'tab.inactiveModifiedBorder': colors.background,
    'tab.inactiveBackground': colors.background,
    'tab.inactiveForeground': colors.foregroundMuted,
    'tab.unfocusedActiveForeground': colors.foregroundMuted,
    'tab.unfocusedInactiveForeground': colors.foregroundMuted,
    'terminal.ansiBlack': colors.backgroundHighlight,
    'terminal.ansiBlue': colors.primary,
    'terminal.ansiBrightBlack': colors.primary,
    'terminal.ansiBrightBlue': colors.info,
    'terminal.ansiBrightCyan': colors.info,
    'terminal.ansiBrightGreen': colors.info,
    'terminal.ansiBrightMagenta': colors.primary,
    'terminal.ansiBrightRed': colors.primary,
    'terminal.ansiBrightWhite': colors.foreground,
    'terminal.ansiBrightYellow': colors.foreground,
    'terminal.ansiCyan': colors.info,
    'terminal.ansiGreen': colors.info,
    'terminal.ansiMagenta': colors.primary,
    'terminal.ansiRed': colors.primary,
    'terminal.ansiWhite': colors.foreground,
    'terminal.ansiYellow': colors.primary,
    'terminal.background': colors.background,
    'terminal.foreground': colors.foreground,
    'terminal.selectionBackground': colors.foregroundMuted,
    'terminalCursor.background': colors.backgroundHighlight,
    'terminalCursor.foreground': colors.primary,
    'textLink.activeForeground': colors.primary,
    'textLink.foreground': colors.primary,
    'titleBar.activeBackground': colors.background,
    'titleBar.activeForeground': colors.foregroundMuted,
    'titleBar.inactiveBackground': colors.background,
    'titleBar.inactiveForeground': colors.foregroundMuted,
    'tree.indentGuidesStroke': colors.foregroundMuted,
    'walkThrough.embeddedEditorBackground': colors.background,
    'editorBracketHighlight.foreground1': colors.foregroundMuted,
    'editorBracketHighlight.foreground2': colors.foregroundMuted,
    'editorBracketHighlight.foreground3': colors.foregroundMuted,
    'editorBracketHighlight.foreground4': colors.foregroundMuted,
    'editorBracketHighlight.foreground5': colors.foregroundMuted,
    'editorBracketHighlight.foreground6': colors.foregroundMuted,
  },
  tokenColors: [
    {
      scope: 'string',
      settings: {
        foreground: colors.info,
      },
    },

    {
      scope: ['constant.language.null', 'constant.language.undefined', 'punctuation'],
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope:
        'variable variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments',
      settings: {
        foreground: colors.primaryLight,
      },
    },

    {
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: colors.foregroundMuted,
        fontStyle: 'italic',
      },
    },

    {
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'entity.name.function, support.function',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'storage.type, storage.modifier',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'support.module, support.node',
      settings: {
        foreground: colors.primaryLight,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'support.type, constant.other.key',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'entity.name.type, entity.other.inherited-class, entity.other',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'comment, punctuation.definition.comment',
      settings: {
        foreground: colors.foregroundMuted,
        fontStyle: 'italic',
      },
    },

    {
      scope: 'entity.name, entity.name.type.class, support.type, support.class, meta.use',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'variable.object.property, meta.field.declaration entity.name.function',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'meta.definition.method entity.name.function',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'meta.function entity.name.function',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope:
        'template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'meta.embedded, source.groovy.embedded, meta.template.expression',
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: 'entity.name.tag.yaml',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'constant.language.json',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'entity.other.attribute-name.class',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.css entity.name.tag',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'support.type.property-name.css',
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: 'meta.tag, punctuation.definition.tag',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors.foregroundMuted,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: colors.info,
      },
    },

    {
      scope:
        'text.html.markdown meta.link.inline, meta.link.reference text.html.markdown beginning.punctuation.definition.list',
      settings: {
        foreground: colors.accent1,
      },
    },
    {
      scope: '',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        foreground: colors.info,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: colors.info,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.underline.link.image',
      settings: {
        foreground: colors.accent2,
      },
    },
    {
      scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
      settings: {
        foreground: colors.primary,
        fontStyle: 'italic bold',
      },
    },

    {
      scope: 'punctuation.definition.comment.html',
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: 'punctuation.definition.inserted',
      settings: {
        foreground: colors.info,
      },
    },

    {
      scope: 'markup.inline.raw.string.markdown markup.heading',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'keyword.other.definition.ini',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'entity.name.section.group-title.ini',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'source.cs meta.class.identifier storage.type',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.cs meta.method.identifier entity.name.function',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.cs meta.method-call meta.method, source.cs entity.name.function',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.cs storage.type',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.cs meta.method.return-type',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.cs meta.preprocessor',
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: 'source.cs entity.name.type.namespace',
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: 'meta.jsx.children, SXNested',
      settings: {
        foreground: colors.foreground,
      },
    },

    {
      scope: 'source.cpp meta.block variable.other',
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: 'source.python meta.member.access.python',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.python meta.function-call.python, meta.function-call.arguments',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'meta.block',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'entity.name.function.call',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'source.php support.other.namespace, source.php meta.use support.class',
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      scope: ['keyword.control'],
      settings: {
        foreground: colors.foregroundMuted,
        fontStyle: 'italic',
      },
    },
    {
      scope: ['keyword.operator.arithmetic'],
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: ['markup.quote'],
      settings: {
        foreground: colors.primaryLight,
        fontStyle: 'italic',
      },
    },
    {
      scope: ['markup.fenced_code.block'],
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: ['punctuation.definition.quote'],
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: ['meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primaryLight,
      },
    },

    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primaryDark,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.accent2,
      },
    },
    {
      scope: 'keyword.other',
      settings: {
        foreground: colors.foregroundMuted,
      },
    },
    {
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: colors.primaryLight,
        fontStyle: 'bold',
      },
    },
  ],
}

console.log(JSON.stringify(theme, null, 2))
