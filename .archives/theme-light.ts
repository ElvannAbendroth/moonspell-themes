const meta = {
  name: 'Moonspell - Amethyst Light',
  description: 'A light theme with a purple hue inspired by lilac colors',
  type: 'light',
}

const colors = {
  background: {
    muted: '##E1EAFF99',
    default: '#E1EAFF',
    highlight: '#E1EAFF',
    active: '#E1EAFF77',
  },
  foreground: {
    muted: '#131520',
    default: '#1b1f32',
    highlight: '#252a41',
    inactive: '#323750',
  },
  border: {
    default: '#E1EAFF',
    highlight: '#E1EAFF',
  },
  primary: {
    default: '#7966E6',
    muted: '#634FD5',
    highlight: '#9889F2',
    foreground: '#b8cdfe',
  },
  git: {
    modified: '#9889F2',
    untracked: '#24dbc3',
    added: '#67c9e4',
    ignored: '#b8cdfe55',
    error: '#ea96f2',
    deleted: '#ea96f2',
    conflict: '#e19981',
  },
  rainbow: {
    purple: '#B396F9',
    blue: '#8EA7FF',
    cyan: '#67c9e4',
    green: '#8EA7FF',
    yellow: '#B396F9',
    orange: '#e19981',
    pink: '#ea96f2',
    red: '#ea96f2',
    white: '#E1E1E1',
    black: '#B8B8B8',
  },
  utility: {
    info: '#67c9e4',
    success: '#24dbc3',
    warn: '#e19981',
    error: '#ea96f2',
  },
  debug: '#9889F2',
}

