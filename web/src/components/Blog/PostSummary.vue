<template>
  <div class="blogpost">
    <img :src="imageUrl" alt="Post image">
    <div class="postInfo">
      <h3>{{ title }}</h3>
      <p>{{ contentSummary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  contentSummary: String,
  imageUrl: String
})
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}

.postInfo{
  position: absolute;
  margin-top: auto;
  margin-bottom: 10%;
}

.blogpost {
  width: 60vw;
  margin: 1rem auto;
}
</style>
