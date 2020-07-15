<template>
  <div>
    <h2>{{ todo.title }}</h2>
    <p class="descriptionItem-container">{{ todo.description }}</p>
    <small class="tagsItem-container">
      <i>Тэги: {{ todo.tags }}</i>
    </small>
    <router-link :to="`/todos/${index}`" class="edit-btn">
      ред
    </router-link>

    <button class="remove-btn" @click="$emit('remove-todo', index)">X</button>
    <div class="foterItem-container">
      <small :class="[outdated ? 'status-outdate' : '']"
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
  methods: {
    removeItem(n) {
      console.log(n);
    }
  },
  computed: {
    formatDate() {
      return moment(this.todo.eDate).format("DD-MM-YYYY");
    },
    outdated() {
      return Date.parse(this.todo.eDate) < Date.now();
    }
  }
};
</script>

<style lang="scss">
.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  padding: 5px 8px;
  background: red;
  border: none;
  cursor: pointer;
}
.edit-btn {
  position: absolute;
  top: 10px;
  right: 40px;
  border-radius: 50%;
  padding: 5px 8px;
  background: orange;
  border: none;
  cursor: pointer;
  text-decoration: none;
}
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
  .descriptionItem-container {
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
