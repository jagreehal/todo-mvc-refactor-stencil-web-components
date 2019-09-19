import React, {useState} from 'react';

export const defaultState = {
  filter: 'all',
  todos: []
};

export function useTodoList(initialState = defaultState) {
  const [filter, setFilter] = useState(initialState.filter);
  const [todos, setTodo] = useState(initialState.todos);

  return {
    filterList: ['all', 'active', 'completed'],
    onSetFilter: value => setFilter(value),

    get todos() {
      switch (filter) {
        case 'active':
          return todos.filter(({ completed }) => !completed);
        case 'completed':
          return todos.filter(({ completed }) => completed);
        case 'all':
        default:
          return todos;
      }
    },

    get filter() {
      return filter;
    },

    get numberOfTodos() {
      return todos.length;
    },

    get numberOfActiveTodos() {
      return todos.filter(({ completed }) => !completed).length;
    },

    get numberOfCompletedTodos() {
      return todos.filter(({ completed }) => completed).length;
    },

    onTodoTitleChange: index => value => {
      if (!value) {
        setTodo(todos.filter((todo, i) => index !== i));
      } else {
        setTodo(
          todos.map((todo, i) => {
            if (i === index) {
              todo.title = value;
            }
            return todo;
          })
        );
      }
    },

    // Todo list action handler
    onCheckTodo: index => e => {
      setTodo(
        todos.map((todo, i) => {
          if (i === index) {
            todo.completed = e.target.checked;
          }
          return todo;
        })
      );
    },

    onCheckAllTodo: e => {
      setTodo(
        todos.map(todo => {
          todo.completed = e.target.checked;
          return todo;
        })
      );
    },

    onRemoveTodo: index => () => {
      setTodo(todos.filter((todo, i) => index !== i));
    },
    onSubmitTodo: title => {
      const trimmedTitle = (title || '').trim();
      if (trimmedTitle) {
        setTodo([
          ...todos,
          {
            title: trimmedTitle,
            completed: false
          }
        ]);
      }
    },
    onClearCompletedTodo: () => {
      setTodo(todos.filter(({ completed }) => !completed));
    }
  };
}

export const TodoStoreProvider = ({ children }) => {
  const todoStore = useTodoList();

  return (
    <TodoStoreContext.Provider value={todoStore}>
      {children}
    </TodoStoreContext.Provider>
  );
};

export const TodoStoreContext = React.createContext();
