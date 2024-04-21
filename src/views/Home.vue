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
  </div>
  <MovieName :movie="movie" />
</template>
<style scoped>
.main {
  background-color: #111111;
}

h1 {
  color: #ffff;
}

h2 {
  color: #ffff;
  padding: 20px;
}

p {
  color: #ffff;
}
.main {
  height: 100px;
}
</style>
