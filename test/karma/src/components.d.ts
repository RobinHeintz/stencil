/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AttributeBasicRoot {

    }
  }

  interface HTMLAttributeBasicRootElement extends StencilComponents.AttributeBasicRoot, HTMLStencilElement {}

  var HTMLAttributeBasicRootElement: {
    prototype: HTMLAttributeBasicRootElement;
    new (): HTMLAttributeBasicRootElement;
  };
  interface HTMLElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement;
  }
  interface ElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'attribute-basic-root': JSXElements.AttributeBasicRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AttributeBasicRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AttributeBasic {
      'customAttr': string;
      'multiWord': string;
      'single': string;
    }
  }

  interface HTMLAttributeBasicElement extends StencilComponents.AttributeBasic, HTMLStencilElement {}

  var HTMLAttributeBasicElement: {
    prototype: HTMLAttributeBasicElement;
    new (): HTMLAttributeBasicElement;
  };
  interface HTMLElementTagNameMap {
    'attribute-basic': HTMLAttributeBasicElement;
  }
  interface ElementTagNameMap {
    'attribute-basic': HTMLAttributeBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'attribute-basic': JSXElements.AttributeBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface AttributeBasicAttributes extends HTMLAttributes {
      'customAttr'?: string;
      'multiWord'?: string;
      'single'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AttributeComplex {
      'bool0': boolean;
      'bool1': boolean;
      'bool2': boolean;
      'getInstance': () => this;
      'nu0': number;
      'nu1': number;
      'str0': string;
      'str1': string;
    }
  }

  interface HTMLAttributeComplexElement extends StencilComponents.AttributeComplex, HTMLStencilElement {}

  var HTMLAttributeComplexElement: {
    prototype: HTMLAttributeComplexElement;
    new (): HTMLAttributeComplexElement;
  };
  interface HTMLElementTagNameMap {
    'attribute-complex': HTMLAttributeComplexElement;
  }
  interface ElementTagNameMap {
    'attribute-complex': HTMLAttributeComplexElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'attribute-complex': JSXElements.AttributeComplexAttributes;
    }
  }
  namespace JSXElements {
    export interface AttributeComplexAttributes extends HTMLAttributes {
      'bool0'?: boolean;
      'bool1'?: boolean;
      'bool2'?: boolean;
      'nu0'?: number;
      'nu1'?: number;
      'str0'?: string;
      'str1'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ConditionalBasic {

    }
  }

  interface HTMLConditionalBasicElement extends StencilComponents.ConditionalBasic, HTMLStencilElement {}

  var HTMLConditionalBasicElement: {
    prototype: HTMLConditionalBasicElement;
    new (): HTMLConditionalBasicElement;
  };
  interface HTMLElementTagNameMap {
    'conditional-basic': HTMLConditionalBasicElement;
  }
  interface ElementTagNameMap {
    'conditional-basic': HTMLConditionalBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'conditional-basic': JSXElements.ConditionalBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface ConditionalBasicAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ConditionalRerenderRoot {

    }
  }

  interface HTMLConditionalRerenderRootElement extends StencilComponents.ConditionalRerenderRoot, HTMLStencilElement {}

  var HTMLConditionalRerenderRootElement: {
    prototype: HTMLConditionalRerenderRootElement;
    new (): HTMLConditionalRerenderRootElement;
  };
  interface HTMLElementTagNameMap {
    'conditional-rerender-root': HTMLConditionalRerenderRootElement;
  }
  interface ElementTagNameMap {
    'conditional-rerender-root': HTMLConditionalRerenderRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'conditional-rerender-root': JSXElements.ConditionalRerenderRootAttributes;
    }
  }
  namespace JSXElements {
    export interface ConditionalRerenderRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ConditionalRerender {

    }
  }

  interface HTMLConditionalRerenderElement extends StencilComponents.ConditionalRerender, HTMLStencilElement {}

  var HTMLConditionalRerenderElement: {
    prototype: HTMLConditionalRerenderElement;
    new (): HTMLConditionalRerenderElement;
  };
  interface HTMLElementTagNameMap {
    'conditional-rerender': HTMLConditionalRerenderElement;
  }
  interface ElementTagNameMap {
    'conditional-rerender': HTMLConditionalRerenderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'conditional-rerender': JSXElements.ConditionalRerenderAttributes;
    }
  }
  namespace JSXElements {
    export interface ConditionalRerenderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DynamicImport {
      'update': () => Promise<void>;
    }
  }

  interface HTMLDynamicImportElement extends StencilComponents.DynamicImport, HTMLStencilElement {}

  var HTMLDynamicImportElement: {
    prototype: HTMLDynamicImportElement;
    new (): HTMLDynamicImportElement;
  };
  interface HTMLElementTagNameMap {
    'dynamic-import': HTMLDynamicImportElement;
  }
  interface ElementTagNameMap {
    'dynamic-import': HTMLDynamicImportElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dynamic-import': JSXElements.DynamicImportAttributes;
    }
  }
  namespace JSXElements {
    export interface DynamicImportAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface EsmImport {
      'propVal': number;
      'someMethod': () => void;
    }
  }

  interface HTMLEsmImportElement extends StencilComponents.EsmImport, HTMLStencilElement {}

  var HTMLEsmImportElement: {
    prototype: HTMLEsmImportElement;
    new (): HTMLEsmImportElement;
  };
  interface HTMLElementTagNameMap {
    'esm-import': HTMLEsmImportElement;
  }
  interface ElementTagNameMap {
    'esm-import': HTMLEsmImportElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'esm-import': JSXElements.EsmImportAttributes;
    }
  }
  namespace JSXElements {
    export interface EsmImportAttributes extends HTMLAttributes {
      'onSomeEvent'?: (event: CustomEvent) => void;
      'propVal'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleBasicA {

    }
  }

  interface HTMLLifecycleBasicAElement extends StencilComponents.LifecycleBasicA, HTMLStencilElement {}

  var HTMLLifecycleBasicAElement: {
    prototype: HTMLLifecycleBasicAElement;
    new (): HTMLLifecycleBasicAElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-basic-a': HTMLLifecycleBasicAElement;
  }
  interface ElementTagNameMap {
    'lifecycle-basic-a': HTMLLifecycleBasicAElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-basic-a': JSXElements.LifecycleBasicAAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleBasicAAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleBasicB {
      'value': string;
    }
  }

  interface HTMLLifecycleBasicBElement extends StencilComponents.LifecycleBasicB, HTMLStencilElement {}

  var HTMLLifecycleBasicBElement: {
    prototype: HTMLLifecycleBasicBElement;
    new (): HTMLLifecycleBasicBElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-basic-b': HTMLLifecycleBasicBElement;
  }
  interface ElementTagNameMap {
    'lifecycle-basic-b': HTMLLifecycleBasicBElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-basic-b': JSXElements.LifecycleBasicBAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleBasicBAttributes extends HTMLAttributes {
      'onLifecycleLoad'?: (event: CustomEvent) => void;
      'onLifecycleUpdate'?: (event: CustomEvent) => void;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleBasicC {
      'value': string;
    }
  }

  interface HTMLLifecycleBasicCElement extends StencilComponents.LifecycleBasicC, HTMLStencilElement {}

  var HTMLLifecycleBasicCElement: {
    prototype: HTMLLifecycleBasicCElement;
    new (): HTMLLifecycleBasicCElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-basic-c': HTMLLifecycleBasicCElement;
  }
  interface ElementTagNameMap {
    'lifecycle-basic-c': HTMLLifecycleBasicCElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-basic-c': JSXElements.LifecycleBasicCAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleBasicCAttributes extends HTMLAttributes {
      'onLifecycleLoad'?: (event: CustomEvent) => void;
      'onLifecycleUpdate'?: (event: CustomEvent) => void;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleUnloadA {

    }
  }

  interface HTMLLifecycleUnloadAElement extends StencilComponents.LifecycleUnloadA, HTMLStencilElement {}

  var HTMLLifecycleUnloadAElement: {
    prototype: HTMLLifecycleUnloadAElement;
    new (): HTMLLifecycleUnloadAElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-unload-a': HTMLLifecycleUnloadAElement;
  }
  interface ElementTagNameMap {
    'lifecycle-unload-a': HTMLLifecycleUnloadAElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-unload-a': JSXElements.LifecycleUnloadAAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleUnloadAAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleUnloadB {

    }
  }

  interface HTMLLifecycleUnloadBElement extends StencilComponents.LifecycleUnloadB, HTMLStencilElement {}

  var HTMLLifecycleUnloadBElement: {
    prototype: HTMLLifecycleUnloadBElement;
    new (): HTMLLifecycleUnloadBElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-unload-b': HTMLLifecycleUnloadBElement;
  }
  interface ElementTagNameMap {
    'lifecycle-unload-b': HTMLLifecycleUnloadBElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-unload-b': JSXElements.LifecycleUnloadBAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleUnloadBAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LifecycleUnloadRoot {

    }
  }

  interface HTMLLifecycleUnloadRootElement extends StencilComponents.LifecycleUnloadRoot, HTMLStencilElement {}

  var HTMLLifecycleUnloadRootElement: {
    prototype: HTMLLifecycleUnloadRootElement;
    new (): HTMLLifecycleUnloadRootElement;
  };
  interface HTMLElementTagNameMap {
    'lifecycle-unload-root': HTMLLifecycleUnloadRootElement;
  }
  interface ElementTagNameMap {
    'lifecycle-unload-root': HTMLLifecycleUnloadRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lifecycle-unload-root': JSXElements.LifecycleUnloadRootAttributes;
    }
  }
  namespace JSXElements {
    export interface LifecycleUnloadRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ReflectToAttr {
      'bool': boolean;
      'dynamicNu': number;
      'dynamicStr': string;
      'nu': number;
      'null': string;
      'otherBool': boolean;
      'str': string;
      'undef': string;
    }
  }

  interface HTMLReflectToAttrElement extends StencilComponents.ReflectToAttr, HTMLStencilElement {}

  var HTMLReflectToAttrElement: {
    prototype: HTMLReflectToAttrElement;
    new (): HTMLReflectToAttrElement;
  };
  interface HTMLElementTagNameMap {
    'reflect-to-attr': HTMLReflectToAttrElement;
  }
  interface ElementTagNameMap {
    'reflect-to-attr': HTMLReflectToAttrElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'reflect-to-attr': JSXElements.ReflectToAttrAttributes;
    }
  }
  namespace JSXElements {
    export interface ReflectToAttrAttributes extends HTMLAttributes {
      'bool'?: boolean;
      'dynamicNu'?: number;
      'dynamicStr'?: string;
      'nu'?: number;
      'null'?: string;
      'otherBool'?: boolean;
      'str'?: string;
      'undef'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ShadowDomArrayRoot {

    }
  }

  interface HTMLShadowDomArrayRootElement extends StencilComponents.ShadowDomArrayRoot, HTMLStencilElement {}

  var HTMLShadowDomArrayRootElement: {
    prototype: HTMLShadowDomArrayRootElement;
    new (): HTMLShadowDomArrayRootElement;
  };
  interface HTMLElementTagNameMap {
    'shadow-dom-array-root': HTMLShadowDomArrayRootElement;
  }
  interface ElementTagNameMap {
    'shadow-dom-array-root': HTMLShadowDomArrayRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'shadow-dom-array-root': JSXElements.ShadowDomArrayRootAttributes;
    }
  }
  namespace JSXElements {
    export interface ShadowDomArrayRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ShadowDomArray {
      'values': number[];
    }
  }

  interface HTMLShadowDomArrayElement extends StencilComponents.ShadowDomArray, HTMLStencilElement {}

  var HTMLShadowDomArrayElement: {
    prototype: HTMLShadowDomArrayElement;
    new (): HTMLShadowDomArrayElement;
  };
  interface HTMLElementTagNameMap {
    'shadow-dom-array': HTMLShadowDomArrayElement;
  }
  interface ElementTagNameMap {
    'shadow-dom-array': HTMLShadowDomArrayElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'shadow-dom-array': JSXElements.ShadowDomArrayAttributes;
    }
  }
  namespace JSXElements {
    export interface ShadowDomArrayAttributes extends HTMLAttributes {
      'values'?: number[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotArrayComplexRoot {

    }
  }

  interface HTMLSlotArrayComplexRootElement extends StencilComponents.SlotArrayComplexRoot, HTMLStencilElement {}

  var HTMLSlotArrayComplexRootElement: {
    prototype: HTMLSlotArrayComplexRootElement;
    new (): HTMLSlotArrayComplexRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-array-complex-root': HTMLSlotArrayComplexRootElement;
  }
  interface ElementTagNameMap {
    'slot-array-complex-root': HTMLSlotArrayComplexRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-array-complex-root': JSXElements.SlotArrayComplexRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotArrayComplexRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotArrayComplex {

    }
  }

  interface HTMLSlotArrayComplexElement extends StencilComponents.SlotArrayComplex, HTMLStencilElement {}

  var HTMLSlotArrayComplexElement: {
    prototype: HTMLSlotArrayComplexElement;
    new (): HTMLSlotArrayComplexElement;
  };
  interface HTMLElementTagNameMap {
    'slot-array-complex': HTMLSlotArrayComplexElement;
  }
  interface ElementTagNameMap {
    'slot-array-complex': HTMLSlotArrayComplexElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-array-complex': JSXElements.SlotArrayComplexAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotArrayComplexAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotArrayTop {

    }
  }

  interface HTMLSlotArrayTopElement extends StencilComponents.SlotArrayTop, HTMLStencilElement {}

  var HTMLSlotArrayTopElement: {
    prototype: HTMLSlotArrayTopElement;
    new (): HTMLSlotArrayTopElement;
  };
  interface HTMLElementTagNameMap {
    'slot-array-top': HTMLSlotArrayTopElement;
  }
  interface ElementTagNameMap {
    'slot-array-top': HTMLSlotArrayTopElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-array-top': JSXElements.SlotArrayTopAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotArrayTopAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotBasicRoot {

    }
  }

  interface HTMLSlotBasicRootElement extends StencilComponents.SlotBasicRoot, HTMLStencilElement {}

  var HTMLSlotBasicRootElement: {
    prototype: HTMLSlotBasicRootElement;
    new (): HTMLSlotBasicRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-basic-root': HTMLSlotBasicRootElement;
  }
  interface ElementTagNameMap {
    'slot-basic-root': HTMLSlotBasicRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-basic-root': JSXElements.SlotBasicRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotBasicRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotBasic {

    }
  }

  interface HTMLSlotBasicElement extends StencilComponents.SlotBasic, HTMLStencilElement {}

  var HTMLSlotBasicElement: {
    prototype: HTMLSlotBasicElement;
    new (): HTMLSlotBasicElement;
  };
  interface HTMLElementTagNameMap {
    'slot-basic': HTMLSlotBasicElement;
  }
  interface ElementTagNameMap {
    'slot-basic': HTMLSlotBasicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-basic': JSXElements.SlotBasicAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotBasicAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotDynamicWrapperRoot {

    }
  }

  interface HTMLSlotDynamicWrapperRootElement extends StencilComponents.SlotDynamicWrapperRoot, HTMLStencilElement {}

  var HTMLSlotDynamicWrapperRootElement: {
    prototype: HTMLSlotDynamicWrapperRootElement;
    new (): HTMLSlotDynamicWrapperRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-dynamic-wrapper-root': HTMLSlotDynamicWrapperRootElement;
  }
  interface ElementTagNameMap {
    'slot-dynamic-wrapper-root': HTMLSlotDynamicWrapperRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-dynamic-wrapper-root': JSXElements.SlotDynamicWrapperRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotDynamicWrapperRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotDynamicWrapper {
      'tag': string;
    }
  }

  interface HTMLSlotDynamicWrapperElement extends StencilComponents.SlotDynamicWrapper, HTMLStencilElement {}

  var HTMLSlotDynamicWrapperElement: {
    prototype: HTMLSlotDynamicWrapperElement;
    new (): HTMLSlotDynamicWrapperElement;
  };
  interface HTMLElementTagNameMap {
    'slot-dynamic-wrapper': HTMLSlotDynamicWrapperElement;
  }
  interface ElementTagNameMap {
    'slot-dynamic-wrapper': HTMLSlotDynamicWrapperElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-dynamic-wrapper': JSXElements.SlotDynamicWrapperAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotDynamicWrapperAttributes extends HTMLAttributes {
      'tag'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotFallbackRoot {

    }
  }

  interface HTMLSlotFallbackRootElement extends StencilComponents.SlotFallbackRoot, HTMLStencilElement {}

  var HTMLSlotFallbackRootElement: {
    prototype: HTMLSlotFallbackRootElement;
    new (): HTMLSlotFallbackRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-fallback-root': HTMLSlotFallbackRootElement;
  }
  interface ElementTagNameMap {
    'slot-fallback-root': HTMLSlotFallbackRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-fallback-root': JSXElements.SlotFallbackRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotFallbackRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotFallback {
      'inc': number;
    }
  }

  interface HTMLSlotFallbackElement extends StencilComponents.SlotFallback, HTMLStencilElement {}

  var HTMLSlotFallbackElement: {
    prototype: HTMLSlotFallbackElement;
    new (): HTMLSlotFallbackElement;
  };
  interface HTMLElementTagNameMap {
    'slot-fallback': HTMLSlotFallbackElement;
  }
  interface ElementTagNameMap {
    'slot-fallback': HTMLSlotFallbackElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-fallback': JSXElements.SlotFallbackAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotFallbackAttributes extends HTMLAttributes {
      'inc'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotHtml {
      'inc': number;
    }
  }

  interface HTMLSlotHtmlElement extends StencilComponents.SlotHtml, HTMLStencilElement {}

  var HTMLSlotHtmlElement: {
    prototype: HTMLSlotHtmlElement;
    new (): HTMLSlotHtmlElement;
  };
  interface HTMLElementTagNameMap {
    'slot-html': HTMLSlotHtmlElement;
  }
  interface ElementTagNameMap {
    'slot-html': HTMLSlotHtmlElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-html': JSXElements.SlotHtmlAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotHtmlAttributes extends HTMLAttributes {
      'inc'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotLightDomRoot {

    }
  }

  interface HTMLSlotLightDomRootElement extends StencilComponents.SlotLightDomRoot, HTMLStencilElement {}

  var HTMLSlotLightDomRootElement: {
    prototype: HTMLSlotLightDomRootElement;
    new (): HTMLSlotLightDomRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-light-dom-root': HTMLSlotLightDomRootElement;
  }
  interface ElementTagNameMap {
    'slot-light-dom-root': HTMLSlotLightDomRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-light-dom-root': JSXElements.SlotLightDomRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotLightDomRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotLightDomContent {

    }
  }

  interface HTMLSlotLightDomContentElement extends StencilComponents.SlotLightDomContent, HTMLStencilElement {}

  var HTMLSlotLightDomContentElement: {
    prototype: HTMLSlotLightDomContentElement;
    new (): HTMLSlotLightDomContentElement;
  };
  interface HTMLElementTagNameMap {
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
  }
  interface ElementTagNameMap {
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-light-dom-content': JSXElements.SlotLightDomContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotLightDomContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotReorderRoot {

    }
  }

  interface HTMLSlotReorderRootElement extends StencilComponents.SlotReorderRoot, HTMLStencilElement {}

  var HTMLSlotReorderRootElement: {
    prototype: HTMLSlotReorderRootElement;
    new (): HTMLSlotReorderRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-reorder-root': HTMLSlotReorderRootElement;
  }
  interface ElementTagNameMap {
    'slot-reorder-root': HTMLSlotReorderRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-reorder-root': JSXElements.SlotReorderRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotReorderRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotReorder {
      'reordered': boolean;
    }
  }

  interface HTMLSlotReorderElement extends StencilComponents.SlotReorder, HTMLStencilElement {}

  var HTMLSlotReorderElement: {
    prototype: HTMLSlotReorderElement;
    new (): HTMLSlotReorderElement;
  };
  interface HTMLElementTagNameMap {
    'slot-reorder': HTMLSlotReorderElement;
  }
  interface ElementTagNameMap {
    'slot-reorder': HTMLSlotReorderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-reorder': JSXElements.SlotReorderAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotReorderAttributes extends HTMLAttributes {
      'reordered'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotReplaceWrapperRoot {

    }
  }

  interface HTMLSlotReplaceWrapperRootElement extends StencilComponents.SlotReplaceWrapperRoot, HTMLStencilElement {}

  var HTMLSlotReplaceWrapperRootElement: {
    prototype: HTMLSlotReplaceWrapperRootElement;
    new (): HTMLSlotReplaceWrapperRootElement;
  };
  interface HTMLElementTagNameMap {
    'slot-replace-wrapper-root': HTMLSlotReplaceWrapperRootElement;
  }
  interface ElementTagNameMap {
    'slot-replace-wrapper-root': HTMLSlotReplaceWrapperRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-replace-wrapper-root': JSXElements.SlotReplaceWrapperRootAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotReplaceWrapperRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotReplaceWrapper {
      'href': string;
    }
  }

  interface HTMLSlotReplaceWrapperElement extends StencilComponents.SlotReplaceWrapper, HTMLStencilElement {}

  var HTMLSlotReplaceWrapperElement: {
    prototype: HTMLSlotReplaceWrapperElement;
    new (): HTMLSlotReplaceWrapperElement;
  };
  interface HTMLElementTagNameMap {
    'slot-replace-wrapper': HTMLSlotReplaceWrapperElement;
  }
  interface ElementTagNameMap {
    'slot-replace-wrapper': HTMLSlotReplaceWrapperElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-replace-wrapper': JSXElements.SlotReplaceWrapperAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotReplaceWrapperAttributes extends HTMLAttributes {
      'href'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SvgAttr {

    }
  }

  interface HTMLSvgAttrElement extends StencilComponents.SvgAttr, HTMLStencilElement {}

  var HTMLSvgAttrElement: {
    prototype: HTMLSvgAttrElement;
    new (): HTMLSvgAttrElement;
  };
  interface HTMLElementTagNameMap {
    'svg-attr': HTMLSvgAttrElement;
  }
  interface ElementTagNameMap {
    'svg-attr': HTMLSvgAttrElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'svg-attr': JSXElements.SvgAttrAttributes;
    }
  }
  namespace JSXElements {
    export interface SvgAttrAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SvgClass {

    }
  }

  interface HTMLSvgClassElement extends StencilComponents.SvgClass, HTMLStencilElement {}

  var HTMLSvgClassElement: {
    prototype: HTMLSvgClassElement;
    new (): HTMLSvgClassElement;
  };
  interface HTMLElementTagNameMap {
    'svg-class': HTMLSvgClassElement;
  }
  interface ElementTagNameMap {
    'svg-class': HTMLSvgClassElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'svg-class': JSXElements.SvgClassAttributes;
    }
  }
  namespace JSXElements {
    export interface SvgClassAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface Tag3dComponent {

    }
  }

  interface HTMLTag3dComponentElement extends StencilComponents.Tag3dComponent, HTMLStencilElement {}

  var HTMLTag3dComponentElement: {
    prototype: HTMLTag3dComponentElement;
    new (): HTMLTag3dComponentElement;
  };
  interface HTMLElementTagNameMap {
    'tag-3d-component': HTMLTag3dComponentElement;
  }
  interface ElementTagNameMap {
    'tag-3d-component': HTMLTag3dComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-3d-component': JSXElements.Tag3dComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface Tag3dComponentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface Tag88 {

    }
  }

  interface HTMLTag88Element extends StencilComponents.Tag88, HTMLStencilElement {}

  var HTMLTag88Element: {
    prototype: HTMLTag88Element;
    new (): HTMLTag88Element;
  };
  interface HTMLElementTagNameMap {
    'tag-88': HTMLTag88Element;
  }
  interface ElementTagNameMap {
    'tag-88': HTMLTag88Element;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tag-88': JSXElements.Tag88Attributes;
    }
  }
  namespace JSXElements {
    export interface Tag88Attributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;