<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const showContent = ref(false);

// Base de datos de proyectos (debería coincidir con ProjectsView)
const projectsDatabase = [
  {
    id: 1,
    title: "Plataforma Inteligente de Asesorías Académicas basada en IA",
    description:
      "Plataforma de asesorías académicas con identificación biométrica y un sistema de recomendación inteligente.",
    detailedDescription:
      "La Plataforma Inteligente de Asesorías Académicas es un sistema diseñado para facilitar y optimizar el acceso a asesorías privadas entre estudiantes y docentes, integrando módulos avanzados de inteligencia artificial para la identificación, gestión y recomendación de asesorías.\n\n" +
      "El proyecto cuenta con un módulo de registro e identificación biométrica completamente funcional, basado en reconocimiento facial en tiempo real mediante InsightFace, complementado con la extracción automática de datos del carnet universitario usando PaddlePaddle. Esta integración garantiza una validación rápida, confiable y segura, construyendo una base de datos sólida de usuarios autenticados.\n\n" +
      "La siguiente etapa del proyecto está centrada en el desarrollo de un sistema de recomendación inteligente que sugerirá asesores y solicitudes académicas de manera personalizada, considerando el perfil del usuario, su historial académico, materias dominadas, necesidades de aprendizaje y disponibilidad. Este módulo empleará algoritmos de machine learning y técnicas de recuperación de vectores (FAISS) para ofrecer coincidencias precisas y de baja latencia.",
    tags: ["IA", "Reconocimiento Facial", "Recomendadores", "FAISS"],
    image: "https://placehold.co/600x400/1a1a1a/orange?text=IA+System",
    category: "Machine Learning",
    status: "En Desarrollo",
    year: "2024",
    team: [
      "Miller Zamora",
      "Melany Pinedo",
      "Jhosep Troncos",
      "Sam Vazquez",
      "Vanesa Rioz",
    ],
    duration: "6 meses",
    features: [
      "Registro con validación biométrica avanzada",
      "Reconocimiento facial en tiempo real con InsightFace",
      "Extracción automática de datos del carnet con PaddlePaddle",
      "Recomendación personalizada de asesorías",
      "Priorización inteligente según perfil académico",
      "Paneles personalizados para estudiantes y docentes",
    ],
    technologies: {
      frontend: ["React", "Next.js"],
      backend: ["Node.js"],
      database: ["MySQL"],
      ai: ["Python", "InsightFace", "PaddlePaddle", "FAISS"],
    },
    challenges:
      "Integrar un sistema de recomendación escalable y preciso, manteniendo baja latencia y garantizando la seguridad de datos biométricos sensibles.",
    results:
      "El módulo de identificación facial se implementó con éxito, logrando una validación confiable y segura. Se espera que el sistema de recomendación mejore significativamente la experiencia académica mediante asignaciones personalizadas y reducción del tiempo de búsqueda de asesorías.",
    links: [
      {
        title: "Documentación del Proyecto",
        url: "https://doc-ia-chi.vercel.app/docs/documentacion/Idea%20inicial",
        icon: "document"
      },
      {
        title: "InsightFace - Reconocimiento Facial",
        url: "https://github.com/deepinsight/insightface",
        icon: "github"
      },
      {
        title: "PaddlePaddle - Framework de Deep Learning",
        url: "https://github.com/paddlepaddle/paddle?tab=readme-ov-file",
        icon: "github"
      },
      {
        title: "FAISS - Búsqueda de Vectores",
        url: "https://github.com/facebookresearch/faiss",
        icon: "github"
      }
    ]
  },
  {
    id: 2,
    title: "Traductor de Señas Bidireccional con IA",
    description:
      "Sistema que traduce señas a texto/voz y texto/voz a señas en tiempo real mediante visión por computadora y deep learning.",
    detailedDescription:
      "El Traductor de Señas Bidireccional con IA es un sistema diseñado para mejorar la comunicación entre personas sordas o con discapacidad auditiva y personas oyentes, integrando visión por computadora, aprendizaje profundo y procesamiento de lenguaje natural.\n\n" +
      "El sistema reconoce señas en tiempo real mediante MediaPipe para el seguimiento de manos y modelos de redes neuronales (CNN y LSTM) para interpretar gestos estáticos y dinámicos, alcanzando precisiones superiores al 90% en condiciones controladas. Además, convierte texto o voz en secuencias visuales de lenguaje de señas utilizando modelos de síntesis optimizados.\n\n" +
      "Su arquitectura permite ejecución en dispositivos estándar con latencia menor a 100 milisegundos, adaptándose a diferentes estilos de señas, variaciones de iluminación y entornos no controlados, ofreciendo una solución accesible, bidireccional y de alto impacto social.",
    tags: ["Visión por Computadora", "Deep Learning", "MediaPipe", "TensorFlow"],
    image: "https://placehold.co/600x400/1a1a1a/orange?text=Sign+AI+System",
    category: "IA & Accessibility",
    status: "En Desarrollo",
    year: "2024",
    team: [
      "Karel Ramirez",
      "Gerson Paredes",
      "Georje Soto",
    ],

    duration: "8 meses",

    features: [
      "Reconocimiento de señas en tiempo real (Sign-to-Text/Speech)",
      "Seguimiento de manos con MediaPipe y OpenCV",
      "Interpretación de gestos estáticos y dinámicos mediante CNN y LSTM",
      "Conversión de texto/voz a lenguaje de señas mediante animaciones o avatares",
      "Procesamiento en tiempo real con latencia < 100 ms",
      "Adaptación a distintos estilos de señas y condiciones de iluminación",
      "Traducción completamente bidireccional"
    ],
    technologies: {
      Lenguaje_Principal: ["Python 3.8+"],
      Vision_por_Computadora: ["MediaPipe", "OpenCV"],
      Deep_Learning: ["TensorFlow 2.x", "Keras"],
      Modelos_de_IA: ["CNN (Convolutional Neural Networks)", "LSTM"],
      Procesamiento_de_Lenguaje: ["NLP", "Text-to-Speech (TTS)"],
      Datasets: ["LSP (Lengua de Señas Peruana)"]
    },

    challenges:
      "Optimización de modelos para inferencia en tiempo real, manejo de oclusión de manos, comprensión de expresiones faciales y generalización ante distintos estilos de señas y condiciones ambientales.",
    results:
      "Reconocimiento con precisión superior al 90%, latencia menor a 100 milisegundos y funcionamiento en dispositivos estándar, ofreciendo una solución accesible y de alto impacto para la comunicación inclusiva.",
    links: [
      {
        title: "Sign Language Detection - GitHub",
        url: "https://github.com/prithvimk/Sign-Language-Detection",
        icon: "github"
      },
      {
        title: "Sign Language Translator - GitHub",
        url: "https://github.com/sign-language-translator/sign-language-translator",
        icon: "github"
      },
      {
        title: "SignLanguageRecognition - Librería PyPI",
        url: "https://pypi.org/project/SignLanguageRecognition/",
        icon: "document"
      }
    ]
  }

];

