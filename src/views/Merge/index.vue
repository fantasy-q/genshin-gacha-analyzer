<template>
  <Banner />
  <Upload />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/Banner.vue";
import Upload from "./components/Upload.vue";

export default defineComponent({
  components: { Banner, Upload },
});
</script>
