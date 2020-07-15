<template>
  <div class="form-container">
    <form @submit.prevent="confirmTodo">
      <input
        required
        type="text"
        v-model="title"
        name="title"
        placeholder="Добавьте название"
      />
      <input
        required
        type="text"
        v-model="tags"
        name="tags"
        placeholder="Добавьте тэги"
      />
      <textarea
        required
        v-model="description"
        rows="10"
        name="description"
        maxlength="2048"
        placeholder="Добавьте описание"
      />
      <div class="form-footer">
        <datepicker
          format="dd-MM-yyyy"
          :language="ru"
          :disabled-dates="{ to: new Date() }"
          v-model="eDate"
          placeholder="Дедлайн"
        ></datepicker>
        <div class="check-group" v-show="$route.params.id">
          <input type="checkbox" name="status" id="status" v-model="status" />
          <label for="status">Завершено</label>
        </div>
      </div>
      <p class="errorMessage" v-show="errorMessage">{{ errorMessage }}</p>
      <div class="button-group" v-if="$route.params.id">
        <input type="submit" value="Сохранить дело" class="btn btn-save" />
        <input
          type="button"
          value="Удалить дело"
          class="btn btn-delete"
          @click="removeTodo"
        />
      </div>
      <input
        v-else
        type="submit"
        value="Добавить дело"
        class="btn btn-create"
      />
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
      status: false,
      ru: ru,
      todos: [],
      errorMessage: ""
    };
  },
  components: {
    Datepicker
  },
  mounted() {
    if (this.$route.params.id) this.getTodoInfo();
  },
  methods: {
    // Переключатель между режимами формы
    confirmTodo() {
      if (this.$route.params.id) this.editTodo();
      else this.addTodo();
    },
    // Сохраняем массив дел в хранилище
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },
    // Получаем массив дел из хранилища
    getTodos() {
      if (localStorage.getItem("todos")) {
        try {
          this.todos = JSON.parse(localStorage.getItem("todos"));
        } catch (e) {
          localStorage.removeItem("todos");
        }
      }
    },
    // Добавляюем новую задачу в режиме добавления
    addTodo() {
      if (this.eDate) {
        const newTodo = {
          id: uuidv4(),
          title: this.title,
          tags: this.tags,
          description: this.description,
          eDate: this.eDate,
          status: false
        };
        this.getTodos();
        this.todos = [...this.todos, newTodo];
        this.saveTodos();

        this.$router.push("/");

        this.title = "";
        this.tags = "";
        this.description = "";
        this.eDate = null;
      } else {
        this.errorMessage = "Укажите дату дедлайна!";
      }
    },
    // Заполняем поля формы в режиме редактирования
    getTodoInfo() {
      const index = this.$route.params.id;

      this.getTodos();

      this.title = this.todos[index].title;
      this.tags = this.todos[index].tags;
      this.description = this.todos[index].description;
      this.eDate = this.todos[index].eDate;
      this.status = this.todos[index].status;
    },
    // Сохраняем изменения в деле
    editTodo() {
      const index = this.$route.params.id;

      this.todos[index].title = this.title;
      this.todos[index].tags = this.tags;
      this.todos[index].description = this.description;
      this.todos[index].eDate = this.eDate;
      this.todos[index].status = this.status;

      this.saveTodos();

      this.$router.push("/");
    },
    // Удаляем дело
    removeTodo() {
      this.todos.splice(this.$route.params.id, 1);
      this.saveTodos();

      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.form-container {
  form {
    display: flex;
    flex-direction: column;
    .errorMessage {
      color: red;
    }
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
    .button-group {
      display: flex;
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
    .btn-create {
      &:hover {
        background: green;
        color: #fff;
      }
    }
    .btn-save {
      flex: 5;
      &:hover {
        background: orange;
        color: #fff;
      }
    }
    .btn-delete {
      flex: 1;
      margin-left: 5px;
      &:hover {
        background: red;
        color: #fff;
      }
    }
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .check-group label {
        margin-left: 7px;
      }
    }
  }
}
</style>
