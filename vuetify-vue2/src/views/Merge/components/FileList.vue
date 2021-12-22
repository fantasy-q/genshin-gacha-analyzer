<template>
  <div>
    <!-- File Info -->
    <File
      v-for="item in files"
      :key="`${item.id}-${item.file.name}`"
      :item="item"
    />
    <!-- Merge Button -->
    <div class="d-flex justify-center">
      <v-tooltip v-bind="vTooltipProps">
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-hover v-slot="{ hover }">
              <v-btn
                v-on="on"
                v-bind="vBtnProps"
                v-show="validFiles.length"
                class="text-capitalize rounded-sm"
                :class="{ 'on-hover': hover }"
                @click="mergeData(validFiles)"
              >
                <v-icon left> mdi-upload-multiple </v-icon>
                <span style="letter-spacing: normal">
                  合并生成新文件
                </span>
              </v-btn>
            </v-hover>
          </div>
        </template>
        <span>请导入至少 2 个 Excel 文件</span>
      </v-tooltip>
    </div>
    <!-- Merge Alert -->
  </div>
</template>

<script>
import File from './File.vue'
import { mapGetters } from 'vuex'
import { mergeData } from '../mergeData'

export default {
  name: 'FileList',
  components: { File },
  data: () => ({
    vBtnProps: {
      outlined: true,
      disabled: null,
    },
    vTooltipProps: {
      bottom: true,
      disabled: null,
    },
  }),
  methods: {
    mergeData,
  },
  computed: {
    ...mapGetters(['files']),
    validFiles() {
      return this.files.filter(item => item.type.no)
    },
  },
  updated() {
    console.log(this.validFiles.length)
    this.vBtnProps.disabled =
      this.validFiles.length <= 1 ? true : false
    this.vTooltipProps.disabled =
      this.validFiles.length > 1 ? true : false
  },
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
