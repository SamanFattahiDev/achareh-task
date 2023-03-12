<template>
  <main class="w-full pb-28 md:w-8/12 mx-auto min-h-screen bg-gray-100 ">
    <KeepAlive>
      <AddressData v-if="activeSlug===1" @sendAddressInfo="getAddressInfo" ref="child"></AddressData>
    </KeepAlive>
    <MapData ref="map" @changeSlug="activeSlug=1" v-if="activeSlug===2"
             @sendGeoLocationData="getGeoLocationData"></MapData>
    <ResponseCreate v-if="activeSlug===3"></ResponseCreate>
  </main>
  <div v-if="activeSlug!==3" class="fixed bottom-0 w-full z-50 flex justify-center h-[80px] shadow-xl p-3.5 bg-white">
    <button @click="callInfos" class="w-full md:w-8/12 flex items-center justify-center h-full rounded bg-achareh-green text-white">
      <span v-if="!isRequesting">ثبت و ادامه</span>
      <LoadingSpinner v-else></LoadingSpinner>
    </button>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, ref} from "vue";
import AddressData from "@/components/address/addressData.vue";
import MapData from "@/components/address/MapData.vue";
import LoadingSpinner from "@/components/utilities/loadingSpinner.vue";
import ResponseCreate from "@/components/address/ResponseCreate.vue";

const repositories: any = inject('repositories')
const child = ref<any>(null)
const map = ref<any>(null)

const addressInfo = ref<any>(null)
const activeSlug = ref<number>(1)
const isRequesting = ref(false)

function getAddressInfo(content: Object): void {
  addressInfo.value = content
  activeSlug.value = 2
}

function getGeoLocationData(content: any): void {
  addressInfo.value['lat'] = content.latitude
  addressInfo.value['lng'] = content.longitude
  createAddress()
}

async function createAddress() {
  try {
    isRequesting.value = true
    const res = await repositories.AddressEndPoint.setPayload(addressInfo.value)
    activeSlug.value = 3

  } catch (error:any) {
    // console.log(error.response.data)
  } finally {
    isRequesting.value = false
  }
}

function callInfos(): void {
  if (activeSlug.value === 1) {
    child.value.validateData()
  }
  if (activeSlug.value === 2) {
    map.value.sendGeoLocationData()
  }
}
</script>

<style scoped>

</style>