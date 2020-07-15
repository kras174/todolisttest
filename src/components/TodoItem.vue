<template>
  <div @click="$router.push(`/todos/${index}`)">
    <h2>{{ todo.title }}</h2>
    <p class="cope-text descriptionItem-container">{{ todo.description }}</p>
    <small class="tagsItem-container">
      <i>Тэги: {{ todo.tags }}</i>
    </small>

    <div class="foterItem-container">
      <small :class="{ 'status-outdate': outdated }"
        >Завершить до: {{ formatDate }}</small
      >
      <small
        class="status-container"
        :class="[todo.status ? 'status-complete' : 'status-progress']"
        >{{ todo.status ? "Завершено" : "В работе" }}</small
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TodoItem",
  props: ["todo", "index"],
  computed: {
    // Форматируем дату для показа пользователю в нормальном виде
    formatDate() {
      return moment(this.todo.eDate).format("DD-MM-YYYY");
    },
    // Проверяем дату на просрочку
    outdated() {
      return Date.parse(this.todo.eDate) < Date.now();
    }
  }
};
</script>

<style lang="scss">
.todoItem-container {
  position: relative;
  border: 2px solid #333;
  margin-bottom: 5px;
  padding: 10px;
  cursor: pointer;
  background: #fff;
  color: #333;
  transition: all 0.2s ease-in;
  &:hover {
    background: #333;
    color: #fff;
  }
  .cope-text {
    overflow: hidden;
  }
  .descriptionItem-container {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .foterItem-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    .status-container {
      padding: 5px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
.status-progress {
  background: orange;
}
.status-complete {
  background: green;
}
.status-outdate {
  padding: 5px;
  border-radius: 5px;
  background: red;
  color: #fff;
}
</style>
