<template>
  <div id="app">
    <h1>Popular Movies</h1>
    <div class="movies-list">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import MovieCard from './components/MovieCard.vue';
import { fetchPopularMovies } from './services/movieService';

export default defineComponent({
  name: 'App',
  components: {
    MovieCard,
  },
  setup() {
    const movies = ref<any[]>([]);

    const loadMovies = async () => {
      try {
        movies.value = await fetchPopularMovies();
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    onMounted(loadMovies);

    return { movies };
  },
});
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
