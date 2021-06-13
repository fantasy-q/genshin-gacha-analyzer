<template>
  <v-alert v-bind="vBannerProps">
    <v-container class="pa-0">
      <v-row v-bind="vRowProps">
        <v-col v-bind="vColProps">
          不知道如何获取抽卡记录导出文件？
          <v-btn
            v-bind="vBtnProps"
            href="https://ngabbs.com/read.php?tid=25657464"
            target="_blank"
          >
            请点击这里
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-bind="vRowProps">
        <v-col v-bind="vColProps">
          合并多个抽卡记录文件
          <v-btn v-bind="vBtnProps"> 请点击这里 </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-alert>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({
    vBannerProps: {
      color: 'info',
      text: true,
      class: 'my-5'
    },
    vBtnProps: {
      color: 'info',
      text: true,
      height: 'auto',
      ripple: false
    },
    vRowProps: {
      dense: true,
      justify: 'center'
    },
    vColProps: {
      cols: 'auto',
      class: 'black--text',
      style: {
        fontSize: '0.875rem'
      }
    }
  })
}
</script>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
</style>