const theme = {
  name: meta.name,
  type: meta.type,
  $schema: 'vscode://schemas/color-theme',
  description: meta.description,
  colors: {
    'activityBar.background': colors.background.highlight,
    'activityBar.foreground': colors.foreground.default,
    'activityBar.border': colors.border.default,
    'activityBar.hoverForeground': colors.primary.default,
    'activityBarBadge.background': colors.primary.default,
    'activityBarBadge.foreground': colors.primary.foreground,
    'checkbox.border': '#919191',
    'editor.background': '#FFFFFF',
    'editor.foreground': '#000000',
    'editor.inactiveSelectionBackground': '#E5EBF1',
    'editorIndentGuide.background1': '#D3D3D3',
    'editorIndentGuide.activeBackground1': '#939393',
    'editor.selectionHighlightBackground': '#ADD6FF80',
    'editorSuggestWidget.background': '#F3F3F3',
    'sideBarTitle.foreground': '#6F6F6F',
    'list.hoverBackground': '#E8E8E8',
    'menu.border': '#D4D4D4',
    'input.placeholderForeground': '#767676',
    'searchEditor.textInputBorder': '#CECECE',
    'settings.textInputBorder': '#CECECE',
    'settings.numberInputBorder': '#CECECE',
    'statusBarItem.remoteForeground': '#FFF',
    'statusBarItem.remoteBackground': '#16825D',
    'ports.iconRunningProcessForeground': '#369432',
    'sideBarSectionHeader.background': '#0000',
    'sideBarSectionHeader.border': '#61616130',
    'tab.selectedForeground': '#333333b3',
    'tab.selectedBackground': '#ffffffa5',
    'tab.lastPinnedBorder': '#61616130',
    'notebook.cellBorderColor': '#E8E8E8',
    'notebook.selectedCellBackground': '#c8ddf150',
    'statusBarItem.errorBackground': '#c72e0f',
    'list.activeSelectionIconForeground': '#FFF',
    'list.focusAndSelectionOutline': '#90C2F9',
    'terminal.inactiveSelectionBackground': '#E5EBF1',
    'widget.border': '#d4d4d4',
    'actionBar.toggledBackground': '#dddddd',
    'diffEditor.unchangedRegionBackground': '#f8f8f8',
    'gitDecoration.addedResourceForeground': colors.git.added,
    'gitDecoration.conflictingResourceForeground': colors.git.conflict,
    'gitDecoration.deletedResourceForeground': colors.git.deleted,
    'gitDecoration.ignoredResourceForeground': colors.git.ignored,
    'gitDecoration.modifiedResourceForeground': colors.git.modified,
    'gitDecoration.untrackedResourceForeground': colors.git.untracked,
  },
  tokenColors: [
    {
      scope: [
        'meta.embedded',
        'source.groovy.embedded',
        'string meta.image.inline.markdown',
        'variable.legacy.builtin.python',
      ],
      settings: {
        foreground: '#000000ff',
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'strong',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: '#000080',
      },
    },
    {
      scope: 'comment',
      settings: {
        foreground: '#008000',
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: [
        'constant.numeric',
        'variable.other.enummember',
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
      ],
      settings: {
        foreground: '#098658',
      },
    },
    {
      scope: 'constant.regexp',
      settings: {
        foreground: '#811f3f',
      },
    },
    {
      name: 'css tags in selectors, xml tags',
      scope: 'entity.name.tag',
      settings: {
        foreground: '#800000',
      },
    },
    {
      scope: 'entity.name.selector',
      settings: {
        foreground: '#800000',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#e50000',
      },
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'source.css entity.other.attribute-name.class',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.parent-selector.css',
        'entity.other.attribute-name.parent.less',
        'source.css entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element.css',
        'source.css.less entity.other.attribute-name.id',
        'entity.other.attribute-name.scss',
      ],
      settings: {
        foreground: '#800000',
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: '#cd3131',
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground: '#000080',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold',
        foreground: '#800000',
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: '#098658',
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: '#a31515',
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: '#0451a5',
      },
    },
    {
      scope: ['punctuation.definition.quote.begin.markdown', 'punctuation.definition.list.begin.markdown'],
      settings: {
        foreground: '#0451a5',
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: '#800000',
      },
    },
    {
      name: 'brackets of XML/HTML tags',
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: '#800000',
      },
    },
    {
      scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: '#a31515',
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: '#098658',
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: '#0451a5',
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: ['storage.modifier', 'keyword.operator.noexcept'],
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: ['string', 'meta.embedded.assembly'],
      settings: {
        foreground: '#a31515',
      },
    },
    {
      scope: [
        'string.comment.buffered.block.pug',
        'string.quoted.pug',
        'string.interpolated.pug',
        'string.unquoted.plain.in.yaml',
        'string.unquoted.plain.out.yaml',
        'string.unquoted.block.yaml',
        'string.quoted.single.yaml',
        'string.quoted.double.xml',
        'string.quoted.single.xml',
        'string.unquoted.cdata.xml',
        'string.quoted.double.html',
        'string.quoted.single.html',
        'string.unquoted.html',
        'string.quoted.single.handlebars',
        'string.quoted.double.handlebars',
      ],
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: '#811f3f',
      },
    },
    {
      name: 'String interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: [
        'support.constant.property-value',
        'support.constant.font-name',
        'support.constant.media-type',
        'support.constant.media',
        'constant.other.color.rgb-value',
        'constant.other.rgb-value',
        'support.constant.color',
      ],
      settings: {
        foreground: '#0451a5',
      },
    },
    {
      scope: [
        'support.type.vendored.property-name',
        'support.type.property-name',
        'source.css variable',
        'source.coffee.embedded',
      ],
      settings: {
        foreground: '#e50000',
      },
    },
    {
      scope: ['support.type.property-name.json'],
      settings: {
        foreground: '#0451a5',
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: [
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: {
        foreground: '#0000ff',
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#098658',
      },
    },
    {
      scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
      settings: {
        foreground: '#800000',
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: '#0451a5',
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: '#098658',
      },
    },
    {
      name: 'coloring of the Java import and package identifiers',
      scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
      settings: {
        foreground: '#000000',
      },
    },
    {
      name: 'this.self',
      scope: 'variable.language',
      settings: {
        foreground: '#0000ff',
      },
    },
  ],
  semanticHighlighting: true,
  semanticTokenColors: {
    newOperator: '#0000ff',
    stringLiteral: '#a31515',
    customLiteral: '#000000',
    numberLiteral: '#098658',
  },
}

console.log(JSON.stringify(theme, null, 2))
