/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TodoCount {
    'numberOfActiveTodos': number;
  }
  interface TodoFilters {
    'anyCompleted': boolean;
    'filter': string;
  }
  interface TodoInput {}
  interface TodoItem {
    'completed': boolean;
    'text': string;
  }
  interface TodoList {
    'todos': string;
  }
  interface TodoToggle {
    'checked': boolean;
  }
}

declare global {


  interface HTMLTodoCountElement extends Components.TodoCount, HTMLStencilElement {}
  var HTMLTodoCountElement: {
    prototype: HTMLTodoCountElement;
    new (): HTMLTodoCountElement;
  };

  interface HTMLTodoFiltersElement extends Components.TodoFilters, HTMLStencilElement {}
  var HTMLTodoFiltersElement: {
    prototype: HTMLTodoFiltersElement;
    new (): HTMLTodoFiltersElement;
  };

  interface HTMLTodoInputElement extends Components.TodoInput, HTMLStencilElement {}
  var HTMLTodoInputElement: {
    prototype: HTMLTodoInputElement;
    new (): HTMLTodoInputElement;
  };

  interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {}
  var HTMLTodoItemElement: {
    prototype: HTMLTodoItemElement;
    new (): HTMLTodoItemElement;
  };

  interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {}
  var HTMLTodoListElement: {
    prototype: HTMLTodoListElement;
    new (): HTMLTodoListElement;
  };

  interface HTMLTodoToggleElement extends Components.TodoToggle, HTMLStencilElement {}
  var HTMLTodoToggleElement: {
    prototype: HTMLTodoToggleElement;
    new (): HTMLTodoToggleElement;
  };
  interface HTMLElementTagNameMap {
    'todo-count': HTMLTodoCountElement;
    'todo-filters': HTMLTodoFiltersElement;
    'todo-input': HTMLTodoInputElement;
    'todo-item': HTMLTodoItemElement;
    'todo-list': HTMLTodoListElement;
    'todo-toggle': HTMLTodoToggleElement;
  }
}

declare namespace LocalJSX {
  interface TodoCount extends JSXBase.HTMLAttributes<HTMLTodoCountElement> {
    'numberOfActiveTodos'?: number;
  }
  interface TodoFilters extends JSXBase.HTMLAttributes<HTMLTodoFiltersElement> {
    'anyCompleted'?: boolean;
    'filter'?: string;
    'onClear-completed'?: (event: CustomEvent<any>) => void;
    'onSet-filter'?: (event: CustomEvent<any>) => void;
  }
  interface TodoInput extends JSXBase.HTMLAttributes<HTMLTodoInputElement> {
    'onInput-submit'?: (event: CustomEvent<any>) => void;
  }
  interface TodoItem extends JSXBase.HTMLAttributes<HTMLTodoItemElement> {
    'completed'?: boolean;
    'onItem-changed'?: (event: CustomEvent<any>) => void;
    'onItem-check'?: (event: CustomEvent<any>) => void;
    'onItem-remove'?: (event: CustomEvent<any>) => void;
    'text'?: string;
  }
  interface TodoList extends JSXBase.HTMLAttributes<HTMLTodoListElement> {
    'onChange-todo'?: (event: CustomEvent<any>) => void;
    'onCheck-todo'?: (event: CustomEvent<any>) => void;
    'onRemove-todo'?: (event: CustomEvent<any>) => void;
    'todos'?: string;
  }
  interface TodoToggle extends JSXBase.HTMLAttributes<HTMLTodoToggleElement> {
    'checked'?: boolean;
    'onToggle-all'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'todo-count': TodoCount;
    'todo-filters': TodoFilters;
    'todo-input': TodoInput;
    'todo-item': TodoItem;
    'todo-list': TodoList;
    'todo-toggle': TodoToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


