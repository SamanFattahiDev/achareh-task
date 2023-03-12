<template>
  <div class="bg-white grid grid-cols-1 space-y-5  my-2 rounded shadow mt-3 p-4 md:p-8 ">
    <div class="w-full flex items-center justify-between">
      <span class="text-gray-400 text-[14px]">نام و نام خانوادگی</span>
      <span class="text-[14px]">{{ props.item.last_name  +' '+ props.item.first_name}}</span>
    </div>
    <div class="w-full flex items-center justify-between">
      <span class="text-gray-400 text-[14px]">جنسیت</span>
      <span class="text-[14px]">{{props.item.gender!==''?props.item.gender:'-'}}</span>
    </div>
    <div class="w-full flex items-center justify-between">
      <span class="text-gray-400 text-[14px]">شماره تلفن همراه</span>
      <span class="text-[14px]">{{props.item.coordinate_mobile}}</span>
    </div>
    <div class="w-full flex items-center justify-between border-b pb-3">
      <span class="text-gray-400 text-[14px]">شماره تلفن ثابت</span>
      <span class="text-[14px]">{{props.item.coordinate_phone_number}}</span>
    </div>
    <div class="w-full flex items-center justify-between">
      <span class="text-gray-400 text-[14px]">آدرس</span>
      <span class="text-[14px]" style="overflow-wrap: anywhere">{{props.item.address}}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item:Object
})
</script>

<style scoped>

</style>