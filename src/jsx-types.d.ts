// See also:
// <https://github.com/preactjs/preact/blob/master/src/index.d.ts>
// <https://github.com/preactjs/preact/blob/master/src/jsx.d.ts>
// <https://github.com/preactjs/preact/blob/master/jsx-runtime/src/index.d.ts>
// <https://github.com/infernojs/inferno/blob/master/packages/inferno/src/core/types.ts>

export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [element: string]: DOMAttributes & { children?: ComponentChild };
    }

    interface DOMAttributes {
      [name: string]: string | boolean | number;
    }

    type AnyProps = Record<PropertyKey, unknown>;

    interface VNode<P = AnyProps> {
      type: ComponentType<P> | string;
      props: P & { children: ComponentChild };
    }

    type Element = VNode;

    type ComponentType<P = AnyProps> = FunctionComponent<P>;
    type FunctionComponent<P = AnyProps> = (props: P) => Element | null;

    type ComponentChild = ComponentChild[] | Element | string | null | undefined;
  }
}
