import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Todo App|Todo Count',
  decorators: [withKnobs]
};

export const oneTodo = () => {
  const numberOfActiveTodos = text('Number of active todos', '1');
  return `<todo-count number-of-active-todos="${numberOfActiveTodos}"></todo-count>`;
};

export const multipleTodos = () => {
  const numberOfActiveTodos = text('Number of active todos', '2');
  return `<todo-count number-of-active-todos="${numberOfActiveTodos}"></todo-count>`;
};
