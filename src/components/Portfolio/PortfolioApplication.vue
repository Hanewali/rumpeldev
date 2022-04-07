<template>
  <div class="portfolio">
    <img src="http://via.placeholder.com/150x80" alt="Placeholder">
    <h4>AppName</h4>
    <p>This is application description</p>
  </div>
</template>

<script setup lang="ts">
export default {
  name: 'PortfolioApplication',
  props: {

  }
}
</script>

<style scoped lang="scss">
  .portfolio{
    min-width: 300px;
    display: inline-block;
    background-color: #00000010;
    min-width: content-box/4;
    padding: 2rem;
  }
</style>
