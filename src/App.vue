<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroInfoComponent from "@/components/HeroInfoComponent.vue";
import FloatingBadge from "@/components/FloatingBadge.vue";
</script>

<template>
  <!-- Wrapper principal: pantalla completa y flex column -->
  <div class="relative overflow-hidden min-h-screen flex flex-col">
    <!-- blobs decorativos -->
    <div class="hidden md:block bg-primary w-32 h-64 rounded-full blur-[140px] absolute left-[20%] -top-52"></div>
    <div class="hidden md:block bg-primary w-[262.76px] h-[241.31px] rounded-full blur-[140px] absolute right-[20%] -top-60"></div>


    <!-- Header -->
    <HeaderComponent />

    <!-- Contenido dinámico (ocupa el espacio disponible) -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Imagen flotante siempre sobre el footer -->
    <div class="relative  md:absolute md:bottom-[100px] md:right-0 z-20 pointer-events-none -mb-[100px]">
      <div class="hidden md:block bg-primary w-[600px] h-[331px] rounded-full blur-[140px] absolute right-[38%] -bottom-24 "></div>
      <FloatingBadge title="Explora sin límites" class="absolute top-[40%] left-[15%] z-10"/>
      <FloatingBadge title="Tecnología al alcance de tu mente" class="absolute top-[60%] left-[40%] z-10"/>
      <FloatingBadge title="Crea el mañana desde hoy" class="absolute top-[75%] left-[5%] z-10"/>
      <img
          src="@/assets/robot_IA_png.png"
          alt="robot IA"
          class="
          w-[60vw] sm:w-[45vw] md:w-[40vw] lg:w-[45vw] xl:w-[60vw]
          max-w-[300px] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[900px]
          h-auto
          md:translate-x-[-15vw] lg:translate-x-[-12vw] xl:translate-x-[-6vw]
          mx-auto md:mx-0
        "
      />
    </div>

    <!-- Footer siempre abajo -->
    <footer class="relative z-10 bg-black border-t border-t-[#0F141C] h-[100px] text-center text-white flex items-center justify-center">
     <div class="w-[960px] max-w-[960px]  flex justify-start">
       <img class="hidden md:block" src="@/assets/ucss.png" alt="ucss"/>
     </div>
    </footer>
  </div>
</template>