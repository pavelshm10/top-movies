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
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 16px;
  margin: 16px;
}

@media (max-width: 1200px) {
  .movies-list {
    grid-template-columns: repeat(3, 1fr); 
  }
}

@media (max-width: 900px) {
  .movies-list {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 600px) {
  .movies-list {
    grid-template-columns: 1fr;
  }
}
</style>
