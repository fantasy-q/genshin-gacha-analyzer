<template>
  <v-alert v-bind="vAlertProps" ref="fileAlert">
    <div>{{ file.name }}</div>
    <div>{{ file.name }}</div>
  </v-alert>
</template>

<script>
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
  })
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