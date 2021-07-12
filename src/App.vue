<template>
  <Load v-if="!uploaded && !merge" />
  <Merge v-else-if="merge" />
  <Show v-else-if="uploaded" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Load from "./views/Load/index.vue";
import Merge from "./views/Merge/index.vue";
import Show from "./views/Show/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Load,
    Merge,
    Show,
  },
  computed: {
    uploaded() {
      // return this.$store.getters.file;
      return true;
    },
    merge() {
      return this.$store.state.toMerge;
    },
  },
});
</script>

<style>
#app {
  font-family: HYWenHei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  overflow: auto;
}
</style>
