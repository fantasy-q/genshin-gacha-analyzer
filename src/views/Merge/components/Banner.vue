<template>
  <a-alert v-bind="aBannerProps"></a-alert>
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
        message: "部分手机浏览器可能不支持导出 Excel 文件",
        style: {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          border: "none",
          margin: "20px 0",
        },
      },
    };
  },
});
</script>
