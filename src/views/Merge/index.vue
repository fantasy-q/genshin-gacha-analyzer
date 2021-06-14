<template>
  <div id="merge">
    <!-- Banner -->
    <Banner />
    <!-- Upload -->
    <Upload />
    <!-- Files -->
    <File
      v-for="(file, index) in this.$store.getters.files"
      :key="index"
      :file="file"
    />
    <!-- Warning -->
    <Warning />
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Upload from './Upload.vue'
import File from './FileAlert.vue'
import Warning from '@/components/Warning.vue'
export default {
  name: 'LoadPage',
  components: { Banner, Upload, File, Warning },
  data: () => ({
    files: null
  })
}
</script>