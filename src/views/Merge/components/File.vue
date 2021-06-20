<template>
  <v-alert v-bind="vAlertProps" ref="fileAlert" @input="deleteFile">
    <div style="margin-bottom: 0.5rem">{{ file.name }}</div>
    <div style="font-size: 0.875rem">{{ timeRange }}</div>
  </v-alert>
</template>

<script>
import readFile from '../scripts/readFile'
import uploadItem from '../scripts/uploadItem'

export default {
  name: 'FileAlert',
  props: {
    file: {
      type: File,
      default: null,
      require: true
    }
  },
  data: () => ({
    timeRange: null,
    vAlertProps: {
      color: 'success',
      icon: 'mdi-check-circle-outline',
      closeIcon: 'mdi-delete-outline',
      width: 555,
      text: true,
      tile: true,
      outlined: true,
      dismissible: true,
      class: 'mx-auto my-2'
    }
  }),
  methods: {
    deleteFile() {
      this.$store.dispatch('delete', this.file)
    }
  },
  beforeMount() {
    readFile(this.file).then(r => {
      this.timeRange = uploadItem(r)
    })
  }
}
</script>

<style scoped>
.v-alert >>> .v-alert__content {
  color: black;
}
.v-btn::before {
  background-color: transparent;
}
</style>
