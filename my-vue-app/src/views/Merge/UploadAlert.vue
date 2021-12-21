<script setup lang="ts">
import { DeleteOutlined } from '@ant-design/icons-vue';

interface itemType {
  type: "error" | "success",
  file: any,
  message: string,
  description: string,
}

const itemProps = withDefaults(
  defineProps<itemType>(), {}
)

const emit = defineEmits<{
  (e: 'delete', uid: string): void
}>()
</script>

<template>
  <a-alert v-bind="itemProps" showIcon>
    <template #closeText>
      <DeleteOutlined @click="emit('delete', itemProps.file.uid)" />
    </template>
  </a-alert>
</template>
