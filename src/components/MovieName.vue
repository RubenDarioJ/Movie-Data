<script setup lang="ts">
import type { Movie } from '@/types/movie.type'
import { RouterLink } from 'vue-router'

defineProps({
  movie: {
    type: Object as () => Movie | null,
    default: null
  }
})
</script>
<template>
  <div>
    <section class="main d-flex align-items-center justify-content-center">
      <h1 class="text-center">When is the next MCU film?</h1>
    </section>
    <section class="text-center">
      <h2 class="text-center">{{ movie?.title }} releases in {{ movie?.days_until }} days!</h2>
      <p>Release date: {{ movie?.release_date }}</p>
      <p>Production type: {{ movie?.type }}</p>
      <p>What's afterward? <RouterLink :to="`/movies/${movie?.release_date}`"> {{ movie?.following_production.title }} </RouterLink></p>
    </section>
    <section class="img d-flex align-items-center justify-content-center">
      <img :src="movie?.poster_url" alt="" />
    </section>
  </div>
</template>
<style scoped>
</style>