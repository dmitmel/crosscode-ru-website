// The super-minimalist JSX renderer.

export function element<P = JSX.AnyProps>(
  type: string | JSX.ComponentType<P>,
  props: P | null,
  ...children: JSX.ComponentChild[]
): JSX.VNode<P> {
  return { type, props: { ...props!, children } };
}

export const FRAGMENT = (): null => {
  throw new Error('must not be invoked');
};
export const DOCTYPE = (_props: { content: string }): null => {
  throw new Error('must not be invoked');
};
export const COMMENT = (_props: { content: string }): null => {
  throw new Error('must not be invoked');
};

// <https://html.spec.whatwg.org/multipage/syntax.html#void-elements>
const VOID_ELEMENTS = new Set<string>([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

export function renderToString(element: JSX.ComponentChild): string {
  if (element == null) return '';
  if (typeof element === 'string') return escapeHtml(String(element));

  if (Array.isArray(element)) {
    return element.map((e) => renderToString(e)).join('');
  }

  if (element.type === FRAGMENT) {
    return renderToString(element.props.children);
  } else if (element.type === DOCTYPE) {
    return `<!DOCTYPE ${renderToString(
      String(((element.props as unknown) as { content: string }).content),
    )}>`;
  } else if (element.type === COMMENT) {
    return `<!-- ${renderToString(
      String(((element.props as unknown) as { content: string }).content),
    )} -->`;
  }

  if (typeof element.type === 'function') {
    return renderToString(element.type(element.props));
  }

  // <https://www.w3.org/TR/xml/>

  let tagName = sanitizeXmlName(String(element.type));
  let str = `<${tagName}`;

  for (let attrName in element.props) {
    if (!Object.prototype.hasOwnProperty.call(element.props, attrName)) continue;
    if (attrName === 'children') continue;
    let attrValue = element.props[attrName];

    if (typeof attrValue === 'string') {
      str += ` ${sanitizeXmlName(attrName)}="${escapeHtmlAttribute(String(attrValue))}"`;
    } else if (typeof attrValue === 'boolean' && attrValue) {
      str += ` ${sanitizeXmlName(attrName)}`;
    }
  }

  str += '>';

  if (!VOID_ELEMENTS.has(tagName.toLowerCase())) {
    str += renderToString(element.props.children);

    str += `</${tagName}>`;
  }

  return str;
}

function sanitizeXmlName(s: string): string {
  let r = '';
  for (let i = 0, len = s.length; i < len; i++) {
    let c = s.charCodeAt(i);

    let valid = false;
    // <https://www.w3.org/TR/xml/#NT-NameStartChar>
    valid ||= c >= 0x61 && c <= 0x7a; // a-z
    valid ||= c >= 0x41 && c <= 0x5a; // A-Z
    valid ||= c === 0x5f; // _
    valid ||= c === 0x3a; // :
    if (s.length > 0) {
      // <https://www.w3.org/TR/xml/#NT-NameChar>
      valid ||= c === 0x2d; // -
      valid ||= c >= 0x30 && c <= 0x39; // 0-9
      valid ||= c === 0x2e; // .
    }

    if (valid) r += s.charAt(i);
  }
  return r;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHtmlAttribute(s: string): string {
  return escapeHtml(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
