<script setup lang="ts">
import { ref } from 'vue'
import Movie from '@/types/movie.type'
import ApiServices from '@/api/index'
import MovieName from '@/components/MovieName.vue';

const movie = ref<Movie | null>(null)

ApiServices.getData().then((response) => {
  movie.value = response.data
  // console.log(response.data)
})
</script>
<template>
  <div>
    <section class="main d-flex align-items-center justify-content-center">
      <h1 class="text-center">When is the next MCU film?</h1>
    </section>
    <section class="text-center">
      <h2 class="text-center">
        {{ movie?.following_production.title }} releases in
        {{ movie?.following_production.days_until }} days!
      </h2>
      <p>Release date: {{ movie?.following_production.release_date }}</p>
      <p>Production type: {{ movie?.following_production.type }}</p>
      <p>What's afterward? {{ movie?.following_production.title }}</p>
    </section>
    <section class="img d-flex align-items-center justify-content-center">
      <img :src="movie?.following_production.poster_url" alt="" />
    </section>
    <!-- <MovieName :movie="movie" /> -->
  </div>
</template>
<style scoped>

</style>