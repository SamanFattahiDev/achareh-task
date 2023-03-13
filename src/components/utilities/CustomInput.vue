
<template>
  <div class="relative">
    <div @click="modelValue=null" v-if="modelValue" class="absolute top-2 left-2">
    <CloseIcon class="fill-gray-400"></CloseIcon>
    </div>
    <div class="pl-8 pr-1 border rounded border-gray-300 " :class="{'!border-red-500':error,'!border-achareh-green':error === false}">
  <input

      class=" w-full    leading-10  text-[11px] pr-2   placeholder:text-[11px]  outline-0"
      :placeholder="placeHolder"
      :type="dataType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :maxlength="maxLength"
  />
    </div>
    <span v-if="error" class="text-red-500 text-[10px]">{{ errorMessage }}</span>
  </div>
</template>


<script setup>
import CloseIcon from "@/components/icons/CloseIcon.vue";

  defineProps(['modelValue','dataType','maxLength','error','errorMessage','placeHolder'])
defineEmits(['update:modelValue'])

</script>
