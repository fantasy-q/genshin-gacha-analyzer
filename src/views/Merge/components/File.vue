<template>
  <v-alert v-bind="vAlertProps" ref="fileAlert" @input="deleteFile">
    <div class="d-flex flex-column">
      <span>{{ item.file.name }}</span>
      <span style="font-size: 0.875rem">{{ item.message }}</span>
    </div>
  </v-alert>
</template>

<script>
export default {
  name: 'FileAlert',
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    vAlertProps: {
      //color: 'success',
      // icon: 'mdi-check-circle-outline',
      closeIcon: 'mdi-delete-outline',
      width: 555,
      text: true,
      tile: true,
      outlined: true,
      dismissible: true,
      class: 'mx-auto my-2',
    },
  }),
  methods: {
    deleteFile() {
      this.$store.dispatch('delete', this.item.id)
    },
  },
  created() {
    this.vAlertProps.type = this.item.type.name
  },
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
