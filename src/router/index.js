import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import TodoForm from "@/components/TodoForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:filter",
    name: "Filter",
    component: Home
  },
  {
    path: "/todos/addtodo",
    name: "AddTodo",
    component: TodoForm
  },
  {
    path: "/todos/:id",
    name: "EditTodo",
    component: TodoForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
