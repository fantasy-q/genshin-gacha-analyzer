<template>
  <a-alert v-bind="aBannerProps">
    <template #message>
      <div>
        不知道如何获取抽卡记录导出文件？
        <a-button v-bind="aButtonProps">请点击这里</a-button>
      </div>
      <div>
        合并多个抽卡记录文件
        <a-button type="link" @click="toMerge"> 请点击这里 </a-button>
      </div>
    </template>
  </a-alert>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      aBannerProps: {
        type: "info",
        banner: true,
        showIcon: false,
        class: "ant-alert-info",
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          border: "none",
          margin: "20px 0",
        },
      },
      aButtonProps: {
        type: "link",
        target: "_blank",
        href: "https://ngabbs.com/read.php?tid=25657464",
      },
    };
  },
  methods: {
    toMerge() {
      this.$store.dispatch("toMerge");
    },
  },
});
</script>
