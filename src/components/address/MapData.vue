<template>
  <div class="w-full md:w-8/12 mx-auto min-h-screen bg-gray-100 ">
    <div class="flex my-5  items-center text-[#37474F] gap-2">
      <ArrowRightIcon></ArrowRightIcon>
    <h1 class="font-bold md:text-[16px] ">انتخاب آدرس </h1>
    </div>

    <div class="w-full md:hidden block bg-red-500 sticky shadow-background   top-[50px] grid grid-cols-5  h-[38px]">
      <div @click="changeSlug" class="col-span-2 flex items-center justify-start  ">
        <ArrowRightIcon class="w-[20px] mx-3"></ArrowRightIcon>
      </div>
      <div class="col-span-3 flex items-center justify-start">
        <span class="text-[12px]">انتخاب موقعیت</span>
      </div>
    </div>
    <div class="w-full md:block hidden bg-red-500 sticky flex shadow-background p-5 items-center h-full  top-[50px] grid grid-cols-5  h-[38px]">
      <div class="col-span-3 flex items-center justify-start">
        <span class="text-[12px]">موقعیت مورد نظر خود را روی نقشه مشخص کنید</span>
      </div>
    </div>
    <div class="w-full">
      <Map @getGeoLocation="SetGeoLocation"></Map>
    </div>

  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
import Map from "@/components/address/Map.vue";
import {reactive} from "vue";
const emits = defineEmits(['changeSlug','sendGeoLocationData'])
function changeSlug() {
  emits('changeSlug')
}
interface geoLocation {
  latitude: number | null,
  longitude: number | null
}
const geoLocation = reactive<geoLocation>({
  latitude: null,
  longitude: null
})
function SetGeoLocation(lat: number, lang: number) {
  geoLocation.latitude = lat
  geoLocation.longitude = lang
}
function sendGeoLocationData(){
  emits('sendGeoLocationData',geoLocation)
}


defineExpose({
  sendGeoLocationData
})
</script>

<style scoped>
.shadow-background {
  background: rgba(255, 255, 255, 0.8);
}
</style>
