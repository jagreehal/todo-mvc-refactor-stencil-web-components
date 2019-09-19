<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo-input @input-submit="addTodo" />
    </header>
    <section class="main" v-if="todos.length" v-cloak>
      <todo-toggle @toggle-all="toggleTodos" :checked="this.remaining === 0"></todo-toggle>
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <li
          v-for="(todo, index) in filteredTodos"
          class="todo"
          :key="index"
          :class="{ completed: todo.completed, editing: todo == editedTodo }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="todo.title"
            v-todo-focus="todo == editedTodo"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-if="todos.length" v-cloak>
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
import filters from '../filters';

Vue.config.ignoredElements = [
  "todo-count",
  "todo-toggle",
  "todo-filters",
  "todo-input"
];

export default Vue.extend({
  data() {
    return {
      todos: [],
      editedTodo: null,
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

    editTodo: function(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit: function(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },

    cancelEdit: function(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted: function() {
      this.todos = filters.active(this.todos);
    },
        toggleTodos: function({ detail }) {
      this.todos.forEach(function(todo) {
        todo.completed = detail.target.checked;
      });
    },
  },
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
});
</script>
