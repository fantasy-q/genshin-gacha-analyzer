<template>
  <v-alert v-bind="vAlertProps" ref="fileAlert">
    <v-container class="pa-0">
      <v-row no-gutters>
        <v-col>
          <div>{{ file.name }}</div>
          <div>{{ file.name }}</div>
        </v-col>
        <v-col cols="auto">
          <v-btn v-bind="vBtnProps">
            <v-icon @click="deleteFile">
              mdi-delete-off-outline
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
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
      type: 'success',
      icon: 'mdi-check-circle-outline',
      width: 555,
      text: true,
      tile: true,
      outlined: true,
      class: 'mx-auto my-2'
    },
    vBtnProps: {
      icon: true,
      class: 'float-right'
    }
  }),
  methods: {
    deleteFile() {
      this.$store.dispatch('delete', this.file)
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