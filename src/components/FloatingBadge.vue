<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="border w-fit border-white/20 bg-[#908092]/15 backdrop-blur-[12px] py-2 px-4 rounded-[12px] text-[12px] sm:text-[20px] md:text-[22px] font-semibold text-white">
    {{ title }}
  </div>
</template>
