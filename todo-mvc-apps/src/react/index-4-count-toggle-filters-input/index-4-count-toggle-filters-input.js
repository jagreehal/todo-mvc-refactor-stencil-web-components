import React, { useState } from 'react';
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

const TodoItem = ({ title, completed, onChecked, onRemove, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [_title, setTitle] = useState(title);
  function onTitleDoubleClick() {
    setIsEditing(true);
  }

  const keyUp = e => {
    if (e.keyCode === 13) {
      onTitleChange(_title);
      setIsEditing(false);
    }
    if (e.keyCode === 27) {
      e.preventDefault();
      setTitle(title);
      setIsEditing(false);
    }
  };

  const doneEdit = e => {
    setIsEditing(false);
    onTitleChange(_title);
  };

  return (
    <li
      className={`todo ${completed ? 'completed' : ''} ${
        isEditing ? 'editing' : ''
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          onChange={onChecked}
          checked={completed}
          type="checkbox"
        />
        <label onDoubleClick={() => setIsEditing(true)}>{title}</label>
        <button onClick={onRemove} className="destroy" />
      </div>
      {isEditing && (
        <input
          autoFocus={true}
          className="edit"
          type="text"
          value={_title}
          className="edit"
          onChange={e => {
            setTitle(e.target.value);
          }}
          onBlur={doneEdit}
          onKeyUp={keyUp}
        />
      )}
    </li>
  );
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

  return (
    <>
      <todo-toggle {...todoToggleProps} ref={ref} />
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            {...todo}
            onTitleChange={onTodoTitleChange(i)}
            onRemove={onRemoveTodo(i)}
            onChecked={onCheckTodo(i)}
          />
        ))}
      </ul>
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
