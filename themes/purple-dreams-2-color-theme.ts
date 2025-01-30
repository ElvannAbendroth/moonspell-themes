const colors = {
  background: {
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
  border: '#131520',
  borderHighlight: '#1b1f32',
  primaryDark: '#4961da',
  primary: '#4961da',
  primaryLight: '#8b9efd',
  accent1: '#99e9ff',
  accent2: '#ea96f2',
  info: '#67c9e4',
  untracked: '#289dbd',
  error: '#ec407a',
  warn: '#627af4',
  debug: '#7289fd',
  hoverBackground: '#516aec',
  editorBracketMatchBorder: '#5e6587',
  editorIndentGuideActive: '#444b6f',
  editorGutterBackground: '#5e6587',
  editorWidgetResizeBorder: '#4db0cb',
  listInvalidItemForeground: '#7289fd',
  menuForeground: '#c3cdfe',
  notificationCenterHeaderForeground: '#c3cdfe',
  notificationForeground: '#c3cdfe',
  peekViewResultLineForeground: '#51587b',
  pickerGroupForeground: '#c3cdfe',
  scrollbarShadow: '#13152000',
  scrollbarSliderActiveBackground: '#51587b11',
  scrollbarSliderBackground: '#444b6f33',
  scrollbarSliderHoverBackground: '#444b6f11',
  sourceCsMetaPreprocessor: '#676E95',
  supportClassComponent: '#33abcc',
  supportTypePropertyNameJson: '#4db0cb',
  color1: '#a5b3fe',
  color2: '#86e0f9',
  color3: '#5cbcd6',
  color4: '#82AAFF',
  color5: '#7289fd',
}

const theme = {
  name: 'Oodri - Drawbridge',
  type: 'dark',
  colors: {
    'activityBar.background': colors.background.default,
    'activityBar.border': colors.border,
    'activityBar.foreground': colors.foreground.default,
    'activityBarBadge.background': colors.primary,
    'activityBarBadge.foreground': colors.foreground.default,
    'badge.background': colors.primary,
    'badge.foreground': colors.foreground.default,
    'breadcrumb.activeSelectionForeground': colors.foreground.muted,
    'breadcrumb.focusForeground': colors.foreground.muted,
    'breadcrumb.foreground': colors.foreground.inactive,
    'breadcrumbPicker.background': colors.background.default,
    'button.background': colors.primary,
    'button.foreground': colors.foreground.default,
    'button.hoverBackground': colors.hoverBackground,
    'debugExceptionWidget.background': colors.background.default,
    'debugExceptionWidget.border': colors.background.default,
    'debugToolBar.background': colors.background.default,
    'debugToolBar.border': colors.borderHighlight,
    descriptionForeground: colors.foreground.default,
    'diffEditor.insertedTextBackground': `${colors.info}10`,
    'diffEditor.removedTextBackground': `${colors.error}10`,
    'dropdown.background': colors.background.highlight,
    'dropdown.border': colors.background.default,
    'dropdown.foreground': colors.info,
    'editor.background': colors.background.default,
    'editor.findMatchBackground': colors.background.default,
    'editor.findMatchBorder': colors.primary,
    'editor.findMatchHighlightBackground': `${colors.primary}33`,
    'editor.findMatchHighlightBorder': `${colors.primary}99`,
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
    'editorBracketMatch.border': colors.editorBracketMatchBorder,
    'editorCodeLens.foreground': `${colors.primary}77`,
    'editorCursor.background': colors.background.default,
    'editorCursor.foreground': colors.color5,
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
    'editorHoverWidget.border': colors.primary,
    'editorHoverWidget.foreground': colors.foreground.default,
    'editorIndentGuide.activeBackground1': colors.editorIndentGuideActive,
    'editorIndentGuide.background1': colors.background.active,
    'editorInlayHint.background': colors.background.highlight + '00',
    'editorInlayHint.foreground': `${colors.primary}99`,
    'editorInlayHint.parameterBackground': colors.background.highlight + '00',
    'editorInlayHint.parameterForeground': `${colors.primary}99`,
    'editorInlayHint.typeBackground': colors.background.highlight + '00',
    'editorInlayHint.typeForeground': `${colors.primary}99`,
    'editorLineNumber.activeForeground': colors.foreground.default,
    'editorLineNumber.foreground': colors.editorIndentGuideActive,
    'editorLink.activeForeground': colors.primary,
    'editorMarkerNavigation.background': colors.editorGutterBackground,
    'editorMarkerNavigationError.background': colors.primary,
    'editorMarkerNavigationWarning.background': colors.warn,
    'editorOverviewRuler.addedForeground': `${colors.info}99`,
    'editorOverviewRuler.border': colors.scrollbarShadow,
    'editorOverviewRuler.bracketMatchForeground': colors.scrollbarShadow,
    'editorOverviewRuler.commonContentForeground': colors.error,
    'editorOverviewRuler.currentContentForeground': colors.error,
    'editorOverviewRuler.deletedForeground': `${colors.error}99`,
    'editorOverviewRuler.errorForeground': colors.error,
    'editorOverviewRuler.findMatchForeground': colors.scrollbarShadow,
    'editorOverviewRuler.incomingContentForeground': colors.error,
    'editorOverviewRuler.infoForeground': colors.scrollbarShadow,
    'editorOverviewRuler.modifiedForeground': `${colors.primary}99`,
    'editorOverviewRuler.rangeHighlightForeground': colors.scrollbarShadow,
    'editorOverviewRuler.selectionHighlightForeground': colors.scrollbarShadow,
    'editorOverviewRuler.warningForeground': colors.primary,
    'editorOverviewRuler.wordHighlightForeground': colors.scrollbarShadow,
    'editorOverviewRuler.wordHighlightStrongForeground': colors.scrollbarShadow,
    'editorRuler.foreground': colors.foreground.default,
    'editorSuggestWidget.background': colors.background.active,
    'editorSuggestWidget.border': colors.background.default,
    'editorSuggestWidget.foreground': colors.foreground.default,
    'editorSuggestWidget.highlightForeground': colors.accent1,
    'editorSuggestWidget.selectedBackground': colors.background.default,
    'editorWarning.foreground': colors.warn,
    'editorWhitespace.foreground': colors.editorGutterBackground,
    'editorWidget.background': colors.background.default,
    'editorWidget.border': colors.background.default,
    'editorWidget.resizeBorder': colors.editorWidgetResizeBorder,
    errorForeground: colors.primary,
    'extensionButton.prominentBackground': colors.primary,
    'extensionButton.prominentForeground': colors.foreground.default,
    'extensionButton.prominentHoverBackground': colors.primary,
    focusBorder: colors.scrollbarShadow,
    foreground: colors.foreground.muted,
    'gitDecoration.addedResourceForeground': colors.info,
    'gitDecoration.conflictingResourceForeground': `${colors.error}99`,
    'gitDecoration.deletedResourceForeground': colors.error,
    'gitDecoration.ignoredResourceForeground': colors.editorIndentGuideActive,
    'gitDecoration.modifiedResourceForeground': colors.primary,
    'gitDecoration.untrackedResourceForeground': colors.untracked,
    'icon.foreground': colors.foreground.muted,
    'input.background': colors.background.highlight,
    'input.border': colors.background.default,
    'input.foreground': colors.foreground.highlight,
    'input.placeholderForeground': colors.foreground.muted,
    'inputOption.activeBorder': colors.info,
    'inputValidation.errorBackground': colors.primary,
    'inputValidation.errorBorder': colors.primary,
    'inputValidation.infoBackground': colors.background.highlight,
    'inputValidation.infoBorder': colors.primary,
    'inputValidation.warningBackground': colors.warn,
    'inputValidation.warningBorder': colors.warn,
    'list.activeSelectionBackground': colors.background.highlight,
    'list.activeSelectionForeground': colors.foreground.default,
    'list.dropBackground': `${colors.info}40`,
    'list.errorForeground': colors.color5,
    'list.focusBackground': colors.background.active,
    'list.focusForeground': colors.info,
    'list.highlightForeground': colors.info,
    'list.hoverBackground': colors.background.highlight,
    'list.hoverForeground': colors.info,
    'list.inactiveSelectionBackground': colors.background.default,
    'list.inactiveSelectionForeground': colors.foreground.default,
    'list.invalidItemForeground': colors.listInvalidItemForeground,
    'list.warningForeground': colors.color5,
    'menu.background': colors.background.default,
    'menu.foreground': `${colors.foreground.default}cc`,
    'menu.selectionBackground': colors.background.highlight,
    'menu.selectionForeground': colors.info,
    'menu.separatorBackground': colors.primary,
    'menubar.selectionBackground': colors.background.highlight,
    'merge.currentHeaderBackground': colors.foreground.muted,
    'merge.incomingHeaderBackground': colors.primary + '99',
    'notificationCenterHeader.background': colors.background.highlight,
    'notificationCenterHeader.foreground': colors.notificationCenterHeaderForeground,
    'notificationLink.foreground': colors.info,
    'notifications.background': colors.background.default,
    'notifications.border': `${colors.primary}99`,
    'notifications.foreground': colors.notificationForeground,
    'panel.background': colors.background.default,
    'panel.border': colors.background.default,
    'panelTitle.activeBorder': colors.foreground.default,
    'panelTitle.activeForeground': colors.foreground.default,
    'panelTitle.inactiveForeground': colors.foreground.muted,
    'peekView.border': colors.background.active,
    'peekViewEditor.background': colors.background.default,
    'peekViewEditor.matchHighlightBackground': colors.primary,
    'peekViewResult.background': colors.background.highlight,
    'peekViewResult.fileForeground': colors.foreground.default,
    'peekViewResult.lineForeground': colors.peekViewResultLineForeground,
    'peekViewResult.matchHighlightBackground': colors.primary,
    'peekViewResult.selectionBackground': colors.background.active,
    'peekViewResult.selectionForeground': colors.foreground.default,
    'peekViewTitle.background': colors.background.default,
    'peekViewTitleDescription.foreground': colors.foreground.muted,
    'peekViewTitleLabel.foreground': colors.foreground.default,
    'pickerGroup.border': colors.background.default,
    'pickerGroup.foreground': colors.pickerGroupForeground,
    'progressBar.background': colors.warn,
    'scrollbar.shadow': colors.scrollbarShadow,
    'scrollbarSlider.activeBackground': colors.scrollbarSliderActiveBackground,
    'scrollbarSlider.background': colors.scrollbarSliderBackground,
    'scrollbarSlider.hoverBackground': colors.scrollbarSliderHoverBackground,
    'selection.background': `${colors.warn}55`,
    'settings.dropdownForeground': colors.foreground.default,
    'settings.textInputBackground': colors.background.highlight,
    'settings.textInputBorder': colors.background.highlight,
    'sideBar.background': colors.background.default,
    'sideBar.border': colors.background.default,
    'sideBar.dropBackground': `${colors.primaryLight}40`,
    'sideBar.foreground': colors.foreground.muted,
    'sideBarSectionHeader.background': colors.background.default,
    'sideBarSectionHeader.foreground': colors.foreground.default,
    'sideBarTitle.foreground': colors.foreground.default,
    'statusBar.background': colors.background.default,
    'statusBar.border': colors.background.default,
    'statusBar.debuggingBackground': colors.background.default,
    'statusBar.debuggingBorder': colors.supportClassComponent,
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
    'tab.activeBorderTop': colors.supportClassComponent,
    'tab.activeForeground': colors.foreground.default,
    'tab.border': colors.background.default,
    'tab.hoverBackground': colors.background.default,
    'tab.inactiveBackground': colors.background.default,
    'tab.inactiveForeground': colors.foreground.muted,
    'tab.unfocusedActiveForeground': colors.foreground.muted,
    'tab.unfocusedInactiveForeground': colors.foreground.muted,
    'terminal.ansiBlack': colors.background.active,
    'terminal.ansiBlue': colors.warn,
    'terminal.ansiBrightBlack': colors.primary,
    'terminal.ansiBrightBlue': colors.info,
    'terminal.ansiBrightCyan': colors.info,
    'terminal.ansiBrightGreen': colors.info,
    'terminal.ansiBrightMagenta': colors.color5,
    'terminal.ansiBrightRed': colors.warn,
    'terminal.ansiBrightWhite': colors.foreground.default,
    'terminal.ansiBrightYellow': colors.foreground.default,
    'terminal.ansiCyan': colors.info,
    'terminal.ansiGreen': colors.info,
    'terminal.ansiMagenta': colors.color5,
    'terminal.ansiRed': colors.primary,
    'terminal.ansiWhite': colors.foreground.default,
    'terminal.ansiYellow': colors.warn,
    'terminal.background': colors.background.default,
    'terminal.foreground': colors.foreground.default,
    'terminal.selectionBackground': `${colors.primary}33`,
    'terminalCursor.background': colors.background.highlight,
    'terminalCursor.foreground': colors.primary,
    'textLink.activeForeground': colors.primary,
    'textLink.foreground': colors.primary,
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
        foreground: colors.color1,
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
        foreground: colors.color1,
      },
    },
    {
      scope: 'constant.language.boolean',
      settings: {
        foreground: colors.primary,
      },
    },
    {
      scope: ['constant.language.null', 'constant.language.undefined'],
      settings: {
        foreground: `${colors.primary}99`,
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: colors.primary,
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
        foreground: colors.supportClassComponent,
      },
    },
    {
      scope: 'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: colors.primary,
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
        foreground: colors.primary,
      },
    },
    {
      scope: 'entity.name.function, support.function',
      settings: {
        foreground: colors.color5,
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
        foreground: colors.primary,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'support.type, constant.other.key',
      settings: {
        foreground: colors.color3,
      },
    },
    {
      scope: 'entity.name.type, entity.other.inherited-class, entity.other',
      settings: {
        foreground: colors.color3,
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
        foreground: colors.supportClassComponent,
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
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'variable.object.property, meta.field.declaration entity.name.function',
      settings: {
        foreground: colors.color5,
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
        foreground: colors.color4,
      },
    },
    {
      scope:
        'template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end',
      settings: {
        foreground: colors.primary,
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
        foreground: colors.primaryLight,
      },
    },
    {
      scope: 'constant.language.json',
      settings: {
        foreground: colors.primary,
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
        foreground: colors.primaryLight,
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
        foreground: colors.primaryLight,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: colors.untracked,
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
        foreground: colors.primary,
      },
    },
    {
      scope: 'text.html.markdown beginning.punctuation.definition.list',
      settings: {
        foreground: colors.primary,
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        foreground: colors.untracked,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: colors.untracked,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.underline.link.image',
      settings: {
        foreground: colors.primary,
        fontStyle: 'bold',
      },
    },
    {
      scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
      settings: {
        foreground: colors.untracked,
        fontStyle: 'italic bold',
      },
    },
    {
      scope: 'markup.fenced_code.block.markdown punctuation.definition.markdown',
      settings: {
        foreground: colors.supportClassComponent,
      },
    },
    {
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: colors.supportClassComponent,
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
        foreground: colors.primary,
      },
    },
    {
      scope: 'keyword.other.definition.ini',
      settings: {
        foreground: colors.untracked,
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
        foreground: colors.primary,
      },
    },
    {
      scope: 'source.cs meta.method.identifier entity.name.function',
      settings: {
        foreground: colors.primary,
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
        foreground: colors.sourceCsMetaPreprocessor,
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
        foreground: colors.supportClassComponent,
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
        foreground: colors.primary,
      },
    },
    {
      scope: 'source.python meta.function-call.python, meta.function-call.arguments',
      settings: {
        foreground: colors.color4,
      },
    },
    {
      scope: 'meta.block',
      settings: {
        foreground: colors.untracked,
      },
    },
    {
      scope: 'entity.name.function.call',
      settings: {
        foreground: colors.color4,
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
        foreground: colors.supportClassComponent,
        fontStyle: 'italic',
      },
    },
    {
      scope: ['keyword.operator.arithmetic'],
      settings: {
        foreground: colors.supportClassComponent,
      },
    },
    {
      scope: ['markup.quote'],
      settings: {
        foreground: colors.primary,
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
        foreground: colors.supportClassComponent,
      },
    },
    {
      scope: ['meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: colors.color5,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.color5,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.supportClassComponent,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.supportClassComponent,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: `${colors.primary}99`,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.primaryLight,
      },
    },
    {
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
      ],
      settings: {
        foreground: colors.supportTypePropertyNameJson,
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
        foreground: colors.color5,
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
        foreground: colors.supportClassComponent,
      },
    },
  ],
}

console.log(JSON.stringify(theme, null, 2))
