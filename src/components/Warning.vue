<template>
  <a-alert v-bind="aAlertProps">
    <template #message>
      <div>
        此网站是静态网站，你的文件不会被上传到网站后台，具体代码请查看
        <a-button v-bind="aButtonProps">
          GitHub
        </a-button>
      </div>
    </template>
  </a-alert>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      aAlertProps: {
        type: "warning",
        showIcon: true,
        style: {
          margin: "20px auto",
          width: "100%",
          maxWidth: "600px",
        },
      },
      aButtonProps: {
        type: "link",
        target: "_blank",
        href: "https://github.com/fantasy-q/genshin-gacha-analyzer",
      },
    };
  },
});
</script>
