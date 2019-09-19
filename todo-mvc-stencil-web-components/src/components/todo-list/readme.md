# todo-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `todos`  | `todos`   |             | `string` | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `change-todo` |             | `CustomEvent<any>` |
| `check-todo`  |             | `CustomEvent<any>` |
| `remove-todo` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [todo-item](../todo-item)

### Graph
```mermaid
graph TD;
  todo-list --> todo-item
  style todo-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
