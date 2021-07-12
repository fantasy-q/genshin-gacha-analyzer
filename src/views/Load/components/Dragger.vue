<template>
  <a-upload-dragger
    v-bind="aDraggerProps"
    v-model:fileList="fileList"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon"><InboxOutlined /></p>
    <p class="ant-upload-text">
      点击选择抽卡记录导出文件或将文件拖拽到此区域
    </p>
    <p class="ant-upload-hint">( 注：文件的后缀应为.xlsx )</p>
  </a-upload-dragger>
</template>

<script lang="ts">
import { InboxOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    InboxOutlined,
  },
  data() {
    return {
      fileList: null,
      aDraggerProps: {
        name: "file",
        multiple: false,
        accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xlsx",
        // beforeUpload: this.handleUpload,
        showUploadList: false,
        style: {
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "40px",
        },
      },
    };
  },
  methods: {
    // handleUpload() {
    //   console.log("sdfsdfsdf");
    // },
    handleChange(info: any) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
});
</script>
