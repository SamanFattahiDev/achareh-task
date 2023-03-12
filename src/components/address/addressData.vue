<template>
    <div class="p-3.5">
      <h1 class="font-bold ">ثبت آدرس</h1>
      <section class="bg-white   rounded shadow mt-3 p-2 md:p-8 ">


        <div class="w-full grid grid-cols-12 space-x-2">
          <div class="col-span-12 ">
            <span class="form-default ">لطفا مشخصات و آدرس خود را وارد کنید</span>
          </div>
          <div class="col-span-12 md:col-span-4 my-3 flex flex-col gap-2">
            <span class="form-default">نام</span>
            <VInput :dataType="'text'" :error="nameValidation" :placeHolder="'مثال : محمد'"
                    :errorMessage="'نام باید دارای 3 کاراکتر باشد'" v-model="addressInfo.first_name"></VInput>
          </div>
          <div class="col-span-12 md:col-span-4 my-3 flex flex-col gap-2">
            <span class="form-default">نام خانوادگی</span>
            <VInput :dataType="'text'" :error="lastNameValidation" :placeHolder="'مثال : رضایی'"
                    :errorMessage="'نام خانوادگی باید دارای 3 کاراکتر باشد'" v-model="addressInfo.last_name"></VInput>
          </div>
          <div class="col-span-12 md:col-span-4 my-3 flex flex-col gap-2">
            <span class="form-default">شماره تلفن همراه</span>
            <VInput :maxLength="'11'" :error="mobileValidation" :placeHolder="'09121111111'"
                    :errorMessage="'پر کردن این فیلد الزامی است'" :dataType="'tel'"
                    v-model="addressInfo.coordinate_mobile"></VInput>
          </div>
          <div class="col-span-12 md:col-span-4 my-3 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="form-default">شماره تلفن ثابت (اختیاری)</span>
              <span class="!text-gray-400 form-default ">* با پیش شماره </span>
            </div>
            <VInput :maxLength="'11'" :dataType="'tel'" :placeHolder="'02144256780'"
                    v-model="addressInfo.coordinate_phone_number"></VInput>
          </div>
          <div class="col-span-12 md:col-span-8  my-3 flex flex-col gap-2">
            <span class="form-default">آدرس</span>
            <VInput :error="addressValidation" :errorMessage="'پر کردن این فیلد الزامی است'" :dataType="'text'"
                    v-model="addressInfo.address"></VInput>
          </div>
          <div class="col-span-12 my-3   flex items-center  gap-5">
            <span class="form-default">جنسیت</span>
            <div class="flex items-center gap-1">
              <small class="form-default">خانم</small>
              <input type="radio" v-model="addressInfo.gender" value="female" class=" radio  " name="gender">
            </div>
            <div class="flex items-center gap-1">
              <small class="form-default">آقا</small>
              <input type="radio" v-model="addressInfo.gender" value="male" class="radio   " name="gender">
            </div>
          </div>
        </div>
      </section>
    </div>



</template>

<script setup lang="ts">
import {computed, defineEmits, defineExpose, reactive, ref} from "vue";
import VInput from "@/components/utilities/VInput.vue";

interface basicAddressData {
  first_name: string,
  last_name: string,
  coordinate_mobile: number | null,
  coordinate_phone_number: number | null,
  address: string,
  region: number,
  gender: string
}

const addressInfo = reactive<basicAddressData>({
  first_name: '',
  last_name: '',
  coordinate_mobile: null,
  coordinate_phone_number: null,
  address: '',
  region: 1,
  gender: ''
})


defineExpose({
  validateData
})
const emits = defineEmits(['sendAddressInfo'])

function validateData() {
  if (!nameValidation.value && !lastNameValidation.value && !mobileValidation.value && !addressValidation.value) {
    emits('sendAddressInfo', addressInfo)
  }
}

const nameValidation = computed(() => {
  let resolve = null
  if (addressInfo.first_name && addressInfo.first_name.length < 3) {
    resolve = true
  } else {
    resolve = false
  }
  return resolve
})
const lastNameValidation = computed(() => {
  let resolve = null
  if (addressInfo.last_name && addressInfo.last_name.length < 3) {
    resolve = true
  } else {
    resolve = false
  }
  return resolve
})
const mobileValidation = computed(() => {
  let resolve = null
  if (addressInfo.coordinate_mobile && addressInfo.coordinate_mobile.length !== 11) {
    resolve = true
  } else {
    resolve = false
  }
  return resolve
})
const addressValidation = computed(() => {
  let resolve = null
  if (addressInfo.address && addressInfo.address.length < 10) {
    resolve = true
  } else {
    resolve = false
  }
  return resolve
})

</script>

<style scoped>
.form-default {
  @apply text-gray-700 text-[12px]
}

.radio:checked, .radio[aria-checked=true] {
  --tw-bg-opacity: 1;
  background-color: #2EBBA6;
  animation: radiomark .2s ease-in-out;
  box-shadow: 0 0 0 4px white inset, 0 0 0 4px #2EBBA6 inset;
}

.radio {
  flex-shrink: 0;
  --chkbg: #2EBBA6;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #2EBBA6;
  --tw-border-opacity: .2;
  transition: background, box-shadow .2s ease-in-out;
}


</style>