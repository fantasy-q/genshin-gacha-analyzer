<template>
  <v-app>
    <LoadPage />
  </v-app>
</template>

<script>
import LoadPage from './views/LoadPage'
export default {
  name: 'App',
  components: { LoadPage },
  data: () => ({
    file: null
  })
}
</script>

