
const LIST = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'command',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'main',
  'map',
  'mark',
  'menu',
  'meter',
  'nav',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
]

const STYLE_LIST = [
  'align-content',
  'align-items',
  'align-self',
  'alignment-adjust',
  'alignment-baseline',
  'all',
  'alt',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'azimuth',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'background-blend-mode',
  'baseline-shift',
  'bleed',
  'bookmark-label',
  'bookmark-level',
  'bookmark-state',
  'border',
  'border-color',
  'border-style',
  'border-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-style',
  'border-bottom-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-top',
  'border-top-color',
  'border-top-style',
  'border-top-width',
  'border-collapse',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-spacing',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'box-snap',
  'break-after',
  'break-before',
  'break-inside',
  'buffered-rendering',
  'caption-side',
  'clear',
  'clear-side',
  'clip',
  'clip-path',
  'clip-rule',
  'color',
  'color-adjust',
  'color-correction',
  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'columns',
  'column-count',
  'column-width',
  'contain',
  'content',
  'counter-increment',
  'counter-reset',
  'counter-set',
  'cue',
  'cue-after',
  'cue-before',
  'cursor',
  'direction',
  'display',
  'display-inside',
  'display-outside',
  'display-extras',
  'display-box',
  'dominant-baseline',
  'elevation',
  'empty-cells',
  'enable-background',
  'fill',
  'fill-opacity',
  'fill-rule',
  'filter',
  'float',
  'float-defer-column',
  'float-defer-page',
  'float-offset',
  'float-wrap',
  'flow-into',
  'flow-from',
  'flex',
  'flex-basis',
  'flex-grow',
  'flex-shrink',
  'flex-flow',
  'flex-direction',
  'flex-wrap',
  'flood-color',
  'flood-opacity',
  'font',
  'font-family',
  'font-size',
  'font-stretch',
  'font-style',
  'font-weight',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size-adjust',
  'font-synthesis',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'footnote-policy',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'grid',
  'grid-auto-flow',
  'grid-auto-columns',
  'grid-auto-rows',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'grid-area',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'hanging-punctuation',
  'height',
  'hyphenate-character',
  'hyphenate-limit-chars',
  'hyphenate-limit-last',
  'hyphenate-limit-lines',
  'hyphenate-limit-zone',
  'hyphens',
  'icon',
  'image-orientation',
  'image-resolution',
  'image-rendering',
  'ime',
  'ime-align',
  'ime-mode',
  'ime-offset',
  'ime-width',
  'initial-letters',
  'inline-box-align',
  'isolation',
  'justify-content',
  'justify-items',
  'justify-self',
  'kerning',
  'left',
  'letter-spacing',
  'lighting-color',
  'line-box-contain',
  'line-break',
  'line-grid',
  'line-height',
  'line-slack',
  'line-snap',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marker',
  'marker-end',
  'marker-mid',
  'marker-pattern',
  'marker-segment',
  'marker-start',
  'marker-knockout-left',
  'marker-knockout-right',
  'marker-side',
  'marks',
  'marquee-direction',
  'marquee-play-count',
  'marquee-speed',
  'marquee-style',
  'mask',
  'mask-image',
  'mask-repeat',
  'mask-position',
  'mask-clip',
  'mask-origin',
  'mask-size',
  'mask-box',
  'mask-box-outset',
  'mask-box-repeat',
  'mask-box-slice',
  'mask-box-source',
  'mask-box-width',
  'mask-type',
  'max-height',
  'max-lines',
  'max-width',
  'min-height',
  'min-width',
  'mix-blend-mode',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'object-fit',
  'object-position',
  'offset-after',
  'offset-before',
  'offset-end',
  'offset-start',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-style',
  'outline-width',
  'outline-offset',
  'overflow',
  'overflow-x',
  'overflow-y',
  'overflow-style',
  'overflow-wrap',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'paint-order',
  'pause',
  'pause-after',
  'pause-before',
  'perspective',
  'perspective-origin',
  'pitch',
  'pitch-range',
  'play-during',
  'pointer-events',
  'position',
  'quotes',
  'region-fragment',
  'resize',
  'rest',
  'rest-after',
  'rest-before',
  'richness',
  'right',
  'ruby-align',
  'ruby-merge',
  'ruby-position',
  'scroll-behavior',
  'scroll-snap-coordinate',
  'scroll-snap-destination',
  'scroll-snap-points-x',
  'scroll-snap-points-y',
  'scroll-snap-type',
  'shape-image-threshold',
  'shape-inside',
  'shape-margin',
  'shape-outside',
  'shape-padding',
  'shape-rendering',
  'size',
  'speak',
  'speak-as',
  'speak-header',
  'speak-numeral',
  'speak-punctuation',
  'speech-rate',
  'stop-color',
  'stop-opacity',
  'stress',
  'string-set',
  'stroke',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-all',
  'text-align-last',
  'text-anchor',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-decoration-skip',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-emphasis-skip',
  'text-height',
  'text-indent',
  'text-justify',
  'text-orientation',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-size-adjust',
  'text-space-collapse',
  'text-spacing',
  'text-transform',
  'text-underline-position',
  'text-wrap',
  'top',
  'touch-action',
  'transform',
  'transform-box',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing',
  'unicode-bidi',
  'vector-effect',
  'vertical-align',
  'visibility',
  'voice-balance',
  'voice-duration',
  'voice-family',
  'voice-pitch',
  'voice-range',
  'voice-rate',
  'voice-stress',
  'voice-volumn',
  'volume',
  'white-space',
  'widows',
  'width',
  'will-change',
  'word-break',
  'word-spacing',
  'word-wrap',
  'wrap-flow',
  'wrap-through',
  'writing-mode',
  'z-index',
].reduce((m, x) => {
  m[x] = true
  return m
}, {})

function removeFromParent(el) {
  el.parentNode.removeChild(el)
}

function load(tag, base) {
  return loadFromPool(tag, base) || make(tag)
}

function loadFromPool(tag, base) {
  return base.pool[tag] && base.pool[tag].pop()
}

function kill(nativeElement) {
  let stack = [nativeElement]
  let els = []
  while (stack.length) {
    const el = stack.shift()
    el.parentNode.removeChild(el)
    node.handlers.forEach(({ type, handler }) => {
      el.removeEventListener(type, handler)
    })
    Object.keys(el.style).forEach(name => {
      el.style[name] = undefined;
    })
    el.attributes.forEach(attribute => {
      el.removeAttribute(attribute.name)
    })
    el.classList.remove(...el.classList);
    el.children.forEach(child => {
      stack.push(child)
    })
    els.push(el)
  }
  els.forEach(el => {
    // clear out any remaining text
    el.innerHTML = ''
    addNativeElementToPool(el)
  })
}

function addNativeElementToPool(el, store) {
  const pool = store.pool[el.tagName] = store.pool[el.tagName] || []
  if (pool.length < store.maxPoolSize) {
    pool.push(el)
  }
}

function make(tag) {
  return document.createElement(tag)
}

function bind(el, mesh) {
  for (const name in mesh.attributes) {
    const value = mesh.attributes[name]
    el.setAttribute(name, value)
  }
  for (const name in mesh.styles) {
    const value = mesh.styles[name]
    el.style[name] = value
  }
  if (mesh.className) {
    el.classList.add(mesh.className)
  }
  if (mesh.handlers) {
    mesh.handlers.forEach(handler => {
      el.addEventListener(handler.name, handler.handle)
    })
  }
  mesh.nativeElement = el
}

module.exports = {
  removeFromParent,
  kill,
  make,
  bind,
  load,
  LIST,
  STYLE_LIST
}