<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

const handleChange = (info: FileInfo) => {
  console.log(info);
};

const draggerProps = {
  name: 'file',
  multiple: false,
  accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xlsx',
  showUploadList: false,
  style: {
    width: "100 %",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px",
  },
  customRequest: () => { }
}
</script>

<template>
  <a-upload-dragger v-bind="draggerProps" @change="handleChange">
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">点击选择抽卡记录导出文件或将文件拖拽到此区域</p>
    <p class="ant-upload-hint">( 注：文件的后缀应为.xlsx )</p>
  </a-upload-dragger>
</template>

