import { Component, Prop, Event, EventEmitter, h, State } from '@stencil/core';

@Component({
  tag: 'todo-item'
})
export class TodoItem {
  @Prop() completed: boolean = false;
  @Prop() text: string;
  @Event({ eventName: 'item-check' }) itemCheck: EventEmitter;
  @Event({ eventName: 'item-changed' }) itemChanged: EventEmitter;
  @Event({ eventName: 'item-remove' }) itemRemove: EventEmitter;

  @State() editing: boolean = false;
  private textInput?: HTMLInputElement;
  private handledEvent: boolean = false;

  edit = () => {
    this.handledEvent = false;
    this.editing = true;
    setTimeout(() => {
      this.textInput.focus();
    }, 0);
  };

  doneEdit = e => {
    this.editing = false;
    if (!this.handledEvent) {
      this.handledEvent = true;
      const title = e.target.value.trim();
      title ? this.itemChanged.emit(title) : this.itemRemove.emit(e);
    }
  };

  keyUp = e => {
    if (e.keyCode === 13) {
      this.doneEdit(e);
    }
    if (e.keyCode === 27) {
      this.editing = false;
      this.handledEvent = true;
    }
  };

  componentWillLoad() {
    console.log('todo-item is about to be rendered');
  }

  componentDidLoad() {
    console.log('todo-item has been rendered');
  }

  componentWillUpdate() {
    console.log('todo-item will update');
  }

  componentDidUpdate() {
    console.log('todo-item did update');
  }

  componentDidUnload() {
    console.log('todo-item has been removed from the DOM');
  }

  render() {
    const {
      completed,
      text,
      editing,
      itemCheck,
      itemRemove,
      edit,
      doneEdit,
      keyUp
    } = this;
    return (
      <li class={{ completed, editing }}>
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            checked={completed}
            onChange={e => itemCheck.emit(e)}
          />
          <label onDblClick={edit}>{text}</label>
          <button class="destroy" onClick={e => itemRemove.emit(e)}></button>
        </div>
        <input
          class="edit"
          ref={el => (this.textInput = el as HTMLInputElement)}
          onBlur={e => doneEdit(e)}
          onKeyUp={e => keyUp(e)}
          value={text}
        />
      </li>
    );
  }
}
