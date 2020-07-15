import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import TodoForm from "@/components/TodoForm.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/addtodo",
    name: "AddTodo",
    component: TodoForm
  },
  {
    path: "/todos/:id",
    name: "EditTodo",
    component: TodoForm
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
