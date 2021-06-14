<template>
  <v-alert v-bind="vAlertProps">
    {{ file.name }}
  </v-alert>
</template>

<script>
export default {
  name: 'FileAlert',
  props: {
    file: File,
    default: null
  },
  data() {
    const files = this.$store.getters.files
    console.log(...files);
    return {
      vAlertProps: {
        type: 'success',
        icon: 'mdi-check-circle-outline',
        width: 650,
        text: true,
        tile: true,
        outlined: true,
        dismissible: true,
        class: 'mx-auto my-5',
        style: {
          fontSize: '.875rem'
        }
      }
    }
  }
}
</script>

<style scoped>
/* v-deep */
.v-alert >>> .v-alert__content {
  color: black;
}
.v-btn::before {
  background-color: transparent;
}
</style>