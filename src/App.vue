<template>
  <v-app>
    <Load v-if="!uploaded && !merge" />
    <Show v-else-if="uploaded" />
    <Merge v-else-if="merge" />
  </v-app>
</template>

<script>
import Load from './views/Load'
import Merge from './views/Merge'
import Show from './views/Show'
export default {
  name: 'App',
  components: { Load, Merge, Show },
  data: () => ({}),
  computed: {
    uploaded() {
      return this.$store.getters.file
    },
    merge() {
      return this.$store.state.toMerge
    }
  }
}
</script>

