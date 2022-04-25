import { defineStore } from 'pinia'
import { BlogPost } from '@/interfaces/Blogpost'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: Array<BlogPost>()
  })
})
