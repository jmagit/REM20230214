# jma-calculadora



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                       | Type      | Default     |
| ------------- | -------------- | ------------------------------------------------- | --------- | ----------- |
| `comaDecimal` | `coma-decimal` | Permite establecer la coma como separador decimal | `boolean` | `false`     |
| `value`       | `value`        | Permite establecer el valor inicial               | `number`  | `undefined` |


## Events

| Event     | Description                                                                         | Type                  |
| --------- | ----------------------------------------------------------------------------------- | --------------------- |
| `equaled` | El evento "equaled" se dispara cuando se pulsa el = y se obtiene el resultado total | `CustomEvent<number>` |
| `updated` | El evento "updated" se dispara cuando se calcula un nuevo resultado                 | `CustomEvent<number>` |


## Methods

### `init(valor?: number) => Promise<void>`

Restaura la calculadora a su valor inicial

#### Returns

Type: `Promise<void>`

Promesa resuelta


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
