<template>
  <div class="blog">
    <BlogPostComponent v-for="post in blogposts" :key="post.id" :title="post.title" :content-summary="post.shortContent" :image-url="post.imageUrl"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlogPostComponent from '@/components/Blog/BlogPost.vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { POSTS } from '@/graphql/documents'

interface BlogPost {
  _id: string,
  title: string,
  contentSummary: string,
  imageUrl: string,
  content: string,
  authorName: string
}

const { result, loading, error } = useQuery<{
  search: BlogPost
}>(POSTS)

const blogposts = result
</script>

<style scoped lang="scss">

</style>
