import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Todo App|Todo Item',
  decorators: [withKnobs]
};

export const todo = () => {
  const textInput = text('text', 'The todo title');
  return `<todo-item text="${textInput}"></todo-item>`;
};

export const completedTodo = () => {
  const textInput = text('text', 'The todo title');
  return `<todo-item completed="true" text="${textInput}"></todo-item>`;
};
