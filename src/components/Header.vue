<template>
  <div id="nav">
    <h1>Следи за делами!</h1>
    <router-link to="/">Список дел</router-link> |
    <router-link to="/todos/addtodo">Добавить дело</router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  h1 {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