// Encontrar el proyecto actual basado en el ID de la ruta
const project = computed(() => {
  const id = parseInt(route.params.id);
  return projectsDatabase.find((p) => p.id === id);
});

// Redirigir si el proyecto no existe
onMounted(() => {
  if (!project.value) {
    router.push("/projects");
  }
  setTimeout(() => {
    showContent.value = true;
  }, 100);
});

const goBack = () => {
  router.push("/projects");
};
</script>

<template>
  <div v-if="project" class="relative">
    <!-- Blobs decorativos -->
    <div :class="[
      'hidden md:block bg-primary w-96 h-96 rounded-full blur-[160px] absolute left-[5%] top-0 transition-all duration-1000 ease-out',
      showContent ? 'opacity-100' : 'opacity-0',
    ]"></div>
    <div :class="[
      'hidden md:block bg-orange-600 w-64 h-64 rounded-full blur-[140px] absolute right-[10%] top-[40%] transition-all duration-1000 ease-out delay-300',
      showContent ? 'opacity-100' : 'opacity-0',
    ]"></div>

    <div class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4 pb-20 relative z-10">
      <!-- Botón de regreso -->
      <button @click="goBack" :class="[
        'group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 mb-8',
        showContent
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-4',
      ]">
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="font-medium">Volver a Proyectos</span>
      </button>

      <!-- Hero Section -->
      <div :class="[
        'relative rounded-3xl overflow-hidden mb-12 transition-all duration-800 ease-out',
        showContent
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10',
      ]">
        <!-- Imagen de fondo absoluta -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
        <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover" />

        <!-- Contenido que define la altura -->
        <div class="relative z-20 p-8 md:p-12 pt-16 ">
          <!-- Badges superiores -->
          <div class="flex flex-wrap gap-3 mb-8">
            <span
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-orange-500/30 text-orange-400 text-sm font-semibold">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              {{ project.category }}
            </span>
            <span :class="[
              'inline-flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-md border text-sm font-semibold',
              project.status === 'Completado'
                ? 'bg-green-500/20 border-green-500/30 text-green-400'
                : project.status === 'Beta' ||
                  project.status === 'Prototipo'
                  ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                  : 'bg-orange-500/20 border-orange-500/30 text-orange-400',
            ]">
              <div :class="[
                'w-2 h-2 rounded-full',
                project.status === 'Completado'
                  ? 'bg-green-400'
                  : 'bg-orange-400 animate-pulse',
              ]"></div>
              {{ project.status }}
            </span>
          </div>

          <!-- Título -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {{ project.title }}
          </h1>

          <!-- Descripción corta -->
          <p class="text-xl text-gray-300 max-w-3xl mb-6">
            {{ project.description }}
          </p>

          <!-- Meta info -->
          <div class="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ project.year }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ project.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid de contenido -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Columna principal -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Descripción detallada -->
          <div :class="[
            'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]" style="transition-delay: 100ms">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Descripción del Proyecto
            </h2>
            <div class="space-y-4">
              <p v-for="(paragraph, index) in project.detailedDescription.split(
                '\n\n'
              )" :key="index" class="text-gray-300 leading-relaxed text-lg">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- Características principales -->
          <div :class="[
            'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]" style="transition-delay: 200ms">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Características Principales
            </h2>
            <ul class="space-y-3">
              <li v-for="(feature, index) in project.features" :key="index"
                class="flex items-start gap-3 text-gray-300">
                <svg class="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Stack tecnológico -->
          <div :class="[
            'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]" style="transition-delay: 300ms">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Stack Tecnológico
            </h2>

            <div class="space-y-6">
              <!-- Iterar dinámicamente sobre todas las tecnologías -->
              <div v-for="(techs, category, index) in project.technologies" :key="category">
                <h3 class="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
                  {{ category.replace(/_/g, ' ') }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in techs" :key="tech" :class="[
                    'px-3 py-1.5 rounded-lg text-sm font-medium',
                    index % 3 === 0 ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' :
                      index % 3 === 1 ? 'bg-green-500/10 border border-green-500/20 text-green-400' :
                        'bg-purple-500/10 border border-purple-500/20 text-purple-400'
                  ]">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Desafíos y Resultados -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div :class="[
              'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-800 ease-out',
              showContent
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10',
            ]" style="transition-delay: 400ms">
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 class="text-lg font-bold text-white">Desafíos</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                {{ project.challenges }}
              </p>
            </div>

            <div :class="[
              'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-800 ease-out',
              showContent
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10',
            ]" style="transition-delay: 450ms">
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-lg font-bold text-white">Resultados</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                {{ project.results }}
              </p>
            </div>
          </div>

          <!-- Links Adicionales -->
          <div v-if="project.links && project.links.length > 0" :class="[
            'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]" style="transition-delay: 500ms">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Enlaces y Recursos
            </h2>
            <div class="space-y-3">
              <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 rounded-xl transition-all duration-300">
                <!-- Icono -->
                <div
                  class="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 transition-all duration-300">
                  <svg v-if="link.icon === 'document'" class="w-6 h-6" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <svg v-else-if="link.icon === 'github'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <svg v-else-if="link.icon === 'demo'" class="w-6 h-6" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <!-- Texto -->
                <div class="flex-1 min-w-0">
                  <p class="text-white font-semibold group-hover:text-orange-400 transition-colors duration-300">{{
                    link.title }}</p>
                  <p class="text-gray-500 text-sm truncate">{{ link.url }}</p>
                </div>
                <!-- Flecha -->
                <svg
                  class="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Info del proyecto -->
          <div :class="[
            'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-800 ease-out sticky top-24',
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]" style="transition-delay: 100ms">
            <h3 class="text-xl font-bold text-white mb-6">
              Información del Proyecto
            </h3>

            <div class="space-y-4">
              <!-- Categoría -->
              <div>
                <p class="text-gray-500 text-sm mb-1">Categoría</p>
                <p class="text-white font-medium">{{ project.category }}</p>
              </div>

              <!-- Estado -->
              <div>
                <p class="text-gray-500 text-sm mb-1">Estado</p>
                <span :class="[
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold',
                  project.status === 'Completado'
                    ? 'bg-green-500/20 text-green-400'
                    : project.status === 'Beta' ||
                      project.status === 'Prototipo'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-orange-500/20 text-orange-400',
                ]">
                  {{ project.status }}
                </span>
              </div>

              <!-- Año -->
              <div>
                <p class="text-gray-500 text-sm mb-1">Año</p>
                <p class="text-white font-medium">{{ project.year }}</p>
              </div>

              <!-- Duración -->
              <div>
                <p class="text-gray-500 text-sm mb-1">Duración</p>
                <p class="text-white font-medium">{{ project.duration }}</p>
              </div>

              <!-- Equipo -->
              <div>
                <p class="text-gray-500 text-sm mb-2">Equipo</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="member in project.team" :key="member"
                    class="px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg text-xs border border-white/10">
                    {{ member }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Tecnologías principales -->
            <div class="mt-6 pt-6 border-t border-white/10">
              <p class="text-gray-500 text-sm mb-3">Tecnologías Principales</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag"
                  class="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-lg text-sm font-medium">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-6 pt-6 border-t border-white/10">
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scroll suave */
* {
  scroll-behavior: smooth;
}
</style>
