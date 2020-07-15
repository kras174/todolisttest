<template>
  <div class="home">
    <div v-if="todos.length !== 0" class="todoList-container">
      <TodoFilter />
      <TodoItem
        :key="todo.id"
        v-for="(todo, index) in todosFilter"
        class="todoItem-container"
        :todo="todo"
        :index="index"
        @remove-todo="removeTodo"
      />
    </div>
    <h2 v-else>Никаких дел пока нет!</h2>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import TodoFilter from "@/components/TodoFilter";

export default {
  name: "Home",
  components: {
    TodoItem,
    TodoFilter
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    this.getTodos();
  },
  computed: {
    todosFilter() {
      if (!this.$route.params.filter) {
        return this.todos;
      } else if (this.$route.params.filter === "inwork") {
        return this.todos.filter(todo => todo.status === false);
      } else if (this.$route.params.filter === "complite") {
        return this.todos.filter(todo => todo.status === true);
      } else if (this.$route.params.filter === "outdate") {
        return this.todos.filter(todo => Date.parse(todo.eDate) < Date.now());
      }
      return this.$route.params.filter;
    }
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },
    getTodos() {
      if (localStorage.getItem("todos")) {
        try {
          this.todos = JSON.parse(localStorage.getItem("todos"));
        } catch (e) {
          localStorage.removeItem("todos");
        }
      }
    }
  }
};
</script>
