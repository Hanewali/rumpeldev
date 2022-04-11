<template>
  <div class="blog">
    <BlogPostComponent v-for="post in blogposts" :key="post.id" :title="post.title" :content-summary="post.shortContent" :image-url="post.imageUrl"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlogPostComponent from '@/components/Blog/BlogPost.vue'

interface BlogPost {
  id: number,
  title: string,
  shortContent: string,
  imageUrl: string
}

const blogposts = computed<BlogPost[]>(() => [
  {
    id: 1,
    title: 'Name1',
    shortContent: 'Description1',
    imageUrl: 'https://via.placeholder.com/750x350'
  },
  {
    id: 2,
    title: 'Name2',
    shortContent: 'Description2',
    imageUrl: 'https://via.placeholder.com/750x350'
  },
  {
    id: 3,
    title: 'Name3',
    shortContent: 'Description3',
    imageUrl: 'https://via.placeholder.com/750x350'
  }
])
</script>

<style scoped lang="scss">

</style>
