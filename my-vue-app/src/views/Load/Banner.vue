<script setup lang="ts">
const alertProps = {
  type: "info",
  banner: true,
  showIcon: false,
};

const divProps = {
  className: ["ant-alert-info"],
  style: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    border: "none",
    margin: "20px 0",
  },
};

function handleGoToMergePage() {
  console.log("handleGoToMergePage");
}
</script>

<template >
  <div v-bind="divProps">
    <a-alert v-bind="alertProps">
      <template #message>
        <div>
          不知道如何获取抽卡记录导出文件？
          <a
            href="https://ngabbs.com/read.php?tid=25657464"
            target="_blank"
          >
            <a-button type="link">请点击这里</a-button>
          </a>
        </div>
        <div>
          合并多个抽卡记录文件
          <a-button type="link" @click="handleGoToMergePage">
            请点击这里
          </a-button>
        </div>
      </template>
    </a-alert>
  </div>
</template>

<style scoped>
</style>
