<template>
  <div class="home">
    <div class="todoList-container">
      <div
        :key="todo.id"
        v-for="(todo, index) in todos"
        class="todoItem-container"
      >
        <TodoItem
          :todo="todo"
          :index="index"
          @remove-todo="$emit('remove-todo', index)"
        />
      </div>
      <h2 v-show="todos.length === 0">Никаких дел пока нет!</h2>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "Home",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    this.getTodos();
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
