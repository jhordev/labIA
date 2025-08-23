<script setup>
// Props
defineProps({
  text: {
    type: String,
    default: 'Inscribir grupo'
  },
  variant: {
    type: String,
    default: 'solid', // "solid" | "ghost"
  }
})

// Emit para manejar el click
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <!-- VARIANTE SOLID -->
  <div v-if="variant === 'solid'" class="flex bg-gradient-to-b from-[#FF7A01] to-[#FF7A01]/0 rounded-full p-[1px]">
    <button
        @click="handleClick"
        class="group cursor-pointer relative bg-secondary bg-opacity-60 backdrop-blur-sm rounded-full pl-4 pr-2 py-2 text-white font-medium text-lg hover:bg-opacity-80 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
    >
      <span class="flex items-center space-x-3">
        <span>{{ text }}</span>
        <svg
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
          <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
  </div>

  <!-- VARIANTE GHOST -->
  <div v-else class="flex">
    <button
        @click="handleClick"
        class="group cursor-pointer relative rounded-full pl-4 pr-2 py-2 text-white font-medium text-lg transition-all duration-300"
    >
      <span class="flex items-center space-x-3">
        <span>{{ text }}</span>
        <svg
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
          <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
