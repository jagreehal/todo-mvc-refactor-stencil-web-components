import {
  Component,
  Prop,
  Event,
  EventEmitter,
  h,
  State,
  Watch
} from '@stencil/core';

export interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  tag: 'todo-list'
})
export class TodoList {
  @Prop() todos: string;
  @State() _todos: Todo[] = [];
  @Event({ eventName: 'check-todo' }) checkTodo: EventEmitter;
  @Event({ eventName: 'remove-todo' }) removeTodo: EventEmitter;
  @Event({ eventName: 'change-todo' }) changeTodo: EventEmitter;

  @Watch('todos')
  parseTodos(newValue: string) {
    if (newValue) {
      try {
        this._todos = JSON.parse(newValue);
      } catch (error) {
        console.error('Could not parse todos', error, newValue);
      }
    }
  }

  componentWillLoad() {
    this.parseTodos(this.todos);
    console.log('todo-list is about to be rendered');
  }

  componentDidLoad() {
    console.log('todo-list has been rendered');
  }

  componentWillUpdate() {
    console.log('todo-list will update');
  }

  componentDidUpdate() {
    console.log('todo-list did update');
  }

  componentDidUnload() {
    console.log('todo-list has been removed from the DOM');
  }

  render() {
    const todosList = this._todos.map((todo, i) => (
      <todo-item
        text={todo.title}
        completed={todo.completed}
        onItem-check={ev => {
          this.checkTodo.emit({ i, ev });
        }}
        onItem-changed={ev => {
          this.changeTodo.emit({ i, ev });
        }}
        onItem-remove={ev => {
          this.removeTodo.emit({ i, ev });
        }}
      />
    ));

    return <ul class="todo-list">{todosList}</ul>;
  }
}
