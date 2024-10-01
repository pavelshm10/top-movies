<template>
  <div id="app">
    <Loader v-if="isLoading" />
    <router-view
      @route-change-start="showLoading"
      @route-change-end="hideLoading"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Loader from "./components/Loader/Loader.vue";

export default defineComponent({
  components: {
    Loader,
  },
  setup() {
    const isLoading = ref(false);

    const showLoading = () => {
      isLoading.value = true;
    };

    const hideLoading = () => {
      isLoading.value = false;
    };

    return { isLoading, showLoading, hideLoading };
  },
});
</script>

<style>
#app {
  text-align: center;
}
</style>
