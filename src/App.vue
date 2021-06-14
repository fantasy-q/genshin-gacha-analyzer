<template>
  <v-app>
    <Load />
    <Merge />
  </v-app>
</template>

<script>
import Load from './views/Load'
import Merge from './views/Merge'
export default {
  name: 'App',
  components: { Load, Merge },
  data: () => ({
    file: null,
    
  })
}
</script>

