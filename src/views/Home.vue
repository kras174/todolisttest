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
    // Применяем текущий выбранный фильтр для списка дел
    todosFilter() {
      if (this.$route.params.filter === "inwork") {
        return this.todos.filter(todo => todo.status === false);
      } else if (this.$route.params.filter === "complite") {
        return this.todos.filter(todo => todo.status === true);
      } else if (this.$route.params.filter === "outdate") {
        return this.todos.filter(todo => Date.parse(todo.eDate) < Date.now());
      }
      return this.todos;
    }
  },
  methods: {
    // Получаем массив дел из хранилища (можно было сделать и store с помощью VUEX, но для такого маленького приложения это лишнее...)
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
