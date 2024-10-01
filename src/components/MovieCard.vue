<template>
  <div class="movie-card">
    <img :src="fullPosterPath" alt="Movie Poster" />
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as () => Movie,
      required: true,
    },
  },
  computed: {
    fullPosterPath(): string {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
  },
});
</script>

<style scoped>
.movie-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  text-align: center;
}

img {
  width: 100%;
  border-radius: 8px;
}
</style>
