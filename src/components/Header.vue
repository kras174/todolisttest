<template>
  <div id="nav">
    <h1>Следи за делами!</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/addtodo">Add Todo</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  h1 {
    margin-bottom: 10px;
  }
  a.router-link-exact-active {
    text-decoration: none;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #fff;

    &:visited {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
