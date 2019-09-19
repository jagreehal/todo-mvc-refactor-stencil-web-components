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
        <todo-item
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :text="todo.title"
          :completed="todo.completed"
          @item-check="()=>toggleTodo(index)"
          @item-remove="({detail})=>{removeTodo(todos[detail.i])}"
          @item-changed="({detail})=>updateTodoTitle(index, detail)"
        />
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
  "todo-input",
  "todo-item"
];

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

    toggleTodo: function(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    toggleTodos: function({ detail }) {
      this.todos.forEach(function(todo) {
        todo.completed = detail.target.checked;
      });
    },
    updateTodoTitle: function(index, title) {
      this.todos[index].title = title;
    }
  }
});
</script>
