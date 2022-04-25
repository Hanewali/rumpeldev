<template>
  <div class="blog" v-if="this.posts">
    <post-summary v-for="post in this.posts" :key="post._id" :title="post.title"
                  :content-summary="post.contentSummary" :image-url="post.imageUrl"/>
    <!--    <BlogPostComponent v-for="post in this.posts" :key="post._id" :title="post.title"-->
    <!--                       :content-summary="post.contentSummary"-->
    <!--                       :image-url="post.imageUrl"/>-->
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { POSTS } from '@/graphql/documents'
import { usePostsStore } from '@/stores/posts'
import { BlogPost } from '@/interfaces/Blogpost'
import PostSummary from '@/components/Blog/PostSummary.vue'

export default defineComponent({
  components: { PostSummary },
  setup () {
    const postsStore = usePostsStore()

    return { postsStore }
  },
  data () {
    return {
      posts: Array<BlogPost>()
    }
  },
  methods: {
    blogposts () {
      const { result } = useQuery(POSTS, { first: 0, limit: 10 })

      if (this.postsStore.posts.length > 0) {
        this.posts = this.postsStore.posts
        return
      }

      watch(result, value => {
        this.postsStore.posts = value.posts as Array<BlogPost>
        this.posts = value.posts as Array<BlogPost>
      })
    }
  },
  mounted () {
    this.blogposts()
  }
})

</script>

<style scoped lang="scss">

</style>
