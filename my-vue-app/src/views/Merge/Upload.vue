<script setup lang="ts">
import UploadAlert from './UploadAlert.vue'
import { reactive } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue';
import { aUploadProps } from './props'

interface itemType {
  type: "error" | "success",
  file: any,
  message: string,
  description: string,
}

const itemList: itemType[] = reactive([])

async function beforeUploadHandler(file: any, fileList: Array<any>) {
  // console.log(file.name);
  const props: itemType = {
    file: file,
    type: 'error',
    message: file.name,
    description: 'description',
  };
  itemList.push(props)
  console.log(itemList);
}

function deleteItem(uid: string) {
  itemList.forEach((item, index) => {
    if (item.file.uid === uid) {
      itemList.splice(index, 1)
    }
  })
  console.log(itemList);
}

</script>

<template>
  <div class="wrapper">
    <a-upload v-bind="aUploadProps" :beforeUpload="beforeUploadHandler">
      <a-button type="primary">
        <UploadOutlined />导入 Excel 文件
      </a-button>
    </a-upload>
    <Suspense>
  <template #default>
   <UploadAlert v-for="item in itemList" v-bind="item" :key="item.file.uid" @delete="deleteItem" />
  </template>
  <template #fallback>
    Alert is loading...
  </template>
</Suspense>
  </div>
</template>

<style scope>
.wrapper {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 8px 0 0;
  text-align: center;
}
</style>

