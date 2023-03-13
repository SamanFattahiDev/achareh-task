<template>
  <div class="h-full">
    <Header></Header>
    <RouterView/>
  </div>
</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import Header from "@/components/main/Header.vue";

</script>


<style scoped>

</style>
