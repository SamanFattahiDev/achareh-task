<template>
  <div class="w-full p-3 md:w-8/12 mx-auto min-h-screen bg-gray-100 ">
    <h1 class="font-bold text-gray-500 m-3">آدرس ها و مشخصات</h1>
    <AddressCard class="md:hidden block" v-for="(item,idx) in pageData.addresses" :key="idx" :item="item"></AddressCard>
      <AddressCardDesktop class=" md:grid hidden" v-for="(item,idx) in pageData.addresses" :key="idx" :item="item"></AddressCardDesktop>
  </div>

</template>

<script setup>

import {inject, onMounted, reactive, ref} from "vue";
import AddressCard from "../components/address/AddressCard.vue";
import AddressCardDesktop from "../components/address/AddressCardDesktop.vue";
const repositories = inject('repositories')
const pageData = reactive({
  addresses: []
})
onMounted(async () => {
  try {
    const res = await repositories.AddressEndPoint.setTag()
    pageData.addresses = res.data
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>

</style>
