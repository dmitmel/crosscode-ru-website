// See also:
// <https://github.com/preactjs/preact/blob/master/src/index.d.ts>
// <https://github.com/preactjs/preact/blob/master/src/jsx.d.ts>
// <https://github.com/preactjs/preact/blob/master/jsx-runtime/src/index.d.ts>
// <https://github.com/infernojs/inferno/blob/master/packages/inferno/src/core/types.ts>

import './jsx-types-gen.d.ts';

export {};

declare global {
  namespace JSX {
    // <https://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking>
    interface ElementAttributesProperty {
      // eslint-disable-next-line @typescript-eslint/ban-types
      props: {};
    }

    // <https://www.typescriptlang.org/docs/handbook/jsx.html#children-type-checking>
    interface ElementChildrenAttribute {
      // eslint-disable-next-line @typescript-eslint/ban-types
      children: {};
    }

    // // <https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements>
    // interface IntrinsicElements {
    //   [element: string]: DOMAttributes;
    // }

    // <https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type>
    type Element = VNode;

    // <https://www.typescriptlang.org/docs/handbook/jsx.html#class-component>
    interface ElementClass {
      render(): JSX.Element;
    }

    // Used in the generated types.
    interface DOMAttributes {
      children?: ComponentChild;
    }

    type AnyProps = Record<PropertyKey, unknown>;

    interface VNode<P = AnyProps> {
      type: ComponentType<P> | string;
      props: P & { children: ComponentChild };
    }

    type ComponentType<P = AnyProps> = FunctionComponent<P>;
    type FunctionComponent<P = AnyProps> = (props: P) => Element | null;

    type ComponentChild = ComponentChild[] | Element | string | null | undefined;
  }
}
