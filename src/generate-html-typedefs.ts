import * as fs from 'fs';

// HTMLDataV1 typedefs {{{
// Copied from <https://github.com/microsoft/vscode-html-languageservice/blob/79fae205923b09fe7fc52edc737bccf08a5a9b04/src/htmlLanguageTypes.ts#L121-L157>

// Copied from <https://github.com/microsoft/vscode-languageserver-node/blob/0b3e70ff3da4d0919442a561572b2aa9e2ce993a/types/src/main.ts#L1795-L1829>
export interface MarkupContent {
  kind: 'plaintext' | 'markdown';
  value: string;
}

interface IReference {
  name: string;
  url: string;
}

interface ITagData {
  name: string;
  description?: string | MarkupContent;
  attributes: IAttributeData[];
  references?: IReference[];
}

interface IAttributeData {
  name: string;
  description?: string | MarkupContent;
  valueSet?: string;
  values?: IValueData[];
  references?: IReference[];
}

interface IValueData {
  name: string;
  description?: string | MarkupContent;
  references?: IReference[];
}

interface IValueSet {
  name: string;
  values: IValueData[];
}

interface HTMLDataV1 {
  version: 1 | 1.1;
  tags?: ITagData[];
  globalAttributes?: IAttributeData[];
  valueSets?: IValueSet[];
}

// }}}

function main(): void {
  // eslint-disable-next-line node/no-unpublished-require
  let dataPath = require.resolve('vscode-web-custom-data/data/browsers.html-data.json');
  let data: HTMLDataV1 = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  if (Math.trunc(data.version) !== 1) {
    throw new Error('Unsupported version of HTMLData');
  }

  data.tags ??= [];
  data.globalAttributes ??= [];
  data.valueSets ??= [];

  // Add RDFa extensions (which are apparently included in React's typedefs) {{{
  // <https://www.w3.org/TR/html-rdfa/#h-extensions-to-the-html5-syntax>
  // <https://en.wikipedia.org/wiki/RDFa#Essence>
  data.globalAttributes.push(
    { name: 'about' },
    { name: 'datatype' },
    { name: 'inlist' },
    { name: 'prefix' },
    { name: 'property' },
    { name: 'resource' },
    { name: 'typeof' },
    { name: 'vocab' },
  );
  // }}}

  let valueSetsMap = new Map<string, IValueSet>(data.valueSets?.map((x) => [x.name, x]));

  function makeAttributeValues(attr: IAttributeData): string {
    if (attr.values != null) {
      throw new Error(`Unsupported attribute '${attr.name}'`);
    }
    let typeVariants = ['string'];
    if (attr.valueSet === 'v') {
      typeVariants = ['"true"', '"false"', 'boolean'];
    } else if (attr.valueSet != null) {
      let valueSet = valueSetsMap.get(attr.valueSet);
      if (valueSet == null) {
        throw new Error(`Value set '${attr.valueSet}' not found`);
      }
      let possibleValues = new Set<string>(valueSet.values.map((x) => JSON.stringify(x.name)));
      typeVariants = Array.from(possibleValues);
      if (possibleValues.has('"true"') && possibleValues.has('"false"')) {
        typeVariants.push('boolean');
      }
    }
    return typeVariants.join(' | ');
  }

  console.log('export {};');
  console.log('');
  console.log('declare global {');
  console.log('  namespace JSX {');

  console.log('    interface HTMLAttributes extends DOMAttributes {');
  let emittedGlobalAttrs = new Set<string>();
  for (let attr of data.globalAttributes ?? []) {
    if (emittedGlobalAttrs.has(attr.name)) continue;
    console.log(`      ${makeIdentifier(attr.name)}?: ${makeAttributeValues(attr)};`);
    emittedGlobalAttrs.add(attr.name);
  }
  console.log('    }');

  let tagNamesToTypesMap = new Map<string, string>();

  for (let tag of data.tags ?? []) {
    if (!isIdentifier(tag.name)) {
      throw new Error(`Name of the tag '${tag.name}' is not an identifier`);
    }
    let typeName = `HTML${tag.name.charAt(0).toUpperCase()}${tag.name.slice(1)}Attributes`;
    tagNamesToTypesMap.set(tag.name, typeName);

    console.log('');
    console.log(`    interface ${typeName} extends HTMLAttributes {`);
    let emittedTagAttrs = new Set<string>();
    for (let attr of tag.attributes) {
      if (emittedTagAttrs.has(attr.name) || emittedGlobalAttrs.has(attr.name)) continue;
      console.log(`      ${makeIdentifier(attr.name)}?: ${makeAttributeValues(attr)};`);
      emittedTagAttrs.add(attr.name);
    }
    console.log('    }');
  }

  console.log('');
  console.log('    interface IntrinsicElements {');
  for (let [tagName, typeName] of tagNamesToTypesMap) {
    console.log(`      ${tagName}: ${typeName};`);
  }
  console.log('    }');

  console.log('  }');
  console.log('}');
}

function isIdentifier(s: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(s);
}

function makeIdentifier(s: string): string {
  return isIdentifier(s) ? s : JSON.stringify(s);
}

main();
