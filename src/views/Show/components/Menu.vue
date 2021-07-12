<template>
  <a-menu v-bind="aMenuProps" v-model:selectedKeys="selectedKey">
    <GitHubCorner />
    <a-menu-item
      v-for="item in aMenuItems"
      :key="item.key"
      v-bind="aMenuItemProps"
    >
      <template #icon>
        <component :is="item.icon" />
      </template>
      {{ item.name }}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GitHubCorner from "./GitHubCorner.vue";

import {
  BarChartOutlined,
  UnorderedListOutlined,
  StarOutlined,
  PieChartOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    GitHubCorner,
    BarChartOutlined,
    UnorderedListOutlined,
    StarOutlined,
    PieChartOutlined,
  },

  setup() {
    const aMenuProps = {
      // border-right
      mode: "inline",
      style: {
        marginTop: "80px",
      },
    };
    const aMenuItemProps = {
      style: {
        height: "60px",
        lineHeight: "60px",
        paddingLeft: "24px",
      },
    };
    const aMenuItems = [
      { key: "timeline", icon: BarChartOutlined, name: "时间轴" },
      { key: "analysisChart", icon: PieChartOutlined, name: "分析图" },
      { key: "achievements", icon: StarOutlined, name: "成就表" },
      { key: "rawData", icon: UnorderedListOutlined, name: "原数据" },
    ];

    return {
      selectedKey: ref([aMenuItems[0].key]),
      aMenuProps,
      aMenuItemProps,
      aMenuItems,
    };
  },
});
</script>
