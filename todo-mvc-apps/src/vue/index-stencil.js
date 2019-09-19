import Vue from 'vue';
import App from './AppStencil.vue';

var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todo.completed;
    });
  },
  completed: function(todos) {
    return todos.filter(function(todo) {
      return todo.completed;
    });
  }
};

const VueApp = new Vue(App);

function onHashChange() {
  var visibility = window.location.hash.replace(/#\/?/, '');
  if (filters[visibility]) {
    VueApp.visibility = visibility;
  } else {
    window.location.hash = '';
    VueApp.visibility = 'all';
  }
}

window.addEventListener('hashchange', onHashChange);
onHashChange();

VueApp.$mount('#app');
