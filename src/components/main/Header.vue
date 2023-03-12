<template>
<nav class="w-full z-50 h-[50px] shadow bg-white sticky px-3 top-0 flex  items-center justify-between ">
  <img src="/src/assets/image/logo.png" width="45" height="25" alt="">
    <div class="flex items-center gap-3">
      <router-link exact-active-class="link-active-class" to="/Address/CreateNewAddress" class="font-bold transition-all hover:text-achareh-green text-[12px]">ثبت آدرس</router-link>
      <router-link exact-active-class="link-active-class" to="/" class="font-bold transition-all hover:text-achareh-green  text-[12px]">مشاهده آدرس ها</router-link>

    </div>
</nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>