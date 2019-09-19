import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Todo App|Todo List',
  decorators: [withKnobs]
};

export const todoList = () => {
  const todos = text('todos', '[{"title": "The title", "completed": "false"}]');
  return `<todo-list todos="${todos}"></todo-list>`;
};
