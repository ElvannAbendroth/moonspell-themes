import { ThemeColors, ThemeMeta } from '../types'

export function makeGemTheme(meta: ThemeMeta, colors: ThemeColors): Object {
  return {
    name: meta.name,
    type: meta.type,
    $schema: 'vscode://schemas/color-theme',
    description: meta.description,
    colors: {
      'activityBar.background': colors.background.default,
      'activityBar.border': colors.border.default,
      'activityBar.foreground': colors.foreground.default,
      'activityBarBadge.background': colors.primary.default,
      'activityBarBadge.foreground': colors.foreground.default,
      'badge.background': colors.primary.default,
      'badge.foreground': colors.foreground.default,
      'breadcrumb.activeSelectionForeground': colors.foreground.muted + 99,
      'breadcrumb.focusForeground': colors.foreground.muted + 99,
      'breadcrumb.foreground': colors.foreground.inactive + 77,
      'breadcrumbPicker.background': colors.background.default,
      'button.background': colors.primary.muted,
      'button.foreground': colors.primary.foreground,
      'button.hoverBackground': colors.primary.default,
      'debugExceptionWidget.background': colors.background.default,
      'debugExceptionWidget.border': colors.border.default,
      'debugToolBar.background': colors.background.default,
      'debugToolBar.border': colors.border.highlight,
      descriptionForeground: colors.foreground.default,
      'diffEditor.insertedTextBackground': `${colors.utility.info}10`,
      'diffEditor.removedTextBackground': `${colors.utility.error}10`,
      'dropdown.background': colors.background.highlight,
      'dropdown.border': colors.border.default,
      'dropdown.foreground': colors.utility.info,
      'editor.background': colors.background.default,
      'editor.findMatchBackground': colors.background.default,
      'editor.findMatchBorder': colors.border.default,
      'editor.findMatchHighlightBackground': `${colors.primary.default}33`,
      'editor.findMatchHighlightBorder': `${colors.primary.default}99`,
      'editor.foreground': colors.foreground.default,
      'editor.hoverHighlightBackground': colors.background.highlight + '99',
      'editor.inactiveSelectionBackground': `${colors.background.active}99`,
      'editor.lineHighlightBackground': `${colors.background.active}99`,
      'editor.lineHighlightBorder': colors.border.highlight,
      'editor.rangeHighlightBackground': colors.background.active + '99',
      'editor.selectionBackground': colors.primary.muted + '55',
      'editor.selectionHighlightBackground': colors.background.active + '99',
      'editor.wordHighlightBackground': colors.background.active + '99',
      'editor.wordHighlightStrongBackground': colors.background.active + '99',
      'editorBracketMatch.background': colors.background.default,
      'editorBracketMatch.border': colors.border.default,
      'editorCodeLens.foreground': `${colors.primary.default}77`,
      'editorCursor.background': colors.background.default,
      'editorCursor.foreground': colors.primary.highlight,
      'editorError.foreground': colors.utility.error,
      'editorGroup.border': colors.border.default,
      'editorGroup.dropBackground': `${colors.utility.info}40`,
      'editorGroup.emptyBackground': colors.background.default,
      'editorGroupHeader.noTabsBackground': colors.background.default,
      'editorGroupHeader.tabsBackground': colors.background.default,
      'editorGroupHeader.tabsBorder': colors.border.default,
      'editorGutter.addedBackground': colors.utility.info,
      'editorGutter.background': `${colors.background.default}64`,
      'editorGutter.deletedBackground': colors.utility.error,
      'editorGutter.modifiedBackground': colors.primary.default,
      'editorHoverWidget.background': colors.background.highlight,
      'editorHoverWidget.border': colors.border.default,
      'editorHoverWidget.foreground': colors.foreground.default,
      'editorIndentGuide.activeBackground1': colors.foreground.muted + 99,
      'editorIndentGuide.background1': colors.background.active,
      'editorInlayHint.background': colors.background.highlight + '00',
      'editorInlayHint.foreground': `${colors.primary.default}99`,
      'editorInlayHint.parameterBackground': colors.background.highlight + '00',
      'editorInlayHint.parameterForeground': `${colors.primary.default}99`,
      'editorInlayHint.typeBackground': colors.background.highlight + '00',
      'editorInlayHint.typeForeground': `${colors.primary.default}99`,
      'editorLineNumber.activeForeground': colors.foreground.default,
      'editorLineNumber.foreground': colors.foreground.inactive + 77,
      'editorLink.activeForeground': colors.primary.default,
      'editorMarkerNavigation.background': colors.foreground.muted + 99,
      'editorMarkerNavigationError.background': colors.primary.default,
      'editorMarkerNavigationWarning.background': colors.utility.warn,
      'editorOverviewRuler.addedForeground': `${colors.utility.info}99`,
      'editorOverviewRuler.border': colors.border.highlight,
      'editorOverviewRuler.bracketMatchForeground': colors.primary.default,
      'editorOverviewRuler.commonContentForeground': colors.debug,
      'editorOverviewRuler.currentContentForeground': colors.debug,
      'editorOverviewRuler.deletedForeground': `${colors.primary.default}99`,
      'editorOverviewRuler.errorForeground': colors.utility.error,
      'editorOverviewRuler.infoForeground': colors.utility.info,
      'editorOverviewRuler.warningForeground': colors.utility.warn,
      'editorOverviewRuler.findMatchForeground': colors.border.default + '99',
      'editorOverviewRuler.incomingContentForeground': colors.debug,
      'editorOverviewRuler.modifiedForeground': `${colors.primary.default}99`,
      'editorOverviewRuler.rangeHighlightForeground': colors.debug + '99',
      'editorOverviewRuler.selectionHighlightForeground': colors.debug + '99',
      'editorOverviewRuler.wordHighlightForeground': colors.debug + '99',
      'editorOverviewRuler.wordHighlightStrongForeground': colors.debug + '99',
      'editorRuler.foreground': colors.foreground.default,
      'editorSuggestWidget.background': colors.background.active,
      'editorSuggestWidget.border': colors.border.default,
      'editorSuggestWidget.foreground': colors.foreground.default,
      'editorSuggestWidget.highlightForeground': colors.foreground.highlight,
      'editorSuggestWidget.selectedBackground': colors.background.default,
      'editorWarning.foreground': colors.utility.warn,
      'editorWhitespace.foreground': colors.foreground.muted + 99,
      'editorWidget.background': colors.background.default,
      'editorWidget.border': colors.border.default,
      'editorWidget.resizeBorder': colors.border.default,
      errorForeground: colors.primary.default,
      'extensionButton.prominentBackground': colors.primary.default,
      'extensionButton.prominentForeground': colors.foreground.default,
      'extensionButton.prominentHoverBackground': colors.primary.highlight,
      focusBorder: colors.border.default,
      foreground: colors.foreground.muted + 99,
      'gitDecoration.addedResourceForeground': colors.git.added,
      'gitDecoration.conflictingResourceForeground': colors.git.conflict,
      'gitDecoration.deletedResourceForeground': colors.git.deleted,
      'gitDecoration.ignoredResourceForeground': colors.git.ignored,
      'gitDecoration.modifiedResourceForeground': colors.git.modified,
      'gitDecoration.untrackedResourceForeground': colors.git.untracked,
      'icon.foreground': colors.foreground.muted + 99,
      'input.background': colors.background.highlight,
      'input.border': colors.border.default,
      'input.foreground': colors.foreground.highlight,
      'input.placeholderForeground': colors.foreground.muted + 99,
      'inputOption.activeBorder': colors.border.default,
      'inputValidation.errorBackground': colors.utility.error,
      'inputValidation.errorBorder': colors.utility.error,
      'inputValidation.infoBackground': colors.utility.info,
      'inputValidation.infoBorder': colors.utility.info,
      'inputValidation.warningBackground': colors.utility.warn,
      'inputValidation.warningBorder': colors.utility.warn,
      'list.activeSelectionBackground': colors.background.highlight,
      'list.activeSelectionForeground': colors.foreground.default,
      'list.dropBackground': `${colors.utility.info}40`,
      'list.errorForeground': colors.primary.highlight,
      'list.focusBackground': colors.background.active,
      'list.focusForeground': colors.utility.info,
      'list.highlightForeground': colors.utility.info,
      'list.hoverBackground': colors.background.highlight,
      'list.hoverForeground': colors.foreground.highlight,
      'list.inactiveSelectionBackground': colors.background.default,
      'list.inactiveSelectionForeground': colors.foreground.default,
      'list.invalidItemForeground': colors.primary.highlight,
      'list.warningForeground': colors.primary.highlight,
      'menu.background': colors.background.default,
      'menu.border': colors.border.default,
      'menu.foreground': colors.foreground.muted + 99,
      'menu.selectionBackground': colors.background.highlight,
      'menu.selectionForeground': colors.foreground.default,
      'menu.separatorBackground': colors.border.default,
      'menubar.selectionBackground': colors.background.highlight,
      'merge.currentHeaderBackground': colors.foreground.muted + 99,
      'merge.incomingHeaderBackground': colors.primary.default + '99',
      'notificationCenterHeader.background': colors.background.highlight,
      'notificationCenterHeader.foreground': colors.foreground.highlight,
      'notificationLink.foreground': colors.utility.info,
      'notifications.background': colors.background.default,
      'notifications.border': `${colors.border.default}99`,
      'notifications.foreground': colors.foreground.highlight,
      'panel.background': colors.background.default,
      'panel.border': colors.border.default,
      'panelTitle.activeBorder': colors.border.default,
      'panelTitle.activeForeground': colors.foreground.default,
      'panelTitle.inactiveForeground': colors.foreground.muted + 99,
      'peekView.border': colors.border.default,
      'peekViewEditor.background': colors.background.default,
      'peekViewEditor.matchHighlightBackground': colors.primary.default,
      'peekViewResult.background': colors.background.highlight,
      'peekViewResult.fileForeground': colors.foreground.default,
      'peekViewResult.lineForeground': colors.foreground.muted + 99,
      'peekViewResult.matchHighlightBackground': colors.primary.default,
      'peekViewResult.selectionBackground': colors.background.active,
      'peekViewResult.selectionForeground': colors.foreground.default,
      'peekViewTitle.background': colors.background.default,
      'peekViewTitleDescription.foreground': colors.foreground.muted + 99,
      'peekViewTitleLabel.foreground': colors.foreground.default,
      'pickerGroup.border': colors.border.default,
      'pickerGroup.foreground': colors.foreground.highlight,
      'progressBar.background': colors.primary.default,
      'scrollbar.shadow': colors.border.default,
      'scrollbarSlider.activeBackground': colors.background.active + '99',
      'scrollbarSlider.background': colors.background.highlight + '99',
      'scrollbarSlider.hoverBackground': colors.background.active + '99',
      'selection.background': `${colors.primary.default}55`,
      'settings.dropdownForeground': colors.foreground.default,
      'settings.textInputBackground': colors.background.highlight,
      'settings.textInputBorder': colors.border.highlight,
      'sideBar.background': colors.background.default,
      'sideBar.border': colors.border.default,
      'sideBar.dropBackground': `${colors.primary.highlight}40`,
      'sideBar.foreground': colors.foreground.muted + 99,
      'sideBarSectionHeader.background': colors.background.default,
      'sideBarSectionHeader.foreground': colors.foreground.default,
      'sideBarTitle.foreground': colors.foreground.default,
      'statusBar.background': colors.background.default,
      'statusBar.border': colors.border.default,
      'statusBar.debuggingBackground': colors.primary.default,
      'statusBar.debuggingBorder': colors.primary.default,
      'statusBar.debuggingForeground': colors.background.default,
      'statusBar.foreground': colors.foreground.inactive + 77,
      'statusBar.noFolderBackground': colors.background.default,
      'statusBar.noFolderBorder': colors.border.default,
      'statusBarItem.activeBackground': colors.background.highlight,
      'statusBarItem.hoverBackground': colors.background.highlight,
      'statusBarItem.prominentBackground': colors.background.highlight,
      'statusBarItem.prominentHoverBackground': colors.background.highlight,
      'tab.activeBackground': colors.background.default,
      'tab.activeBorder': colors.background.default,
      'tab.activeBorderTop': colors.primary.default,
      'tab.activeForeground': colors.foreground.default,
      'tab.border': colors.border.default,
      'tab.hoverBackground': colors.background.default,
      'tab.inactiveBackground': colors.background.muted,
      'tab.inactiveForeground': colors.foreground.inactive + 77,
      'tab.unfocusedActiveForeground': colors.foreground.muted + 99,
      'tab.unfocusedInactiveForeground': colors.foreground.muted + 99,
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
      'textLink.activeForeground': colors.primary.default,
      'textLink.foreground': colors.primary.default,
      'titleBar.activeBackground': colors.background.default,
      'titleBar.activeForeground': `${colors.foreground.default}cc`,
      'titleBar.inactiveBackground': colors.background.default,
      'titleBar.inactiveForeground': colors.foreground.muted + 99,
      'tree.indentGuidesStroke': `${colors.foreground.default}33`,
      'walkThrough.embeddedEditorBackground': colors.background.default,
      'editorBracketHighlight.foreground1': colors.foreground.muted + 99,
      'editorBracketHighlight.foreground2': colors.foreground.muted + 99,
      'editorBracketHighlight.foreground3': colors.foreground.muted + 99,
      'editorBracketHighlight.foreground4': colors.foreground.muted + 99,
      'editorBracketHighlight.foreground5': colors.foreground.muted + 99,
      'editorBracketHighlight.foreground6': colors.foreground.muted + 99,
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
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope:
          'constant.character.escape, text.html constant.character.entity.named, punctuation.definition.entity.html',
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
        scope: 'keyword, keyword.other, modifier',
        settings: {
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: 'constant.language.import-export-all',
        settings: {
          foreground: colors.utility.info,
        },
      },
      {
        scope: 'variable.language.this, support.type.object, constant.language',
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
          foreground: colors.primary.default,
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
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: 'entity.name.type, entity.other.inherited-class, entity.other',
        settings: {
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: `${colors.foreground.muted + 99}`,
          fontStyle: 'italic',
        },
      },
      {
        scope: 'punctuation',
        settings: {
          foreground: colors.foreground.muted + 99,
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
          foreground: colors.primary.default,
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
          foreground: colors.primary.default,
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
          foreground: colors.primary.default,
        },
      },
      {
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: colors.primary.default,
        },
      },
      {
        scope: 'source.css entity.name.tag',
        settings: {
          foreground: colors.primary.default,
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
          foreground: `${colors.primary.default}`,
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: colors.primary.default,
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
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: colors.utility.info,
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: colors.utility.error,
        },
      },
      {
        scope:
          'text.html.markdown meta.link.inline, meta.link.reference, text.html.markdown beginning.punctuation.definition.list, string.other.link.description.markdown,	punctuation.definition.metadata.markdown',
        settings: {
          foreground: colors.rainbow.pink,
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          foreground: colors.utility.success,
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          foreground: colors.utility.success,
          fontStyle: 'bold',
        },
      },
      {
        scope:
          'markup.underline.link.image, punctuation.definition.link.description.begin.markdown, string.other.link.title.markdown, string.other.link.description.markdown meta.image.inline.markdown meta.paragraph.markdown text.html.markdown, 	markup.underline.link.markdown meta.link.inline.markdown meta.paragraph.markdown text.html.markdown',
        settings: {
          foreground: colors.rainbow.pink,
          fontStyle: 'bold',
        },
      },
      {
        scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
        settings: {
          foreground: colors.utility.success,
          fontStyle: 'italic bold',
        },
      },
      {
        scope: 'markup.fenced_code.block.markdown punctuation.definition.markdown',
        settings: {
          foreground: colors.utility.success,
        },
      },
      {
        scope: 'entity.name.section.markdown, punctuation.definition.heading.markdown',
        settings: {
          foreground: colors.primary.default,
          fontStyle: 'bold',
        },
      },
      {
        scope: 'punctuation.definition.comment.html',
        settings: {
          foreground: `${colors.primary.default}aa`,
        },
      },
      {
        scope: 'punctuation.definition.inserted',
        settings: {
          foreground: colors.utility.info,
        },
      },
      {
        scope: 'punctuation.definition.deleted',
        settings: {
          foreground: colors.utility.error,
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
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: 'entity.name.section.group-title.ini',
        settings: {
          foreground: colors.foreground.muted + 99,
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
          foreground: colors.foreground.muted + 99,
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
          foreground: colors.foreground.muted + 99,
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
          foreground: colors.foreground.muted + 99,
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
          foreground: colors.foreground.muted + 99,
          fontStyle: 'italic',
        },
      },
      {
        scope: ['keyword.operator.arithmetic'],
        settings: {
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: ['markup.quote'],
        settings: {
          foreground: colors.rainbow.cyan,
          fontStyle: 'italic',
        },
      },
      {
        scope: ['markup.fenced_code.block'],
        settings: {
          foreground: colors.foreground.muted + 99,
        },
      },
      {
        scope: ['punctuation.definition.quote'],
        settings: {
          foreground: colors.foreground.muted + 99,
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
          foreground: colors.utility.success,
        },
      },
      {
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: colors.utility.success,
        },
      },
      {
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
        ],
        settings: {
          foreground: `${colors.primary.default}`,
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
          foreground: colors.utility.success,
        },
      },
      {
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
        ],
        settings: {
          foreground: colors.primary.default,
        },
      },
      {
        scope: [
          'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json support.type.property-name.json',
        ],
        settings: {
          foreground: colors.utility.info,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: colors.utility.info,
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
          foreground: colors.utility.error,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: colors.utility.success,
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
