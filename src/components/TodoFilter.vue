<template>
  <ul class="filter-container">
    Фильтр:
    <li>
      <router-link to="/" :class="{ active: $route.params.filter === '/' }"
        >Все</router-link
      >
    </li>
    <li>
      <router-link
        to="/inwork"
        :class="{ active: $route.params.filter === '/inwork' }"
        >В работе</router-link
      >
    </li>
    <li>
      <router-link
        to="/complite"
        :class="{ active: $route.params.filter === '/complite' }"
        >Завершены</router-link
      >
    </li>
    <li>
      <router-link
        to="/outdate"
        :class="{ active: $route.params.filter === '/outdate' }"
        >Просрочены</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filter-container {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  li {
    margin-left: 10px;
    list-style: none;
    a {
      text-decoration: none;
      color: #333;
      background: #fff;
      padding: 5px;
      border-radius: 5px;
      transition: all 0.2s ease-in;
      &:hover {
        color: #fff;
        background: #333;
      }
    }
    .router-link-exact-active {
      color: #fff;
      background: #333;
    }
  }
}
</style>
