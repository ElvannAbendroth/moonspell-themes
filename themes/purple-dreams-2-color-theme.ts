const colors = {
  background: {
    muted: '#0F111A',
    default: '#131520',
    highlight: '#1b1f32',
    active: '#252a41',
  },
  foreground: {
    highlight: '#c3cdfe',
    default: '#b8cdfe',
    muted: '#b8cdfe99',
    inactive: '#b8cdfe77',
  },
  border: {
    default: '#1b1f32',
    highlight: '#1b1f32',
  },
  primary: {
    default: '#4961da',
    muted: '#516aec',
    highlight: '#8b9efd',
    foreground: '#b8cdfe',
  },
  git: {
    untracked: '#24dbc3',
    added: '#67c9e4',
    ignored: '#b8cdfe77',
    modified: '#627af4',
    error: '#ea96f2',
    deleted: '#ea96f2',
    conflict: '#e19981',
  },
  warn: '#627af4',
  info: '#67c9e4',
  untracked: '#24dbc3',
  color2: '#86e0f9',
  accent2: '#ea96f2',
  error: '#ec407a',
  debug: '#fcba03',
}

const theme = {
  name: 'Oodri - Drawbridge',
  type: 'dark',
  colors: {
    'activityBar.background': colors.background.default,
    'activityBar.border': colors.border.default,
    'activityBar.foreground': colors.foreground.default,
    'activityBarBadge.background': colors.primary.default,
    'activityBarBadge.foreground': colors.foreground.default,
    'badge.background': colors.primary.default,
    'badge.foreground': colors.foreground.default,
    'breadcrumb.activeSelectionForeground': colors.foreground.muted,
    'breadcrumb.focusForeground': colors.foreground.muted,
    'breadcrumb.foreground': colors.foreground.inactive,
    'breadcrumbPicker.background': colors.background.default,
    'button.background': colors.primary.default,
    'button.foreground': colors.foreground.default,
    'button.hoverBackground': colors.primary.muted,
    'debugExceptionWidget.background': colors.background.default,
    'debugExceptionWidget.border': colors.background.default,
    'debugToolBar.background': colors.background.default,
    'debugToolBar.border': colors.border.highlight,
    descriptionForeground: colors.foreground.default,
    'diffEditor.insertedTextBackground': `${colors.info}10`,
    'diffEditor.removedTextBackground': `${colors.error}10`,
    'dropdown.background': colors.background.highlight,
    'dropdown.border': colors.background.default,
    'dropdown.foreground': colors.info,
    'editor.background': colors.background.default,
    'editor.findMatchBackground': colors.background.default,
    'editor.findMatchBorder': colors.primary.default,
    'editor.findMatchHighlightBackground': `${colors.primary.default}33`,
    'editor.findMatchHighlightBorder': `${colors.primary.default}99`,
    'editor.foreground': colors.foreground.default,
    'editor.hoverHighlightBackground': colors.background.highlight + '99',
    'editor.inactiveSelectionBackground': `${colors.background.active}99`,
    'editor.lineHighlightBackground': `${colors.background.active}99`,
    'editor.lineHighlightBorder': colors.background.highlight,
    'editor.rangeHighlightBackground': colors.background.active + '99',
    'editor.selectionBackground': colors.background.highlight,
    'editor.selectionHighlightBackground': colors.background.active + '99',
    'editor.wordHighlightBackground': colors.background.active + '99',
    'editor.wordHighlightStrongBackground': colors.background.active + '99',
    'editorBracketMatch.background': colors.background.default,
    'editorBracketMatch.border': colors.border.default,
    'editorCodeLens.foreground': `${colors.primary.default}77`,
    'editorCursor.background': colors.background.default,
    'editorCursor.foreground': colors.primary.highlight,
    'editorError.foreground': colors.error,
    'editorGroup.border': colors.background.default,
    'editorGroup.dropBackground': `${colors.info}40`,
    'editorGroup.emptyBackground': colors.background.default,
    'editorGroupHeader.noTabsBackground': colors.background.default,
    'editorGroupHeader.tabsBackground': colors.background.default,
    'editorGroupHeader.tabsBorder': colors.background.default,
    'editorGutter.addedBackground': colors.info,
    'editorGutter.background': `${colors.background.default}64`,
    'editorGutter.deletedBackground': colors.error,
    'editorGutter.modifiedBackground': colors.warn,
    'editorHoverWidget.background': colors.background.highlight,
    'editorHoverWidget.border': colors.primary.default,
    'editorHoverWidget.foreground': colors.foreground.default,
    'editorIndentGuide.activeBackground1': colors.foreground.muted,
    'editorIndentGuide.background1': colors.background.active,
    'editorInlayHint.background': colors.background.highlight + '00',
    'editorInlayHint.foreground': `${colors.primary.default}99`,
    'editorInlayHint.parameterBackground': colors.background.highlight + '00',
    'editorInlayHint.parameterForeground': `${colors.primary.default}99`,
    'editorInlayHint.typeBackground': colors.background.highlight + '00',
    'editorInlayHint.typeForeground': `${colors.primary.default}99`,
    'editorLineNumber.activeForeground': colors.foreground.default,
    'editorLineNumber.foreground': colors.foreground.inactive,
    'editorLink.activeForeground': colors.primary.default,
    'editorMarkerNavigation.background': colors.foreground.muted,
    'editorMarkerNavigationError.background': colors.primary.default,
    'editorMarkerNavigationWarning.background': colors.warn,
    'editorOverviewRuler.addedForeground': `${colors.info}99`,
    'editorOverviewRuler.border': colors.border.highlight,
    'editorOverviewRuler.bracketMatchForeground': colors.primary.default,
    'editorOverviewRuler.commonContentForeground': colors.debug,
    'editorOverviewRuler.currentContentForeground': colors.debug,
    'editorOverviewRuler.deletedForeground': `${colors.primary}99`,
    'editorOverviewRuler.errorForeground': colors.error,
    'editorOverviewRuler.infoForeground': colors.info,
    'editorOverviewRuler.warningForeground': colors.warn,
    'editorOverviewRuler.findMatchForeground': colors.border.default,
    'editorOverviewRuler.incomingContentForeground': colors.debug,
    'editorOverviewRuler.modifiedForeground': `${colors.primary.default}99`,
    'editorOverviewRuler.rangeHighlightForeground': colors.debug,
    'editorOverviewRuler.selectionHighlightForeground': colors.debug,
    'editorOverviewRuler.wordHighlightForeground': colors.debug,
    'editorOverviewRuler.wordHighlightStrongForeground': colors.debug,
    'editorRuler.foreground': colors.foreground.default,
    'editorSuggestWidget.background': colors.background.active,
    'editorSuggestWidget.border': colors.background.default,
    'editorSuggestWidget.foreground': colors.foreground.default,
    'editorSuggestWidget.highlightForeground': colors.foreground.highlight,
    'editorSuggestWidget.selectedBackground': colors.background.default,
    'editorWarning.foreground': colors.warn,
    'editorWhitespace.foreground': colors.foreground.muted,
    'editorWidget.background': colors.background.default,
    'editorWidget.border': colors.background.default,
    'editorWidget.resizeBorder': colors.primary.muted,
    errorForeground: colors.primary.default,
    'extensionButton.prominentBackground': colors.primary.default,
    'extensionButton.prominentForeground': colors.foreground.default,
    'extensionButton.prominentHoverBackground': colors.primary.default,
    focusBorder: colors.border.default,
    foreground: colors.foreground.muted,
    'gitDecoration.addedResourceForeground': colors.git.added,
    'gitDecoration.conflictingResourceForeground': colors.git.conflict,
    'gitDecoration.deletedResourceForeground': colors.git.deleted,
    'gitDecoration.ignoredResourceForeground': colors.git.ignored,
    'gitDecoration.modifiedResourceForeground': colors.git.modified,
    'gitDecoration.untrackedResourceForeground': colors.git.untracked,
    'icon.foreground': colors.foreground.muted,
    'input.background': colors.background.highlight,
    'input.border': colors.background.default,
    'input.foreground': colors.foreground.highlight,
    'input.placeholderForeground': colors.foreground.muted,
    'inputOption.activeBorder': colors.info,
    'inputValidation.errorBackground': colors.primary.default,
    'inputValidation.errorBorder': colors.primary.default,
    'inputValidation.infoBackground': colors.background.highlight,
    'inputValidation.infoBorder': colors.primary.default,
    'inputValidation.warningBackground': colors.warn,
    'inputValidation.warningBorder': colors.warn,
    'list.activeSelectionBackground': colors.background.highlight,
    'list.activeSelectionForeground': colors.foreground.default,
    'list.dropBackground': `${colors.info}40`,
    'list.errorForeground': colors.primary.highlight,
    'list.focusBackground': colors.background.active,
    'list.focusForeground': colors.info,
    'list.highlightForeground': colors.info,
    'list.hoverBackground': colors.background.highlight,
    'list.hoverForeground': colors.info,
    'list.inactiveSelectionBackground': colors.background.default,
    'list.inactiveSelectionForeground': colors.foreground.default,
    'list.invalidItemForeground': colors.primary.highlight,
    'list.warningForeground': colors.primary.highlight,
    'menu.background': colors.background.default,
    'menu.foreground': `${colors.foreground.default}cc`,
    'menu.selectionBackground': colors.background.highlight,
    'menu.selectionForeground': colors.info,
    'menu.separatorBackground': colors.primary.default,
    'menubar.selectionBackground': colors.background.highlight,
    'merge.currentHeaderBackground': colors.foreground.muted,
    'merge.incomingHeaderBackground': colors.primary + '99',
    'notificationCenterHeader.background': colors.background.highlight,
    'notificationCenterHeader.foreground': colors.foreground.highlight,
    'notificationLink.foreground': colors.info,
    'notifications.background': colors.background.default,
    'notifications.border': `${colors.primary.default}99`,
    'notifications.foreground': colors.foreground.highlight,
    'panel.background': colors.background.default,
    'panel.border': colors.background.default,
    'panelTitle.activeBorder': colors.debug,
    'panelTitle.activeForeground': colors.foreground.default,
    'panelTitle.inactiveForeground': colors.foreground.muted,
    'peekView.border': colors.background.active,
    'peekViewEditor.background': colors.background.default,
    'peekViewEditor.matchHighlightBackground': colors.primary.default,
    'peekViewResult.background': colors.background.highlight,
    'peekViewResult.fileForeground': colors.foreground.default,
    'peekViewResult.lineForeground': colors.foreground.muted,
    'peekViewResult.matchHighlightBackground': colors.primary.default,
    'peekViewResult.selectionBackground': colors.background.active,
    'peekViewResult.selectionForeground': colors.foreground.default,
    'peekViewTitle.background': colors.background.default,
    'peekViewTitleDescription.foreground': colors.foreground.muted,
    'peekViewTitleLabel.foreground': colors.foreground.default,
    'pickerGroup.border': colors.background.default,
    'pickerGroup.foreground': colors.foreground.highlight,
    'progressBar.background': colors.warn,
    'scrollbar.shadow': colors.border.default,
    'scrollbarSlider.activeBackground': colors.background.active + '99',
    'scrollbarSlider.background': colors.background.highlight + '99',
    'scrollbarSlider.hoverBackground': colors.background.active + '99',
    'selection.background': `${colors.warn}55`,
    'settings.dropdownForeground': colors.foreground.default,
    'settings.textInputBackground': colors.background.highlight,
    'settings.textInputBorder': colors.background.highlight,
    'sideBar.background': colors.background.default,
    'sideBar.border': colors.background.default,
    'sideBar.dropBackground': `${colors.primary.highlight}40`,
    'sideBar.foreground': colors.foreground.muted,
    'sideBarSectionHeader.background': colors.background.default,
    'sideBarSectionHeader.foreground': colors.foreground.default,
    'sideBarTitle.foreground': colors.foreground.default,
    'statusBar.background': colors.background.default,
    'statusBar.border': colors.background.default,
    'statusBar.debuggingBackground': colors.background.default,
    'statusBar.debuggingBorder': colors.debug,
    'statusBar.debuggingForeground': colors.foreground.default,
    'statusBar.foreground': colors.foreground.inactive,
    'statusBar.noFolderBackground': colors.background.default,
    'statusBar.noFolderBorder': colors.background.default,
    'statusBarItem.activeBackground': colors.background.highlight,
    'statusBarItem.hoverBackground': colors.background.highlight,
    'statusBarItem.prominentBackground': colors.background.highlight,
    'statusBarItem.prominentHoverBackground': colors.background.highlight,
    'tab.activeBackground': colors.background.default,
    'tab.activeBorder': colors.background.default,
    'tab.activeBorderTop': colors.foreground.default,
    'tab.activeForeground': colors.foreground.default,
    'tab.border': colors.background.default,
    'tab.hoverBackground': colors.background.default,
    'tab.inactiveBackground': colors.background.muted,
    'tab.inactiveForeground': colors.foreground.inactive,
    'tab.unfocusedActiveForeground': colors.foreground.muted,
    'tab.unfocusedInactiveForeground': colors.foreground.muted,
    'terminal.ansiBlack': colors.background.active,
    'terminal.ansiBlue': colors.warn,
    'terminal.ansiBrightBlack': colors.primary.default,
    'terminal.ansiBrightBlue': colors.info,
    'terminal.ansiBrightCyan': colors.info,
    'terminal.ansiBrightGreen': colors.info,
    'terminal.ansiBrightMagenta': colors.primary.highlight,
    'terminal.ansiBrightRed': colors.warn,
    'terminal.ansiBrightWhite': colors.foreground.default,
    'terminal.ansiBrightYellow': colors.foreground.default,
    'terminal.ansiCyan': colors.info,
    'terminal.ansiGreen': colors.info,
    'terminal.ansiMagenta': colors.primary.highlight,
    'terminal.ansiRed': colors.primary.default,
    'terminal.ansiWhite': colors.foreground.default,
    'terminal.ansiYellow': colors.warn,
    'terminal.background': colors.background.default,
    'terminal.foreground': colors.foreground.default,
    'terminal.selectionBackground': `${colors.primary.default}33`,
    'terminalCursor.background': colors.background.highlight,
    'terminalCursor.foreground': colors.primary.default,
    'textLink.activeForeground': colors.primary.default,
    'textLink.foreground': colors.primary.default,
    'titleBar.activeBackground': colors.background.default,
    'titleBar.activeForeground': `${colors.foreground.default}cc`,
    'titleBar.inactiveBackground': colors.background.default,
    'titleBar.inactiveForeground': colors.foreground.muted,
    'tree.indentGuidesStroke': `${colors.foreground.default}33`,
    'walkThrough.embeddedEditorBackground': colors.background.default,
    'editorBracketHighlight.foreground1': colors.foreground.muted,
    'editorBracketHighlight.foreground2': colors.foreground.muted,
    'editorBracketHighlight.foreground3': colors.foreground.muted,
    'editorBracketHighlight.foreground4': colors.foreground.muted,
    'editorBracketHighlight.foreground5': colors.foreground.muted,
    'editorBracketHighlight.foreground6': colors.foreground.muted,
  },
  tokenColors: [
    {
      scope: 'string',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: 'punctuation, constant.other.symbol',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'constant.character.escape, text.html constant.character.entity.named, punctuation.definition.entity.html',
      settings: {
        foreground: colors.debug,
      },
    },
    {
      scope: 'constant.language.boolean',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: ['constant.language.null', 'constant.language.undefined'],
      settings: {
        foreground: `${colors.primary.default}99`,
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope:
        'variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: 'keyword.other',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: colors.primary.default,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'constant.language.import-export-all',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'entity.name.function, support.function',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'storage.type, storage.modifier',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'support.module, support.node',
      settings: {
        foreground: colors.primary.default,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'support.type, constant.other.key',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'entity.name.type, entity.other.inherited-class, entity.other',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'comment',
      settings: {
        foreground: `${colors.warn}aa`,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'punctuation',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'punctuation.definition.comment',
      settings: {
        foreground: `${colors.warn}aa`,
      },
    },
    {
      scope: 'entity.name, entity.name.type.class, support.type, support.class, meta.use',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'variable.object.property, meta.field.declaration entity.name.function',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'meta.definition.method entity.name.function',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'meta.function entity.name.function',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope:
        'template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'meta.embedded, source.groovy.embedded, meta.template.expression',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: 'entity.name.tag.yaml',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'constant.language.json',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'entity.other.attribute-name.class',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'source.css entity.name.tag',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'support.type.property-name.css',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'meta.tag, punctuation.definition.tag',
      settings: {
        foreground: `${colors.warn}aa`,
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors.primary.highlight,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: colors.error,
      },
    },
    {
      scope: 'text.html.markdown meta.link.inline, meta.link.reference',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'text.html.markdown beginning.punctuation.definition.list',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        foreground: colors.color2,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: colors.color2,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.underline.link.image',
      settings: {
        foreground: colors.primary.default,
        fontStyle: 'bold',
      },
    },
    {
      scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
      settings: {
        foreground: colors.color2,
        fontStyle: 'italic bold',
      },
    },
    {
      scope: 'markup.fenced_code.block.markdown punctuation.definition.markdown',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: colors.color2,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'punctuation.definition.comment.html',
      settings: {
        foreground: `${colors.warn}aa`,
      },
    },
    {
      scope: 'punctuation.definition.inserted',
      settings: {
        foreground: colors.info,
      },
    },
    {
      scope: 'punctuation.definition.deleted',
      settings: {
        foreground: colors.error,
      },
    },
    {
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'keyword.other.definition.ini',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'entity.name.section.group-title.ini',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'source.cs meta.class.identifier storage.type',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'source.cs meta.method.identifier entity.name.function',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'source.cs meta.method-call meta.method, source.cs entity.name.function',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'source.cs storage.type',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'source.cs meta.method.return-type',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'source.cs meta.preprocessor',
      settings: {
        foreground: colors.foreground.muted,
      },
    },
    {
      scope: 'source.cs entity.name.type.namespace',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: 'meta.jsx.children, SXNested',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: 'support.class.component',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'source.cpp meta.block variable.other',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: 'source.python meta.member.access.python',
      settings: {
        foreground: colors.primary.default,
      },
    },
    {
      scope: 'source.python meta.function-call.python, meta.function-call.arguments',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'meta.block',
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: 'entity.name.function.call',
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'source.php support.other.namespace, source.php meta.use support.class',
      settings: {
        foreground: colors.foreground.default,
      },
    },
    {
      scope: ['keyword.control'],
      settings: {
        foreground: colors.color2,
        fontStyle: 'italic',
      },
    },
    {
      scope: ['keyword.operator.arithmetic'],
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: ['markup.quote'],
      settings: {
        foreground: colors.primary.default,
        fontStyle: 'italic',
      },
    },
    {
      scope: ['markup.fenced_code.block'],
      settings: {
        foreground: colors.foreground.muted,
      },
    },
    {
      scope: ['punctuation.definition.quote'],
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: ['meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: `${colors.primary.default}99`,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.color2,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.warn,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
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
        foreground: colors.primary.highlight,
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colors.error,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: colors.color2,
      },
    },
  ],
}

console.log(JSON.stringify(theme, null, 2))
