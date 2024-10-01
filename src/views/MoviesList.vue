<!-- src/components/MoviesList.vue -->
<template>
  <h1>Popular Movies</h1>
  <div class="movies-list">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { fetchData } from "../utils/http";
import MovieCard from "../components/MovieCard/MovieCard.vue";

export default defineComponent({
  components: {
    MovieCard,
  },
  setup() {
    const movies = ref<any[]>([]);

    const loadMovies = async () => {
      try {
        movies.value = await fetchData("/movie/popular", { page: 1 });
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    };

    onMounted(loadMovies);

    return { movies };
  },
});
</script>

<style>
.movies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
