<template>
  <div id="merge">
    <!-- Banner -->
    <Banner />
    <!-- Upload -->
    <Upload />
    <!-- FileList -->
    <FileList />
    <!-- Warning -->
    <Warning />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Upload from './components/Upload.vue'
import FileList from './components/FileList.vue'
import Warning from '@/components/Warning.vue'
export default {
  name: 'LoadPage',
  components: { Banner, Upload, FileList, Warning },
  data: () => ({})
}
</script>