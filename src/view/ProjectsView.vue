<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showContent = ref(false);

// Función para navegar al detalle del proyecto
const viewProjectDetail = (projectId) => {
  router.push(`/projects/${projectId}`);
};

const projects = ref([
  {
    id: 1,
    title: 'Plataforma Inteligente de Asesorías Académicas basada en IA',
    description: 'Plataforma de asesorías académicas con identificación biométrica y un sistema de recomendación inteligente.',
    detailedDescription: 'La Plataforma Inteligente de Asesorías Académicas es un sistema diseñado para facilitar y optimizar el acceso a asesorías privadas entre estudiantes y docentes, integrando módulos avanzados de inteligencia artificial para la identificación, gestión y recomendación de asesorías.\n\nEl proyecto cuenta con un módulo de registro e identificación biométrica completamente funcional, basado en reconocimiento facial en tiempo real mediante InsightFace, complementado con la extracción automática de datos del carnet universitario usando PaddlePaddle. Esta integración garantiza una validación rápida, confiable y segura, construyendo una base de datos sólida de usuarios autenticados.\n\nLa siguiente etapa del proyecto está centrada en el desarrollo de un sistema de recomendación inteligente que sugerirá asesores y solicitudes académicas de manera personalizada, considerando el perfil del usuario, su historial académico, materias dominadas, necesidades de aprendizaje y disponibilidad. Este módulo empleará algoritmos de machine learning y técnicas de recuperación de vectores (FAISS) para ofrecer coincidencias precisas y de baja latencia.',
    tags: ['IA', 'Reconocimiento Facial', 'Recomendadores', 'FAISS'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=IA+System',
    category: 'Machine Learning',
    status: 'En Desarrollo',
    year: '2024'
  },
  {
    id: 2,
    title: "Traductor de Señas Bidireccional con IA",
    description:
      "Sistema inteligente que traduce señas a texto/voz y texto/voz a señas en tiempo real.",
    detailedDescription:
      "El Traductor de Señas Bidireccional con IA es un sistema diseñado para facilitar la comunicación entre personas sordas o con discapacidad auditiva y personas oyentes. Integra módulos avanzados de visión por computadora y aprendizaje profundo para reconocer gestos en tiempo real y convertirlos en texto o voz, además de transformar texto o voz en secuencias visuales de lenguaje de señas mediante animaciones o avatares.\n\n" +
      "El sistema utiliza detección de manos con MediaPipe, reconocimiento de gestos estáticos y dinámicos mediante CNN y LSTM, y síntesis de voz con tecnologías TTS. Su arquitectura está optimizada para ejecutarse en dispositivos estándar con una latencia inferior a 100 ms, permitiendo conversaciones fluidas e intuitivas.\n\n" +
      "El proyecto representa una solución accesible y de bajo costo que aporta inclusión social, ofreciendo traducción bidireccional en tiempo real, soporte para distintos estilos de señas y procesamiento eficiente incluso en condiciones de iluminación variables.",
    tags: ["Visión por Computadora", "Deep Learning", "MediaPipe", "TensorFlow"],
    image: "https://placehold.co/600x400/1a1a1a/orange?text=Sign+AI+System",
    category: "IA & Accessibility",
    status: "En Desarrollo",
    year: "2024"
  }

]);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 100);
});
</script>

<template>
  <div class="relative">
    <!-- Blobs decorativos -->
    <div :class="[
      'hidden md:block bg-primary w-64 h-64 rounded-full blur-[140px] absolute left-[10%] top-20 transition-all duration-1000 ease-out',
      showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
    ]"></div>
    <div :class="[
      'hidden md:block bg-orange-600 w-48 h-48 rounded-full blur-[140px] absolute right-[15%] top-60 transition-all duration-1000 ease-out delay-300',
      showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
    ]"></div>

    <div class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4 pb-20 relative z-10">
      <!-- Header Section -->
      <div :class="[
        'mb-16 transition-all duration-800 ease-out',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      ]">
        <div class="flex items-center gap-3 mb-4">
          <div class="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          <span class="text-orange-400 font-semibold text-sm uppercase tracking-wider">Portafolio</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Nuestros
          <span class="relative inline-block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Proyectos
            </span>
            <div
              class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400/0 via-orange-500/50 to-orange-600/0 rounded-full">
            </div>
          </span>
        </h1>

        <p class="text-gray-400 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Descubre las innovaciones que estamos desarrollando en el laboratorio de IA.
          Cada proyecto representa nuestro compromiso con la excelencia tecnológica.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap gap-6 mt-8">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span class="text-gray-300 text-sm">
              <span class="font-bold text-white">{{ projects.length }}</span> Proyectos Activos
            </span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-gray-300 text-sm">
              <span class="font-bold text-white">{{projects.filter(p => p.status === 'Completado').length}}</span>
              Completados
            </span>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(project, index) in projects" :key="project.id" @click="viewProjectDetail(project.id)" :class="[
          'group relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 cursor-pointer',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]" :style="{ transitionDelay: `${index * 100 + 200}ms` }">
          <!-- Glow effect on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-600/10 transition-all duration-500 rounded-3xl">
          </div>

          <!-- Top gradient line -->
          <div
            class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>

          <!-- Image Container -->
          <div class="aspect-video w-full overflow-hidden relative">
            <!-- Gradient overlays -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <!-- Image -->
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />

            <!-- Category badge -->
            <div class="absolute top-4 left-4 z-20">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-orange-500/30 text-orange-400 text-xs font-semibold">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                {{ project.category }}
              </span>
            </div>

            <!-- Status badge -->
            <div class="absolute top-4 right-4 z-20">
              <span :class="[
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold',
                project.status === 'Completado'
                  ? 'bg-green-500/20 border-green-500/30 text-green-400'
                  : project.status === 'Beta' || project.status === 'Prototipo'
                    ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                    : 'bg-orange-500/20 border-orange-500/30 text-orange-400'
              ]">
                <div :class="[
                  'w-1.5 h-1.5 rounded-full',
                  project.status === 'Completado' ? 'bg-green-400' : 'bg-orange-400 animate-pulse'
                ]"></div>
                {{ project.status }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 relative z-20">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag"
                class="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300">
                {{ tag }}
              </span>
            </div>

            <!-- Title -->
            <h3
              class="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 leading-tight">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-white/5">
              <div class="flex items-center gap-2 text-gray-500 text-xs">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ project.year }}
              </div>

              <button @click="viewProjectDetail(project.id)"
                class="group/btn flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition-all duration-300">
                <span class="group-hover/btn:translate-x-0.5 transition-transform duration-300">Ver detalles</span>
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Shine effect -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              class="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine">
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div :class="[
        'mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-transparent border border-orange-500/20 backdrop-blur-sm transition-all duration-800 ease-out',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]" style="transition-delay: 800ms">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes una idea innovadora?
          </h2>
          <p class="text-gray-400 text-lg mb-6">
            Únete a nuestro laboratorio y desarrolla el próximo gran proyecto de IA
          </p>
          <a href="mailto:jmondragons@ucss.edu.pe"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            <span>Contáctanos</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animación de shine para efecto de brillo */
@keyframes shine {
  0% {
    left: -100%;
  }

  100% {
    left: 200%;
  }
}

.group:hover .group-hover\:animate-shine {
  animation: shine 1.5s ease-in-out;
}

/* Limitador de líneas para descripciones */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Efecto de escala suave en hover */
.group:hover {
  transform: translateY(-4px);
}

/* Scroll suave */
* {
  scroll-behavior: smooth;
}
</style>
