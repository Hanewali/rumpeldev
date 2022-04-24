<template>
  <div class="portfolio">
    <h1>This is a portfolio page</h1>
    <portfolio-application
      v-for="app in applications"
      :key=app.id
      :app-description="app.description"
      :app-name="app.name"
      :app-image="app.image"
    />
  </div>
</template>

<script setup lang="ts">
import PortfolioApplication from '@/components/Portfolio/PortfolioApplication.vue'
import { computed } from 'vue'

interface Application {
  id: number,
  name: string,
  description: string,
  image: string
}

const applications = computed<Application[]>(() => [
  {
    id: 1,
    name: 'Name1',
    description: 'Description1',
    image: 'https://via.placeholder.com/250x150'
  },
  {
    id: 2,
    name: 'Name2',
    description: 'Description2',
    image: 'https://via.placeholder.com/250x150'
  },
  {
    id: 3,
    name: 'Name3',
    description: 'Description3',
    image: 'https://via.placeholder.com/250x150'
  }
])

</script>

<style lang="scss" scoped>

</style>
