import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-count'
})
export class TodoCount {
  @Prop() numberOfActiveTodos: number;

  componentWillLoad() {
    console.log('todo-count is about to be rendered');
  }

  componentDidLoad() {
    console.log('todo-count has been rendered');
  }

  componentWillUpdate() {
    console.log('todo-count will update');
  }

  componentDidUpdate() {
    console.log('todo-count did update');
  }

  componentDidUnload() {
    console.log('todo-count has been removed from the DOM');
  }

  render() {
    return (
      <span class="todo-count">
        <strong>{this.numberOfActiveTodos}</strong> item
        {this.numberOfActiveTodos === 1 ? '' : 's'} left
      </span>
    );
  }
}
