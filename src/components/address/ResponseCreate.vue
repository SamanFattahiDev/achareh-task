<template>
<div class="w-full min-h-screen flex flex-col items-around justify-start pt-20">
  <div class="flex flex-col items-center space-y-5 justify-center px-5">
    <CheckIcon class="w-[34px] h-[34px]"></CheckIcon>
    <span class="text-[14px] font-bold">اطلاعات شما با موفقیت ثبت شد </span>
    <button class="w-full md:w-3/12 hover:bg-achareh-green hover:text-white transition-all flex items-center justify-center leading-10  h-full rounded border-2 border-achareh-green text-achareh-green">
      <router-link class="w-full" to="/">
      <span >مشاهده اطلاعات</span>
      </router-link>
    </button>
  </div>

</div>
</template>

<script setup>
import CheckIcon from "@/components/icons/CheckIcon.vue";

</script>

<style scoped>

</style>
