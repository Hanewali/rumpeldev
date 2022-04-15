<template>
  <nav class="navbar">
    <RouterLink to="/" class="router-link">Home</RouterLink>
    <RouterLink to="/blog" class="router-link">Blog</RouterLink>
    <RouterLink to="/portfolio" class="router-link">Portfolio</RouterLink>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppNavigation'
}
</script>

<style scoped lang="scss">
.navbar {
  margin-left: auto;
  max-width: max-content;
}
/*.navbar>.router-link:not(:last-child){*/
/*  border-right: 1px solid black;*/
/*}*/
.navbar {
  .router-link {
    padding: 1rem;
    &:not(:last-child){
      border-right: 1px solid #2c3e5060;
    }
    &:not(:last-child):hover{
      border-right: 1px solid #00000000;
    }
    &:hover {
      background-color: #2c3e5060;
      color: #FFFFFFBB;
    }
  }
}
</style>
