<template>
  <ul class="filter-container">
    Фильтр:
    <li><router-link to="/">Все</router-link></li>
    <li><router-link to="/inwork">В работе</router-link></li>
    <li><router-link to="/complite">Завершены</router-link></li>
    <li><router-link to="/outdate">Просрочены</router-link></li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px auto;
  li {
    margin: 10px 5px;
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
