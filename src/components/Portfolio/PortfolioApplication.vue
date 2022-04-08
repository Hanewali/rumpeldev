<template>
  <div class="portfolio">
    <img src={{AppImage}} alt="Application Image">
    <h4>{{ AppName }}</h4>
    <p>{{AppDescription}}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    AppName: String,
    AppDescription: String,
    AppImage: String
  }
})

export default class PortfolioApplication extends Vue {
  AppName!: string
  AppDescription!: string
  AppImage!: string
}
</script>

<style scoped lang="scss">
.portfolio {
  min-width: 300px;
  display: inline-block;
  background-color: #00000010;
  min-width: content-box/4;
  padding: 2rem;
}
</style>
