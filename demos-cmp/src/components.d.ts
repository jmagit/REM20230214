/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyAjaxWait {
        "hidden": boolean;
    }
    interface MyCard {
        /**
          * cccc
         */
        "cardTitle": string;
    }
    /**
     * Ejemplo de componente en Stencil
     */
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyDemo {
        /**
          * Valor a incrementar/decrementar del contador
         */
        "delta": number;
        /**
          * Valor inicial del contador
         */
        "initValue": number;
        /**
          * Ejemplo de opcional
         */
        "nombre"?: string;
        "objeto": any;
        "visible": boolean;
    }
}
declare global {
    interface HTMLMyAjaxWaitElement extends Components.MyAjaxWait, HTMLStencilElement {
    }
    var HTMLMyAjaxWaitElement: {
        prototype: HTMLMyAjaxWaitElement;
        new (): HTMLMyAjaxWaitElement;
    };
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    /**
     * Ejemplo de componente en Stencil
     */
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyDemoElement extends Components.MyDemo, HTMLStencilElement {
    }
    var HTMLMyDemoElement: {
        prototype: HTMLMyDemoElement;
        new (): HTMLMyDemoElement;
    };
    interface HTMLElementTagNameMap {
        "my-ajax-wait": HTMLMyAjaxWaitElement;
        "my-card": HTMLMyCardElement;
        "my-component": HTMLMyComponentElement;
        "my-demo": HTMLMyDemoElement;
    }
}
declare namespace LocalJSX {
    interface MyAjaxWait {
        "hidden"?: boolean;
    }
    interface MyCard {
        /**
          * cccc
         */
        "cardTitle"?: string;
    }
    /**
     * Ejemplo de componente en Stencil
     */
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyDemo {
        /**
          * Valor a incrementar/decrementar del contador
         */
        "delta"?: number;
        /**
          * Valor inicial del contador
         */
        "initValue"?: number;
        /**
          * Ejemplo de opcional
         */
        "nombre"?: string;
        "objeto"?: any;
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "my-ajax-wait": MyAjaxWait;
        "my-card": MyCard;
        "my-component": MyComponent;
        "my-demo": MyDemo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-ajax-wait": LocalJSX.MyAjaxWait & JSXBase.HTMLAttributes<HTMLMyAjaxWaitElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            /**
             * Ejemplo de componente en Stencil
             */
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-demo": LocalJSX.MyDemo & JSXBase.HTMLAttributes<HTMLMyDemoElement>;
        }
    }
}
