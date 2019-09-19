<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo-input @input-submit="addTodo" />
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <todo-toggle @toggle-all="toggleTodos" :checked="this.remaining === 0"></todo-toggle>
      <todo-list
        :todos="JSON.stringify(filteredTodos)"
        @check-todo="toggleTodo"
        @remove-todo="({detail})=>{removeTodo(todos[detail.i])}"
        @change-todo="updateTodoTitle"
      ></todo-list>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
      <todo-count :number-of-active-todos="remaining"></todo-count>
      <todo-filters
        :filter="visibility"
        :any-completed="todos.length > remaining"
        @clear-completed="removeCompleted"
      ></todo-filters>
    </footer>
  </section>
</template>

<script>
import Vue from "vue";
Vue.config.ignoredElements = [
  "todo-count",
  "todo-toggle",
  "todo-filters",
  "todo-input",
  "todo-item",
  "todo-list"
];

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

export default Vue.extend({
  data() {
    return {
      todos: [],
      visibility: "all"
    };
  },
  computed: {
    filteredTodos: function() {
      return filters[this.visibility](this.todos) || {};
    },
    remaining: function() {
      return filters.active(this.todos).length;
    }
  },
  methods: {
    addTodo: function({ detail }) {
      var value = detail && detail.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        title: value,
        completed: false
      });
    },
    removeTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    removeCompleted: function() {
      this.todos = filters.active(this.todos);
    },
        toggleTodo: function({ detail }) {
      this.todos[detail.i].completed = detail.ev.detail.target.checked;
    },
    toggleTodos: function({ detail }) {
      this.todos.forEach(function(todo) {
        todo.completed = detail.target.checked;
      });
    },
    updateTodoTitle: function({ detail }) {
      this.todos[detail.i].title = detail.ev.detail;
    }
  }
});
</script>
