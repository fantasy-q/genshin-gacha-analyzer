<template>
  <a-layout>
    <!-- Header -->
    <!-- 
      <a-layout-header v-bind="aLayoutSiderProps">
        <Menu />
      </a-layout-header>
     -->

    <!-- Sider -->
    <a-layout-sider v-bind="aLayoutSiderProps">
      <Menu />
    </a-layout-sider>

    <!-- Content -->
    <a-layout-content> Content </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./components/Menu.vue";

export default defineComponent({
  components: {
    Menu,
  },
  data() {
    return {
      aLayoutSiderProps: {
        breakpoint: "lg",
        theme: "light",
        width: "15%",
        style: {
          height: "100vh",
        },
      },
      aLayoutHeaderProps: {
        style: {
          paddingLeft: "20px",
          paddingRight: "0px",
          background: "#fff",
          lineHeight: "56px",
        },
      },
    };
  },
});
</script>
