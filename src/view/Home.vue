<script setup>
import HeroInfoComponent from "@/components/HeroInfoComponent.vue";
</script>

<template>
  <main class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4">
    <div class="relative flex flex-col md:flex-row items-center md:items-start">
      <!-- Texto -->
      <HeroInfoComponent class="z-10" />

      <!-- Imagen
      <img
          src="@/assets/robot_IA_png.png"
          alt="robot IA"
          class="
          mt-8 md:mt-0
          w-2/3 sm:w-1/2 md:w-[480px] lg:w-[600px] xl:w-[800px]
          h-auto
          md:absolute md:-right-72 md:-top-14
          mx-auto md:mx-0
        "
      />
      -->
    </div>
  </main>
</template>
