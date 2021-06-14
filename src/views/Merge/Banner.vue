<template>
  <v-alert v-bind="vBannerProps">
    部分手机浏览器可能不支持导出 Excel 文件
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
    }
  })
}
</script>

<style scoped>
/* v-deep */
.v-alert >>> .v-alert__content {
  color: black;
  text-align: center;
  font-size: 0.875rem;
}
.v-btn::before {
  background-color: transparent;
}
</style>