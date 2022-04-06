<template>
  <nav class="navbar">
    <RouterLink to="/" class="router-link">Home</RouterLink>
    <RouterLink to="/about" class="router-link">Portfolio</RouterLink>
<!--    <RouterLink to="/contact" class="router-link">Contact</RouterLink>-->
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppNavigation'
}
</script>

<style scoped lang="css">
  .navbar{
    margin-left: auto;
  }

  .navbar>.router-link:not(:last-child){
    border-right: 1px solid black;
  }
  .navbar>.router-link{
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
</style>
