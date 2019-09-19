# todo-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `completed` | `completed` |             | `boolean` | `false`     |
| `text`      | `text`      |             | `string`  | `undefined` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `item-changed` |             | `CustomEvent<any>` |
| `item-check`   |             | `CustomEvent<any>` |
| `item-remove`  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [todo-list](../todo-list)

### Graph
```mermaid
graph TD;
  todo-list --> todo-item
  style todo-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
