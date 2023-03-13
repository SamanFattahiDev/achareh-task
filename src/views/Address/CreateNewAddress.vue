<template>
  <main class="w-full pb-28 md:pb-0 md:w-8/12 mx-auto h-screen bg-gray-100  flex items-center ">
    <KeepAlive>
      <AddressData v-if="activeSlug===1" ref="child" @sendAddressInfo="getAddressInfo"></AddressData>
    </KeepAlive>
    <MapData v-if="activeSlug===2" ref="map" @changeSlug="activeSlug=1"
             @sendGeoLocationData="getGeoLocationData"></MapData>
    <ResponseCreate v-if="activeSlug===3"></ResponseCreate>
  </main>
  <div v-if="activeSlug!==3" class="sticky bottom-0 w-full z-50 flex justify-center h-[80px] shadow-xl p-3.5 bg-white">
    <button class="w-full md:w-2/12 flex items-center justify-center h-full rounded bg-achareh-green text-white"
            @click="callInfos">
      <span v-if="!isRequesting">ثبت و ادامه</span>
      <LoadingSpinner v-else></LoadingSpinner>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {computed, inject, ref} from "vue";
import AddressData from "@/components/address/addressData.vue";
import MapData from "@/components/address/MapData.vue";
import LoadingSpinner from "@/components/utilities/loadingSpinner.vue";
import ResponseCreate from "@/components/address/ResponseCreate.vue";
import { useToast } from "vue-toastification";
import errorHandler from '@/plugins/errorHandler.js'
const repositories: any = inject('repositories')

const child = ref<any>(null)
const map = ref<any>(null)
const toast = useToast();
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
  } catch (error: any) {
    errorHandler(error.response.data)
    activeSlug.value= 1
  } finally {
    isRequesting.value = false
  }
}

function callInfos(): void {

  if (activeSlug.value === 1) {
    child.value.validateData()
  }
  if (activeSlug.value === 2) {
    map?.value?.sendGeoLocationData()
  }
}
</script>

<style scoped>

</style>
