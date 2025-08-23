<script setup>
import { onMounted, ref } from 'vue';
import ButtonBase from "@/components/ButtonBase.vue";

// Estados para controlar las animaciones
const showBadge = ref(false);
const showTitle = ref(false);
const showSubtitle = ref(false);
const showButtons = ref(false);

onMounted(() => {
  // Secuencia de animaciones del hero
  setTimeout(() => {
    showBadge.value = true;
  }, 400);

  setTimeout(() => {
    showTitle.value = true;
  }, 800);

  setTimeout(() => {
    showSubtitle.value = true;
  }, 1200);

  setTimeout(() => {
    showButtons.value = true;
  }, 1600);
});
</script>

<template>
  <section class="max-w-[580px] flex flex-col justify-center items-center md:items-start">
    <!-- badge con animación -->
    <div
        :class="[
        'bg-gradient-to-b from-primary to-primary/0 rounded-full p-[1px] transition-all duration-800 ease-out',
        showBadge ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
      ]"
    >
      <div class="rounded-full bg-secondary px-4 py-2.5 animate-glow">
        <span class="text-[clamp(12px,3.5vw,16px)] font-normal text-[#B5B0B7]">Impulsa tus ideas. Colabora. Innova.</span>
      </div>
    </div>

    <!-- title con animación de typing effect -->
    <h1
        :class="[
        'mt-5 text-center md:text-left text-[clamp(32px,12vw,68px)] leading-[clamp(32px,12vw,68px)] tracking-[-1px] sm:text-[clamp(40px,10vw,56px)] sm:leading-[clamp(40px,10vw,56px)] md:text-[clamp(56px,8vw,96px)] md:leading-[clamp(56px,8vw,96px)] md:tracking-[-2.88px] lg:text-[clamp(72px,7vw,96px)] lg:leading-[clamp(72px,7vw,96px)] xl:text-[96px] xl:leading-[96px] text-white font-medium transition-all duration-1000 ease-out',
        showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <span
          :class="[
          'inline-block transition-all duration-1200 ease-out',
          showTitle ? 'animate-gradient-text' : ''
        ]"
      >
        Del aula a la innovación con la IA
      </span>
    </h1>

    <!-- subtitle con animación -->
    <p
        :class="[
        'font-normal text-center md:text-left max-w-[503px] text-[clamp(14px,4vw,18px)] sm:text-[clamp(15px,3.8vw,18px)] md:text-[clamp(16px,2.2vw,18px)] lg:text-[18px] text-[#B5B0B7] mt-5 transition-all duration-800 ease-out',
        showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      ]"
    >
      Accede a los laboratorios de IA y desarrolla tus proyectos con impacto.
    </p>

    <!-- botones con animación escalonada -->
    <div
        :class="[
        'mt-10 flex gap-4 flex-col items-center md:flex-row transition-all duration-800 ease-out',
        showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      ]"
    >
      <div
          :class="[
          'transition-all duration-600 ease-out hover:scale-105',
          showButtons ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        ]"
      >
        <ButtonBase text="Inscribir grupo" variant="solid" />
      </div>
      <div
          :class="[
          'transition-all duration-600 ease-out delay-150 hover:scale-105',
          showButtons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        ]"
      >
        <ButtonBase text="Ver requisitos" variant="ghost" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animación de brillo para el badge */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 165, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 165, 0, 0.6);
  }
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
  animation-delay: 1s;
}

/* Efecto de gradiente en el texto principal */
@keyframes gradientText {
  0% {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  50% {
    background: linear-gradient(90deg, #ffffff 0%, #ffa500 50%, #ffffff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  100% {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.animate-gradient-text {
  animation: gradientText 4s ease-in-out infinite;
  animation-delay: 1.5s;
  background-size: 200% 100%;
}

/* Efecto de escritura tipo typewriter para el título */
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #ffa500;
  }
}

/* Animación de hover mejorada para botones */
.hover\:scale-105:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-out;
}

/* Animación sutil de flotación para todo el contenido */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

section {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

/* Efecto de partículas en el texto (opcional) */
@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mejora en la transición del subtitle */
p {
  animation-delay: 0.2s;
}
</style>