import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'todo-toggle'
})
export class TodoToggle {
  @Prop() checked: boolean = false;
  @Event({ eventName: 'toggle-all' }) toggleAll: EventEmitter;

  componentWillLoad() {
    console.log('todo-toggle is about to be rendered');
  }

  componentDidLoad() {
    console.log('todo-toggle has been rendered');
  }

  componentWillUpdate() {
    console.log('todo-toggle will update');
  }

  componentDidUpdate() {
    console.log('todo-toggle did update');
  }

  componentDidUnload() {
    console.log('todo-toggle has been removed from the DOM');
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.toggleAll.emit(e)}
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          checked={this.checked}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    );
  }
}
