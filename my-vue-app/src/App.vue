<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Load from "./views/Load/index.vue";
import Merge from "./views/Merge/index.vue";

const toMerge = true

</script>

<template>
  <Load v-if="!toMerge" />
  <Merge v-else-if="toMerge" />
</template>

<style>
#app {
  font-family: HYWenHei;
  font-weight: 600;
  overflow: auto;
}
</style>
