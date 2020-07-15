<template>
  <div class="edit-form-container">
    <form @submit.prevent="editTodo">
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
      <div class="form-footer">
        <datepicker
          format="dd-MM-yyyy"
          :language="ru"
          v-model="eDate"
          placeholder="Дедлайн"
          :disabled-dates="{ to: new Date() }"
        ></datepicker>
        <div class="check-group">
          <input type="checkbox" name="status" id="status" v-model="status" />
          <label for="status">Завершено</label>
        </div>
      </div>
      <input type="submit" value="Сохранить изменения" class="btn" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";

export default {
  name: "EditTodo",
  data() {
    return {
      title: "",
      tags: "",
      description: "",
      eDate: null,
      status: false,
      ru: ru,
      todos: []
    };
  },
  components: {
    Datepicker
  },
  mounted() {
    this.getTodoInfo();
  },
  methods: {
    getTodoInfo() {
      const index = this.$route.params.id;

      if (localStorage.getItem("todos")) {
        try {
          this.todos = JSON.parse(localStorage.getItem("todos"));
        } catch (e) {
          localStorage.removeItem("todos");
        }
      }

      this.title = this.todos[index].title;
      this.tags = this.todos[index].tags;
      this.description = this.todos[index].description;
      this.eDate = this.todos[index].eDate;
      this.status = this.todos[index].status === "Завершено";
    },
    editTodo() {
      const index = this.$route.params.id;

      this.todos[index].title = this.title;
      this.todos[index].tags = this.tags;
      this.todos[index].description = this.description;
      this.todos[index].eDate = this.eDate;
      this.todos[index].status = this.status ? "Завершено" : "В работе";

      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    }
  }
};
</script>

<style>
.edit-form-container form {
  display: flex;
  flex-direction: column;
}
.edit-form-container input {
  margin-top: 10px;
  padding: 10px;
  border: 2px solid #333;
}
.edit-form-container textarea {
  margin-top: 10px;
  padding: 10px;
  border: 2px solid #333;
}
.edit-form-container .btn {
  cursor: pointer;
  background: #fff;
  color: #333;
  transition: all 0.2s ease-in;
}
.edit-form-container .btn:hover {
  background: #333;
  color: #fff;
}
.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-group label {
  margin-left: 7px;
}
</style>
