<script setup>
import { onMounted, ref } from 'vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroInfoComponent from "@/components/HeroInfoComponent.vue";
import FloatingBadge from "@/components/FloatingBadge.vue";

// Estados para controlar las animaciones
const showRobot = ref(false);
const showBadges = ref(false);
const showBlobs = ref(false);
const showFooter = ref(false);

onMounted(() => {
  // Secuencia de animaciones
  setTimeout(() => {
    showBlobs.value = true;
  }, 300);

  setTimeout(() => {
    showRobot.value = true;
  }, 600);

  setTimeout(() => {
    showBadges.value = true;
  }, 1200);

  setTimeout(() => {
    showFooter.value = true;
  }, 1800);
});
</script>

<template>
  <!-- Wrapper principal: pantalla completa y flex column -->
  <div class="relative overflow-hidden min-h-screen flex flex-col">
    <!-- blobs decorativos con animación de entrada -->
    <div
        :class="[
        'hidden md:block bg-primary w-32 h-64 rounded-full blur-[140px] absolute left-[20%] -top-52 transition-all duration-1000 ease-out',
        showBlobs ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
      ]"
    ></div>
    <div
        :class="[
        'hidden md:block bg-primary w-[262.76px] h-[241.31px] rounded-full blur-[140px] absolute right-[20%] -top-60 transition-all duration-1000 ease-out delay-200',
        showBlobs ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
      ]"
    ></div>

    <!-- Header con animación de fade-in -->
    <div class="animate-fade-in-down">
      <HeaderComponent />
    </div>

    <!-- Contenido dinámico (ocupa el espacio disponible) -->
    <main class="flex-1 animate-fade-in delay-300">
      <router-view />
    </main>

    <!-- Imagen flotante siempre sobre el footer -->
    <div class="relative md:absolute md:bottom-[100px] md:right-0 z-20 pointer-events-none -mb-[100px]">
      <!-- Blob con animación -->
      <div
          :class="[
          'hidden md:block bg-primary w-[600px] h-[331px] rounded-full blur-[140px] absolute right-[38%] -bottom-24 transition-all duration-1500 ease-out',
          showRobot ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        ]"
      ></div>

      <!-- FloatingBadges con animaciones escalonadas -->
      <div
          :class="[
          'absolute top-[30%] md:top-[40%] left-[15%] z-10 transition-all duration-800 ease-out',
          showBadges ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-5'
        ]"
      >
        <FloatingBadge title="Explora sin límites" />
      </div>

      <div
          :class="[
          'absolute top-[62%] md:top-[60%] left-[40%] z-10 transition-all duration-800 ease-out delay-200',
          showBadges ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 -translate-y-5'
        ]"
      >
        <FloatingBadge title="Tecnología al alcance de tu mente" />
      </div>

      <div
          :class="[
          'absolute top-[78%] md:top-[75%] left-[5%] z-10 transition-all duration-800 ease-out delay-400',
          showBadges ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-8'
        ]"
      >
        <FloatingBadge title="Crea el mañana desde hoy" />
      </div>

      <!-- Robot con animación principal -->
      <img
          src="@/assets/robot_IA_png.png"
          alt="robot IA"
          :class="[
          `w-[80vw] sm:w-[45vw] md:w-[40vw] lg:w-[45vw] xl:w-[60vw]
          max-w-[300px] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[900px]
          h-auto
          md:translate-x-[-15vw] lg:translate-x-[-12vw] xl:translate-x-[-6vw]
          mx-auto md:mx-0
          transition-all duration-1000 ease-out`,
          showRobot ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        ]"
      />
    </div>

    <!-- Footer siempre abajo con animación -->
    <footer
        :class="[
        'relative z-10 bg-black border-t border-t-[#0F141C] h-[100px] text-center text-white flex items-center justify-center transition-all duration-800 ease-out',
        showFooter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <div class="w-[960px] max-w-[960px] flex justify-start">
        <!--<img class="hidden md:block" src="@/assets/ucss.png" alt="ucss"/>-->
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Animaciones personalizadas usando Tailwind */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.delay-300 {
  animation-delay: 0.3s;
}

/* Animación flotante continua para el robot */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

img[alt="robot IA"] {
  animation: float 3s ease-in-out infinite;
  animation-delay: 2s;
}

/* Efecto de brillo para los badges */
.floating-badge {
  animation: pulse 2s infinite;
  animation-delay: 2.5s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>