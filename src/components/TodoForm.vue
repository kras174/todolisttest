<template>
  <div class="form-container">
    <form @submit.prevent="addTodo">
      <input
        required
        type="text"
        v-model="title"
        name="title"
        placeholder="Добавьте название"
        :class="[title.length < 1 ? 'not-valid' : 'valid']"
      />
      <input
        required
        type="text"
        v-model="tags"
        name="tags"
        placeholder="Добавьте тэги"
        :class="[tags.length < 1 ? 'not-valid' : 'valid']"
      />
      <textarea
        required
        v-model="description"
        rows="10"
        name="description"
        maxlength="2048"
        placeholder="Добавьте описание"
        :class="[description.length < 10 ? 'not-valid' : 'valid']"
      />
      <datepicker
        format="dd-MM-yyyy"
        :language="ru"
        v-model="eDate"
        placeholder="Дедлайн"
        :disabled-dates="{ to: new Date() }"
      ></datepicker>
      <input type="submit" value="Добавить дело" class="btn" />
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";

export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
      tags: "",
      description: "",
      eDate: null,
      ru: ru,
      todos: []
    };
  },
  components: {
    Datepicker
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        tags: this.tags,
        description: this.description,
        eDate: this.eDate,
        status: "В работе"
      };
      if (localStorage.getItem("todos")) {
        try {
          this.todos = JSON.parse(localStorage.getItem("todos"));
        } catch (e) {
          localStorage.removeItem("todos");
        }
      }
      this.todos = [...this.todos, newTodo];
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);

      this.title = "";
      this.tags = "";
      this.description = "";
      this.eDate = null;
    }
  }
};
</script>

<style lang="scss">
.form-container {
  form {
    display: flex;
    flex-direction: column;
    input {
      margin-top: 10px;
      padding: 10px;
      border: 2px solid #333;
    }
    textarea {
      margin-top: 10px;
      padding: 10px;
      border: 2px solid #333;
    }
    .btn {
      cursor: pointer;
      background: #fff;
      color: #333;
      transition: all 0.2s ease-in;
      &:hover {
        background: #333;
        color: #fff;
      }
    }
  }
}
</style>
