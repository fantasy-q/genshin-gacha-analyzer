<template>
  <v-alert v-bind="vAlertProps">
    此网站是静态网站，你的文件不会被上传到网站后台，具体代码请查看
    <v-btn v-bind="vBtnProps"> GitHub链接 </v-btn>
  </v-alert>
</template>

<script>
export default {
  name: 'Warning',
  data: () => ({
    vAlertProps: {
      type: 'warning',
      // icon: 'mdi-alert-outline',
      width: 650,
      text: true,
      tile: true,
      outlined: true,
      class: 'mx-auto my-5',
      style: {
        fontSize: '.875rem',
      },
    },
    vBtnProps: {
      color: 'warning',
      text: true,
      height: 'auto',
      ripple: false,
      class: 'text-capitalize',
      href: 'https://github.com/fantasy-q/genshin-gacha-analyzer',
      target: '_blank',
    },
  }),
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
