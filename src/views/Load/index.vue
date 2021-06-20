<template>
  <div id="load">
    <!-- Banner -->
    <Banner />
    <!-- Dragger -->
    <Dragger />
    <!-- Warning -->
    <Warning />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Dragger from './components/Dragger.vue'
import Warning from '@/components/Warning.vue'

export default {
  name: 'LoadPage',
  components: { Banner, Dragger, Warning }
}
</script>