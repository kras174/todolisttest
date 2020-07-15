import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import AddTodo from "../views/AddTodo.vue";
import EditTodo from "../views/EditTodo.vue";
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
    component: AddTodo
  },
  {
    path: "/todos/:id",
    name: "EditTodo",
    component: EditTodo
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
