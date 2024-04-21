<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Movie } from '@/types/movie.type'
import moment from 'moment'

const router = useRouter()

const props = defineProps({
  movie: {
    type: Object as () => Movie | null,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const nextMovie = () => {
  const releaseDate = props.movie?.release_date
  const newDate = moment(releaseDate).add(1, 'days').format('YYYY-MM-DD')

  location.href = `/?date=${newDate}`
}
</script>

<template>
  <div>
    <div v-if="loading" class="text-center p-5 text-white">
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <br>
      Cargando...
    </div>
    <div v-else>
      <section class="main d-flex align-items-center justify-content-center">
        <h1 class="text-center">When is the next MCU film?</h1>
      </section>
      <section class="text-center">
        <h2 class="text-center">{{ movie?.title }} releases in {{ movie?.days_until }} days!</h2>
        <p>Release date: {{ movie?.release_date }}</p>
        <p>Production type: {{ movie?.type }}</p>
        <p v-if="movie?.following_production?.title">What's afterward? <button @click="nextMovie" class="btn btn-link p-0">{{ movie?.following_production.title }}</button></p>
      </section>
      <section class="img d-flex align-items-center justify-content-center">
        <img :src="movie?.poster_url" alt="" />
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>