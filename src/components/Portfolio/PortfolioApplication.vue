<template>
  <div class="portfolio">
    <img :src="appImage" alt="Application Image">
    <h4>{{ appName }}</h4>
    <p>{{appDescription}}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  appImage: String,
  appName: String,
  appDescription: String
})

</script>

<style scoped lang="scss">
.portfolio {
  display: inline-block;
  min-width: content-box/4;
  padding: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
