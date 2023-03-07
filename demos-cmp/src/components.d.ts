/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { NotificationType } from "./utils/notification-service";
export { NotificationType } from "./utils/notification-service";
export namespace Components {
    interface MyAjaxWait {
        "hidden": boolean;
    }
    interface MyAlert {
        "message": string;
        "type": NotificationType;
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
    interface MyContactos {
    }
    interface MyContactosForm {
        "elemento": {};
        "isAdd": boolean;
    }
    interface MyContactosList {
        "listado": any[];
        "pagina": number;
        "paginas": number;
    }
    interface MyContactosView {
        "elemento": {};
    }
    /**
     * Demo de componente contador
     */
    interface MyContador {
        /**
          * Valor a incrementar/decrementar del contador
         */
        "delta": number;
        /**
          * Valor inicial del contador
         */
        "init": number;
        /**
          * Reinicia el contador
         */
        "reset": () => Promise<void>;
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
    interface MyMuro {
    }
    interface MyNotifications {
    }
}
export interface MyAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyAlertElement;
}
export interface MyContactosFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyContactosFormElement;
}
export interface MyContactosListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyContactosListElement;
}
export interface MyContactosViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyContactosViewElement;
}
export interface MyContadorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyContadorElement;
}
declare global {
    interface HTMLMyAjaxWaitElement extends Components.MyAjaxWait, HTMLStencilElement {
    }
    var HTMLMyAjaxWaitElement: {
        prototype: HTMLMyAjaxWaitElement;
        new (): HTMLMyAjaxWaitElement;
    };
    interface HTMLMyAlertElement extends Components.MyAlert, HTMLStencilElement {
    }
    var HTMLMyAlertElement: {
        prototype: HTMLMyAlertElement;
        new (): HTMLMyAlertElement;
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
    interface HTMLMyContactosElement extends Components.MyContactos, HTMLStencilElement {
    }
    var HTMLMyContactosElement: {
        prototype: HTMLMyContactosElement;
        new (): HTMLMyContactosElement;
    };
    interface HTMLMyContactosFormElement extends Components.MyContactosForm, HTMLStencilElement {
    }
    var HTMLMyContactosFormElement: {
        prototype: HTMLMyContactosFormElement;
        new (): HTMLMyContactosFormElement;
    };
    interface HTMLMyContactosListElement extends Components.MyContactosList, HTMLStencilElement {
    }
    var HTMLMyContactosListElement: {
        prototype: HTMLMyContactosListElement;
        new (): HTMLMyContactosListElement;
    };
    interface HTMLMyContactosViewElement extends Components.MyContactosView, HTMLStencilElement {
    }
    var HTMLMyContactosViewElement: {
        prototype: HTMLMyContactosViewElement;
        new (): HTMLMyContactosViewElement;
    };
    /**
     * Demo de componente contador
     */
    interface HTMLMyContadorElement extends Components.MyContador, HTMLStencilElement {
    }
    var HTMLMyContadorElement: {
        prototype: HTMLMyContadorElement;
        new (): HTMLMyContadorElement;
    };
    interface HTMLMyDemoElement extends Components.MyDemo, HTMLStencilElement {
    }
    var HTMLMyDemoElement: {
        prototype: HTMLMyDemoElement;
        new (): HTMLMyDemoElement;
    };
    interface HTMLMyMuroElement extends Components.MyMuro, HTMLStencilElement {
    }
    var HTMLMyMuroElement: {
        prototype: HTMLMyMuroElement;
        new (): HTMLMyMuroElement;
    };
    interface HTMLMyNotificationsElement extends Components.MyNotifications, HTMLStencilElement {
    }
    var HTMLMyNotificationsElement: {
        prototype: HTMLMyNotificationsElement;
        new (): HTMLMyNotificationsElement;
    };
    interface HTMLElementTagNameMap {
        "my-ajax-wait": HTMLMyAjaxWaitElement;
        "my-alert": HTMLMyAlertElement;
        "my-card": HTMLMyCardElement;
        "my-component": HTMLMyComponentElement;
        "my-contactos": HTMLMyContactosElement;
        "my-contactos-form": HTMLMyContactosFormElement;
        "my-contactos-list": HTMLMyContactosListElement;
        "my-contactos-view": HTMLMyContactosViewElement;
        "my-contador": HTMLMyContadorElement;
        "my-demo": HTMLMyDemoElement;
        "my-muro": HTMLMyMuroElement;
        "my-notifications": HTMLMyNotificationsElement;
    }
}
declare namespace LocalJSX {
    interface MyAjaxWait {
        "hidden"?: boolean;
    }
    interface MyAlert {
        "message": string;
        "onClear"?: (event: MyAlertCustomEvent<null>) => void;
        "type"?: NotificationType;
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
    interface MyContactos {
    }
    interface MyContactosForm {
        "elemento"?: {};
        "isAdd"?: boolean;
        "onCancel"?: (event: MyContactosFormCustomEvent<null>) => void;
        "onSend"?: (event: MyContactosFormCustomEvent<Object>) => void;
    }
    interface MyContactosList {
        "listado"?: any[];
        "onAdd"?: (event: MyContactosListCustomEvent<null>) => void;
        "onChangePage"?: (event: MyContactosListCustomEvent<number>) => void;
        "onDelete"?: (event: MyContactosListCustomEvent<number>) => void;
        "onEdit"?: (event: MyContactosListCustomEvent<number>) => void;
        "onView"?: (event: MyContactosListCustomEvent<number>) => void;
        "pagina"?: number;
        "paginas"?: number;
    }
    interface MyContactosView {
        "elemento"?: {};
        "onCancel"?: (event: MyContactosViewCustomEvent<null>) => void;
    }
    /**
     * Demo de componente contador
     */
    interface MyContador {
        /**
          * Valor a incrementar/decrementar del contador
         */
        "delta"?: number;
        /**
          * Valor inicial del contador
         */
        "init"?: number;
        /**
          * Notifica los cambios en el contador
         */
        "onUpdated"?: (event: MyContadorCustomEvent<number>) => void;
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
    interface MyMuro {
    }
    interface MyNotifications {
    }
    interface IntrinsicElements {
        "my-ajax-wait": MyAjaxWait;
        "my-alert": MyAlert;
        "my-card": MyCard;
        "my-component": MyComponent;
        "my-contactos": MyContactos;
        "my-contactos-form": MyContactosForm;
        "my-contactos-list": MyContactosList;
        "my-contactos-view": MyContactosView;
        "my-contador": MyContador;
        "my-demo": MyDemo;
        "my-muro": MyMuro;
        "my-notifications": MyNotifications;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-ajax-wait": LocalJSX.MyAjaxWait & JSXBase.HTMLAttributes<HTMLMyAjaxWaitElement>;
            "my-alert": LocalJSX.MyAlert & JSXBase.HTMLAttributes<HTMLMyAlertElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            /**
             * Ejemplo de componente en Stencil
             */
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-contactos": LocalJSX.MyContactos & JSXBase.HTMLAttributes<HTMLMyContactosElement>;
            "my-contactos-form": LocalJSX.MyContactosForm & JSXBase.HTMLAttributes<HTMLMyContactosFormElement>;
            "my-contactos-list": LocalJSX.MyContactosList & JSXBase.HTMLAttributes<HTMLMyContactosListElement>;
            "my-contactos-view": LocalJSX.MyContactosView & JSXBase.HTMLAttributes<HTMLMyContactosViewElement>;
            /**
             * Demo de componente contador
             */
            "my-contador": LocalJSX.MyContador & JSXBase.HTMLAttributes<HTMLMyContadorElement>;
            "my-demo": LocalJSX.MyDemo & JSXBase.HTMLAttributes<HTMLMyDemoElement>;
            "my-muro": LocalJSX.MyMuro & JSXBase.HTMLAttributes<HTMLMyMuroElement>;
            "my-notifications": LocalJSX.MyNotifications & JSXBase.HTMLAttributes<HTMLMyNotificationsElement>;
        }
    }
}
