<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <a-layout class="h-screen">
    <a-layout-sider class="!w-[60px]">Header</a-layout-sider>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>
