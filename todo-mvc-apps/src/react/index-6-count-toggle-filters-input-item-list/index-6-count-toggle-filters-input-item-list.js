import React from 'react';
import ReactDOM from 'react-dom';
import useCustomElement from 'use-custom-element';
import { TodoStoreProvider, TodoStoreContext } from '../store';

const TodoInput = () => {
  const { onSubmitTodo } = React.useContext(TodoStoreContext);

  const [customElementProps, ref] = useCustomElement({
    'input-submit': onSubmitTodo
  });
  return <todo-input autofocus {...customElementProps} ref={ref} />;
};

const TodoMain = () => {
  const { numberOfTodos } = React.useContext(TodoStoreContext);

  return numberOfTodos ? (
    <section className="main">
      <TodoList />
    </section>
  ) : null;
};

export const TodoList = () => {
  const {
    todos,
    numberOfTodos,
    numberOfCompletedTodos,
    onRemoveTodo,
    onCheckTodo,
    onCheckAllTodo,
    onTodoTitleChange
  } = React.useContext(TodoStoreContext);

  const [todoToggleProps, ref] = useCustomElement({
    'toggle-all': e => onCheckAllTodo(e),
    checked: numberOfTodos === numberOfCompletedTodos
  });

  const [todoListProps, listRef] = useCustomElement({
    todos,
    'check-todo': ({ i, ev }) => {
      onCheckTodo(i)(ev.detail);
    },
    'remove-todo': ({ i, ev }) => {
      onRemoveTodo(i)(ev);
    },
    'change-todo': ({ i, ev }) => {
      onTodoTitleChange(i)(ev.detail);
    }
  });

  return (
    <>
      <todo-toggle {...todoToggleProps} ref={ref} />
      <todo-list {...todoListProps} ref={listRef} />
    </>
  );
};

const TodoCount = () => {
  const { numberOfActiveTodos } = React.useContext(TodoStoreContext);
  return <todo-count number-of-active-todos={numberOfActiveTodos} />;
};

const TodoFilters = () => {
  const {
    filter,
    onSetFilter,
    onClearCompletedTodo,
    numberOfCompletedTodos
  } = React.useContext(TodoStoreContext);

  const [customElementProps, ref] = useCustomElement({
    filter,
    'set-filter': onSetFilter,
    'clear-completed': onClearCompletedTodo,
    'any-completed': numberOfCompletedTodos > 0
  });
  return <todo-filters {...customElementProps} ref={ref} />;
};

const TodoFooter = () => {
  const { numberOfTodos } = React.useContext(TodoStoreContext);
  return numberOfTodos ? (
    <footer className="footer">
      <TodoCount />
      <TodoFilters />
    </footer>
  ) : null;
};

function App() {
  return (
    <TodoStoreProvider>
      <div className="App todoapp">
        <header className="header">
          <h1>{'todos'}</h1>
          <TodoInput />
        </header>
        <TodoMain />
        <TodoFooter />
      </div>
    </TodoStoreProvider>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
