<script setup>
import ButtonBase from "@/components/ButtonBase.vue";
</script>

<template>
  <section class="max-w-[580px] flex flex-col justify-center items-center md:items-start">
    <!-- cabe -->
    <div class="bg-gradient-to-b from-primary to-primary/0 rounded-full p-[1px]">
      <div class="rounded-full bg-secondary px-4 py-2.5">
        <span class="text-[clamp(12px,3.5vw,16px)] font-normal text-[#B5B0B7]">Impulsa tus ideas. Colabora. Innova.</span>
      </div>
    </div>

    <!-- title -->
    <h1 class="mt-5 text-center md:text-left text-[clamp(32px,12vw,68px)] leading-[clamp(32px,12vw,68px)] tracking-[-1px] sm:text-[clamp(40px,10vw,56px)] sm:leading-[clamp(40px,10vw,56px)] md:text-[clamp(56px,8vw,96px)] md:leading-[clamp(56px,8vw,96px)] md:tracking-[-2.88px] lg:text-[clamp(72px,7vw,96px)] lg:leading-[clamp(72px,7vw,96px)] xl:text-[96px] xl:leading-[96px] text-white font-medium">
      Del aula a la innovación con la IA
    </h1>

    <!-- subtitle -->
    <p class="font-normal text-center md:text-left max-w-[503px] text-[clamp(14px,4vw,18px)] sm:text-[clamp(15px,3.8vw,18px)] md:text-[clamp(16px,2.2vw,18px)] lg:text-[18px] text-[#B5B0B7] mt-5">
      Accede a los laboratorios de IA y desarrolla tus proyectos con impacto.
    </p>

    <div class="mt-10 flex gap-4 flex-col items-center md:flex-row">
      <ButtonBase text="Inscribir grupo" variant="solid" />
      <ButtonBase text="Ver requisitos" variant="ghost" />
    </div>
  </section>
</template>

<style scoped>
</style>