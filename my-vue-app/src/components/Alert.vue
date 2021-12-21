<script setup lang="ts">
const alertProps = {
  type: "warning",
  showIcon: true,
  style: {
    margin: "20px auto",
    width: "100%",
    maxWidth: "600px",
  },
};

const aButtonProps = {
  type: "link",
  target: "_blank",
  href: "https://github.com/voderl/genshin-gacha-analyzer",
}
</script>

<template >
  <a-alert v-bind="alertProps">
    <template #message>
      <div>
        此网站是静态网站，你的文件不会被上传到网站后台，具体代码请查看
        <a-button v-bind="aButtonProps">GitHub链接</a-button>
      </div>
    </template>
  </a-alert>
</template>
