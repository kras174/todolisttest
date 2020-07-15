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
  margin: 20px auto;
  li {
    margin-left: 10px;
    list-style: none;
  }
}
</style>
