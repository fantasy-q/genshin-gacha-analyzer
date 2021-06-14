<template>
  <div class="d-flex justify-center">
    <v-btn v-bind="vBtnProps" @click="input">
      <input v-bind="inputProps" @change="fileSelect" />
      <v-icon left> mdi-upload-multiple </v-icon>
      导入Excel文件
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data: () => ({
    inputProps: {
      hidden: true,
      type: 'file',
      multiple: true,
      ref: 'mergeUpload',
      accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    vBtnProps: {
      color: 'info',
      depressed: true,
      class: 'text-capitalize rounded-sm'
    }
  }),
  methods: {
    input() {
      this.$refs.mergeUpload.click()
    },
    fileSelect(e) {
      this.$store.dispatch('appendFiles', e.target.files)
    }
  }
}
</script>