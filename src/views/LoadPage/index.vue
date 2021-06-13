<template>
  <div id="load">
    <!-- Banner -->
    <Banner />
    <!-- Dragger -->
    <Dragger />
    <!-- Warning -->
    <v-alert v-bind="vAlertProps">
      此网站是静态网站，你的文件不会被上传到网站后台，具体代码请查看
      <v-btn
        v-bind="vBtnProps"
        href="https://github.com/voderl/genshin-gacha-analyzer"
        target="_blank"
      >
        github链接
      </v-btn>
    </v-alert>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Dragger from './Dragger.vue'
export default {
  name: 'LoadPage',
  components: { Banner, Dragger },
  data: () => ({
    vAlertProps: {
      type: 'warning',
      icon: 'mdi-alert-outline',
      width: 650,
      text: true,
      tile: true,
      outlined: true,
      class: 'mx-auto',
      style: {
        fontSize: '.875rem'
      }
    },
    vBtnProps: {
      color: 'warning',
      text: true,
      height: 'auto',
      ripple: false,
      class: 'text-capitalize'
    }
  })
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
