<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroInfoComponent from "@/components/HeroInfoComponent.vue";
import FloatingBadge from "@/components/FloatingBadge.vue";

// Estados para controlar las animaciones
const showRobot = ref(false);
const showBadges = ref(false);
const showBlobs = ref(false);
const showFooter = ref(false);
const isTransitioning = ref(false);

const route = useRoute();
const isHome = computed(() => route.name === 'Home');

// Funciones para manejar las transiciones de página
const onBeforeEnter = () => {
  isTransitioning.value = true;
};

const onAfterEnter = () => {
  isTransitioning.value = false;
};

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
    <main class="flex-1">
      <router-view v-slot="{ Component, route }">
        <transition
          name="page"
          mode="out-in"
          @before-enter="onBeforeEnter"
          @after-enter="onAfterEnter"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Imagen flotante siempre sobre el footer -->
    <div v-if="isHome" class="relative md:absolute md:bottom-[100px] md:right-0 z-20 -mb-[100px]">
      <!-- Contenedor del robot con efectos mejorados -->
      <div class="relative robot-container">
        <!-- Blob principal con glow mejorado -->
        <div
            :class="[
            'hidden md:block bg-gradient-to-br from-primary via-orange-500 to-primary w-[650px] h-[380px] rounded-full blur-[160px] absolute right-[35%] -bottom-32 transition-all duration-1500 ease-out pointer-events-none',
            showRobot ? 'opacity-70 scale-100' : 'opacity-0 scale-75'
          ]"
        ></div>

        <!-- Anillos orbitales decorativos -->
        <div
            :class="[
            'hidden md:block absolute right-[40%] top-[20%] w-[400px] h-[400px] border-2 border-orange-500/20 rounded-full transition-all duration-2000 ease-out pointer-events-none',
            showRobot ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
          ]"
          style="animation: rotate-orbit 20s linear infinite;"
        ></div>

        <div
            :class="[
            'hidden md:block absolute right-[38%] top-[18%] w-[450px] h-[450px] border border-orange-400/10 rounded-full transition-all duration-2000 ease-out delay-200 pointer-events-none',
            showRobot ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
          ]"
          style="animation: rotate-orbit-reverse 25s linear infinite;"
        ></div>

        <!-- Partículas flotantes -->
        <div
            :class="[
            'hidden md:block absolute right-[45%] top-[25%] w-3 h-3 bg-orange-500 rounded-full transition-all duration-1000 ease-out pointer-events-none',
            showBadges ? 'opacity-60' : 'opacity-0'
          ]"
          style="animation: float-particle 4s ease-in-out infinite;"
        ></div>

        <div
            :class="[
            'hidden md:block absolute right-[35%] top-[15%] w-2 h-2 bg-orange-400 rounded-full transition-all duration-1000 ease-out delay-300 pointer-events-none',
            showBadges ? 'opacity-40' : 'opacity-0'
          ]"
          style="animation: float-particle 5s ease-in-out infinite 1s;"
        ></div>

        <div
            :class="[
            'hidden md:block absolute right-[50%] top-[40%] w-2.5 h-2.5 bg-primary rounded-full transition-all duration-1000 ease-out delay-500 pointer-events-none',
            showBadges ? 'opacity-50' : 'opacity-0'
          ]"
          style="animation: float-particle 6s ease-in-out infinite 2s;"
        ></div>

        <!-- FloatingBadges mejorados con animaciones -->
        <div
            :class="[
            'absolute top-[30%] md:top-[40%] left-[15%] z-10 transition-all duration-1000 ease-out',
            showBadges ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-5'
          ]"
          style="animation: float-badge 3s ease-in-out infinite;"
        >
          <FloatingBadge title="Explora sin límites" />
        </div>

        <div
            :class="[
            'absolute top-[62%] md:top-[60%] left-[40%] z-10 transition-all duration-1000 ease-out delay-200',
            showBadges ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 -translate-y-5'
          ]"
          style="animation: float-badge 3.5s ease-in-out infinite 0.5s;"
        >
          <FloatingBadge title="Tecnología al alcance de tu mente" />
        </div>

        <div
            :class="[
            'absolute top-[78%] md:top-[75%] left-[5%] z-10 transition-all duration-1000 ease-out delay-400',
            showBadges ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-8'
          ]"
          style="animation: float-badge 4s ease-in-out infinite 1s;"
        >
          <FloatingBadge title="Crea el mañana desde hoy" />
        </div>

        <!-- Robot con efectos mejorados -->
        <div class="relative pointer-events-auto group">
          <!-- Aura de hover -->
          <div class="hidden md:block absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <!-- Imagen del robot -->
          <img
              src="@/assets/robot_IA_png.png"
              alt="robot IA"
              :class="[
              `w-[80vw] sm:w-[45vw] md:w-[40vw] lg:w-[45vw] xl:w-[50vw]
              max-w-[300px] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[900px]
              h-auto
              md:translate-x-[-15vw] lg:translate-x-[-12vw] xl:translate-x-[-6vw]
              mx-auto md:mx-0
              transition-all duration-1000 ease-out
              drop-shadow-[0_0_40px_rgba(255,122,1,0.3)]
              hover:drop-shadow-[0_0_60px_rgba(255,122,1,0.5)]`,
              showRobot ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            ]"
          />
        </div>
      </div>
    </div>

    <!-- Footer siempre abajo con animación -->
    <footer
        :class="[
        'relative z-10 bg-black border-t border-t-[#0F141C] h-[100px] text-center text-white flex items-center justify-center transition-all duration-800 ease-out',
        showFooter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <div class="w-[960px] max-w-[960px] flex justify-start">
        <img class="hidden md:block w-[300px]" src="@/assets/lablogo.svg" alt="ucss"/>
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

/* Transiciones entre páginas */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Animación flotante continua para el robot */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

img[alt="robot IA"] {
  animation: float 3.5s ease-in-out infinite;
  animation-delay: 2s;
}

.group:hover img[alt="robot IA"] {
  animation: float-hover 2s ease-in-out infinite;
}

@keyframes float-hover {
  0%, 100% {
    transform: translateY(-5px) scale(1.02);
  }
  50% {
    transform: translateY(-20px) scale(1.03);
  }
}

/* Anillos orbitales */
@keyframes rotate-orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-orbit-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* Partículas flotantes */
@keyframes float-particle {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.6;
  }
  25% {
    transform: translateY(-15px) translateX(10px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-25px) translateX(5px);
    opacity: 1;
  }
  75% {
    transform: translateY(-15px) translateX(-5px);
    opacity: 0.8;
  }
}

/* Badges flotantes mejorados */
@keyframes float-badge {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
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
    opacity: 0.85;
  }
}

/* Efecto de brillo en el contenedor del robot */
.robot-container {
  position: relative;
}

.robot-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 122, 1, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.robot-container:hover::before {
  opacity: 1;
}
</style>