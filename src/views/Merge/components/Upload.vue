<template :style="WrapperStyle">
  <a-upload v-bind="aUploadProps">
    <a-button v-bind="aButtonProps">
      <UploadOutlined />
      导入 Excel 文件
    </a-button>
  </a-upload>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UploadOutlined,
  },
  data() {
    return {
      aUploadProps: {
        name: "file",
        accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xlsx",
        multiple: true,
        beforeUpload: this.handleBeforeUpload,
        showUploadList: false,
      },
      aButtonProps: {
        type: "primary",
      },
      WrapperStyle: {
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "8px 0 0",
        textAlign: "center",
      },
    };
  },
  methods: {
    handleBeforeUpload() {
      console.log("sdf");
    },
  },
});
</script>
