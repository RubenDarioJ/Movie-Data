<script setup lang="ts">
import { ref } from 'vue'
import type { Movie } from '@/types/movie.type'
import ApiServices from '@/api/index'
import MovieComponent from '@/components/Movie.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const date = route.query?.date ?? null

const movie = ref<Movie | null>(null)
const loading = ref<boolean>(false)

loading.value = true
ApiServices.getData({ date })
  .then((response) => {
    movie.value = response.data
  })
  .finally(() => {
    loading.value = false
  })

</script>
<template>
  <div>
    <MovieComponent :loading="loading" :movie="movie" />
  </div>
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
