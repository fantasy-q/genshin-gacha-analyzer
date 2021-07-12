<template>
  <Banner />
  <Dragger />
  <Warning />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/Banner.vue";
import Dragger from "./components/Dragger.vue";
import Warning from "../../components/Warning.vue";

export default defineComponent({
  components: { Banner, Dragger, Warning },
});
</script>
