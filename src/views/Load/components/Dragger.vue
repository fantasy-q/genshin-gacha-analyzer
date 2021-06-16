<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-bind="vCardProps"
      class="my-5 mx-auto pa-10"
      :class="{ 'on-hover': hover || isDragover }"
      @click="click"
      @dragover.prevent="drag"
      @dragleave.prevent="drag"
      @drop.prevent="drop"
    >
      <input v-bind="inputProps" @change="fileSelect" />
      <v-card-title v-bind="vCardTitleProps">
        <v-icon color="info" size="48">mdi-inbox-outline</v-icon>
      </v-card-title>
      <v-card-title v-bind="vCardTitleProps">
        点击选择抽卡记录导出文件或将文件拖拽到此区域
      </v-card-title>
      <v-card-subtitle v-bind="vCardSubtitleProps">
        ( 注：文件的后缀应为.xlsx )
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadDragger',
  data: () => ({
    isDragover: false,
    vCardProps: {
      width: 650,
      ripple: false,
      tile: true,
      flat: true,
      style: {
        backgroundColor: '#fafafa'
      }
    },
    inputProps: {
      hidden: true,
      type: 'file',
      ref: 'loadUpload',
      accept:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    vCardTitleProps: {
      class: 'justify-center my-2 pa-2',
      style: {
        fontSize: '1rem'
      }
    },
    vCardSubtitleProps: {
      class: 'pa-0 my-2',
      style: {
        textAlign: 'center'
      }
    }
  }),
  methods: {
    ...mapActions(['load']),
    click() {
      this.$refs.loadUpload.click()
    },
    drop(e) {
      this.load(e.dataTransfer.files[0])
    },
    fileSelect(e) {
      this.load(e.target.files[0])
    },
    drag(e) {
      switch (e.type) {
        case 'dragover':
          if (!this.isDragover) {
            this.isDragover = true
          }
          break
        case 'dragleave':
          this.isDragover = false
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
.v-card:not(.on-hover) {
  border: 1px dashed #d9d9d9;
    transition: all .2s ease-in;
}
.v-card.on-hover {
  border: 1px dashed #40a9ff;
  transition: all .2s ease-in;
}
.v-card:before {
  background-color: transparent;
}
</style>