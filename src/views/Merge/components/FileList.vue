<template>
  <div>
    <File v-for="(file, index) in files" :key="index" :file="file" />
    <div class="d-flex justify-center">
      <v-tooltip v-bind="vTooltipProps">
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-hover v-slot="{ hover }">
              <v-btn
                v-on="on"
                v-bind="vBtnProps"
                v-show="files.length"
                class="text-capitalize rounded-sm"
                :class="{ 'on-hover': hover }"
              >
                <v-icon left> mdi-upload-multiple </v-icon>
                <span style="letter-spacing: normal">
                  合并生成新文件</span
                >
              </v-btn>
            </v-hover>
          </div>
        </template>
        <span>请导入至少 2 个 Excel 文件</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import File from './FileAlert.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'FileList',
  components: { File },
  data: () => ({
    hasDeleted: false,
    vBtnProps: {
      outlined: true,
      disabled: null
    },
    vTooltipProps: {
      bottom: true,
      disabled: null
    }
  }),
  computed: {
    ...mapGetters(['files'])
  },
  updated() {
    this.vBtnProps.disabled = this.files.length <= 1 ? true : false
    this.vTooltipProps.disabled = this.files.length > 1 ? true : false
  }
}
</script>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
.v-btn:not(.on-hover) {
  border: 1px solid #d9d9d9;
}
.v-btn.on-hover {
  color: #40a9ff;
}
</style>