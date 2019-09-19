import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useCustomElement from 'use-custom-element';
import { TodoStoreProvider, TodoStoreContext } from '../store';

const TodoInput = () => {
  const [textInput, onInputChange] = useState('');
  const { onSubmitTodo } = React.useContext(TodoStoreContext);

  const handleInputEnterPress = e => {
    if (e.key === 'Enter') {
      onSubmitTodo(textInput);
      onInputChange('');
    }
  };

  return (
    <>
      <input
        onKeyPress={handleInputEnterPress}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={textInput}
        onChange={e => onInputChange(e.target.value)}
      />
    </>
  );
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

const TodoListFilter = ({ active, filter, onClick }) => {
  const capitalizedFilter = filter.charAt(0).toUpperCase() + filter.slice(1);
  return (
    <a
      href={`#${filter}`}
      className={active ? 'selected' : ''}
      onClick={onClick}
    >
      {capitalizedFilter}
    </a>
  );
};

const TodoFilters = () => {
  const {
    todos,
    numberOfActiveTodos,
    filterList,
    onSetFilter,
    filter,
    onClearCompletedTodo
  } = React.useContext(TodoStoreContext);

  return (
    <>
      <ul className="filters">
        {filterList.map(filterName => (
          <li key={filterName}>
            <TodoListFilter
              active={filter === filterName}
              filter={filterName}
              onClick={() => onSetFilter(filterName)}
            />
          </li>
        ))}
      </ul>

      {todos.length > numberOfActiveTodos ? (
        <button className="clear-completed" onClick={onClearCompletedTodo}>
          Clear completed
        </button>
      ) : null}
    </>
  );
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
