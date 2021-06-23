<template>
  <div class="d-flex justify-center">
    <v-btn v-bind="vBtnProps" @click="input">
      <input v-bind="inputProps" @change="fileSelect" />
      <v-icon left> mdi-upload-multiple </v-icon>
      <span style="letter-spacing: normal">导入 Excel 文件</span>
    </v-btn>
  </div>
</template>

<script>
import createUploadItem from '../uploadItem'
import { mapActions } from 'vuex'

export default {
  name: 'Upload',
  data: () => ({
    fileInput: null,
    inputProps: {
      hidden: true,
      type: 'file',
      multiple: true,
      ref: 'mergeUpload',
      accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    vBtnProps: {
      color: 'info',
      depressed: true,
      class: 'text-capitalize rounded-sm',
    },
  }),
  mounted() {
    this.fileInput = this.$refs.mergeUpload
  },
  methods: {
    ...mapActions(['update']),
    input() {
      this.fileInput.click()
    },
    fileSelect(e) {
      const files = e.target.files
      for (const file of files) {
        createUploadItem(file)
          .then(uploadItem => {
            this.update(uploadItem)
          })
          .catch(uploadItem => {
            this.update(uploadItem)
          })
          .finally(() => {
            this.fileInput.value = null
          })
      }
    },
  },
}
</script>
