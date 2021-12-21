<script setup lang="ts">
const divProps = {
  className: ['ant-alert-info'],
  style: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '20px 0',
  }
}
const aAlertProps = {
  message: '部分手机浏览器可能不支持导出 Excel 文件',
  type: 'info',
  showIcon: false,
  banner: true,
}
</script>

<template>
  <div v-bind="divProps">
    <a-alert v-bind="aAlertProps" />
  </div>
</template>
