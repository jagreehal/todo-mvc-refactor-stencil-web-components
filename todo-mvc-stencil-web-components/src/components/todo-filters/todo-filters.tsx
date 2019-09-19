import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

const FILTERS = ['all', 'active', 'completed'];

const TodoListFilter = ({ active, filter, linkClick }) => (
  <a
    href={`#/${filter}`}
    class={active ? 'selected' : ''}
    onClick={() => linkClick()}
  >
    {filter.charAt(0).toUpperCase() + filter.slice(1)}
  </a>
);

@Component({
  tag: 'todo-filters'
})
export class TodoFilters {
  @Prop() filter: string = 'all';
  @Prop() anyCompleted: boolean = false;
  @Event({ eventName: 'set-filter' }) setFilter: EventEmitter;
  @Event({ eventName: 'clear-completed' }) clearCompleted: EventEmitter;

  componentWillLoad() {
    console.log('todo-filters is about to be rendered');
  }

  componentDidLoad() {
    console.log('todo-filters has been rendered');
  }

  componentWillUpdate() {
    console.log('todo-filters will update');
  }

  componentDidUpdate() {
    console.log('todo-filters did update');
  }

  componentDidUnload() {
    console.log('todo-filters has been removed from the DOM');
  }

  render() {
    return (
      <div>
        <ul class="filters">
          {FILTERS.map(filter => {
            return (
              <li>
                <TodoListFilter
                  active={filter === this.filter}
                  filter={filter}
                  linkClick={() => this.setFilter.emit(filter)}
                />
              </li>
            );
          })}
        </ul>
        {this.anyCompleted ? (
          <button
            class="clear-completed"
            onClick={() => this.clearCompleted.emit()}
          >
            Clear completed
          </button>
        ) : null}
      </div>
    );
  }
}
