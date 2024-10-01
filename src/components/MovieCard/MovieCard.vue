<template>
  <div class="movie-card">
    <img :src="posterUrl" alt="Movie Poster" />
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.release_date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Movie } from './MovieCard'; // Import the Movie type

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as () => Movie,
      required: true,
    },
  },
  computed: {
    posterUrl(): string {
      return this.movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        : '';
    },
  },
});
</script>

<style src="./MovieCard.css"></style>
