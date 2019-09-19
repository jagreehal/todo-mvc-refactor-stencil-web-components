import { Component, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'todo-input'
})
export class TodoInput {
  @Event({ eventName: 'input-submit' }) inputSubmit: EventEmitter;
  @State() value: string;

  keyUp = e => {
    if (e.keyCode === 13) {
      this.inputSubmit.emit(this.value);
      this.value = '';
    }
  };

  componentWillLoad() {
    console.log('todo-input is about to be rendered');
  }

  componentDidLoad() {
    console.log('todo-input has been rendered');
  }

  componentWillUpdate() {
    console.log('todo-input will update');
  }

  componentDidUpdate() {
    console.log('todo-input did update');
  }

  componentDidUnload() {
    console.log('todo-input has been removed from the DOM');
  }

  render() {
    // tslint:disable-next-line: no-this-assignment
    const { value, keyUp } = this;
    return (
      <input
        class="new-todo"
        value={value}
        type="text"
        autoFocus
        placeholder="What needs to be done?"
        onInput={(ev: any) => (this.value = ev.target.value)}
        onKeyUp={e => keyUp(e)}
      />
    );
  }
}
