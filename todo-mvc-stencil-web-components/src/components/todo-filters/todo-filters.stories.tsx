// import { action } from '@storybook/addon-actions';

export default {
  title: 'Todo App|Todo Filters'
};

export const defaultState = () => {
  return `<todo-filters></todo-filters>`;
};

export const activeSelected = () => {
  return `<todo-filters filter="active"></todo-filters>`;
};

export const completedSelected = () => {
  return `<todo-filters filter="completed"></todo-filters>`;
};

export const clearCompletedShown = () => {
  // const el = document.querySelector('todo-filters');
  // console.log('el', el);
  // el.addEventListener('clear-completed', () =>
  //   action('clear-completed')('xxxx')
  // );
  return `<todo-filters any-completed="true"></todo-filters>`;
};
