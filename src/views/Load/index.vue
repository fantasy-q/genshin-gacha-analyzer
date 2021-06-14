<template>
  <div id="load">
    <!-- Banner -->
    <Banner  />
    <!-- Dragger -->
    <Dragger />
    <!-- Warning -->
    <Warning />
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Dragger from './UploadDragger.vue'
import Warning from '@/components/Warning.vue'
export default {
  name: 'LoadPage',
  components: { Banner, Dragger, Warning },
  data: () => ({
    methods: {

    }
  })
}
</script>