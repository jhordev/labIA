<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const showContent = ref(false);

// Base de datos de proyectos (debería coincidir con ProjectsView)
const projectsDatabase = [
  {
    id: 1,
    title: 'Sistema de Gestión IA',
    description: 'Plataforma integral para la gestión de recursos optimizada con algoritmos de aprendizaje automático.',
    detailedDescription: 'Sistema avanzado que integra múltiples módulos de IA para optimizar la gestión de recursos empresariales en tiempo real. Utiliza algoritmos de machine learning para predecir patrones de uso, optimizar asignación de recursos y automatizar procesos de toma de decisiones.',
    tags: ['Vue.js', 'Python', 'TensorFlow'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=IA+System',
    category: 'Machine Learning',
    status: 'En Desarrollo',
    year: '2024',
    team: ['Data Scientists', 'Full Stack Developers', 'ML Engineers'],
    duration: '6 meses',
    features: [
      'Análisis predictivo de recursos en tiempo real',
      'Dashboard interactivo con métricas clave',
      'Automatización de procesos mediante IA',
      'Integración con sistemas existentes',
      'Reportes personalizados y alertas inteligentes'
    ],
    technologies: {
      frontend: ['Vue.js 3', 'Tailwind CSS', 'Chart.js'],
      backend: ['Python', 'FastAPI', 'PostgreSQL'],
      ai: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    challenges: 'Integración de modelos de ML en producción con alta disponibilidad y baja latencia.',
    results: 'Reducción del 40% en costos operativos y mejora del 60% en la eficiencia de asignación de recursos.'
  },
  {
    id: 2,
    title: 'Chatbot Educativo',
    description: 'Asistente virtual inteligente diseñado para apoyar a estudiantes en sus procesos de aprendizaje.',
    detailedDescription: 'Bot conversacional con procesamiento de lenguaje natural que proporciona respuestas contextuales y personalizadas. Implementa técnicas avanzadas de NLP y aprovecha modelos de lenguaje grandes para comprender y responder preguntas académicas complejas.',
    tags: ['React', 'Node.js', 'OpenAI API'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=Chatbot',
    category: 'NLP',
    status: 'Completado',
    year: '2024',
    team: ['NLP Engineers', 'UX Designers', 'Backend Developers'],
    duration: '4 meses',
    features: [
      'Conversación natural en español',
      'Respuestas contextuales personalizadas',
      'Integración con material educativo',
      'Sistema de seguimiento de progreso',
      'Disponible 24/7 para consultas'
    ],
    technologies: {
      frontend: ['React 18', 'Material-UI', 'Socket.io'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      ai: ['OpenAI GPT-4', 'LangChain', 'Embeddings']
    },
    challenges: 'Garantizar respuestas académicamente precisas y mantener el contexto en conversaciones largas.',
    results: '95% de satisfacción estudiantil y reducción del 50% en tiempo de resolución de dudas.'
  },
  {
    id: 3,
    title: 'Análisis Predictivo',
    description: 'Herramienta de visualización de datos para predecir tendencias de mercado con alta precisión.',
    detailedDescription: 'Dashboard interactivo con modelos predictivos basados en datos históricos y análisis de series temporales. Utiliza algoritmos avanzados de forecasting y visualización de datos en tiempo real.',
    tags: ['D3.js', 'FastAPI', 'Pandas'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=Analytics',
    category: 'Data Science',
    status: 'En Desarrollo',
    year: '2024',
    team: ['Data Scientists', 'Frontend Engineers', 'DevOps'],
    duration: '5 meses',
    features: [
      'Visualización interactiva de tendencias',
      'Modelos de predicción ARIMA y LSTM',
      'Análisis de series temporales',
      'Exportación de reportes automatizada',
      'API RESTful para integración'
    ],
    technologies: {
      frontend: ['D3.js', 'React', 'TypeScript'],
      backend: ['FastAPI', 'Python', 'Redis'],
      ai: ['Pandas', 'Prophet', 'Statsmodels', 'TensorFlow']
    },
    challenges: 'Procesamiento eficiente de grandes volúmenes de datos históricos para predicciones en tiempo real.',
    results: '85% de precisión en predicciones a corto plazo y mejora del 70% en toma de decisiones estratégicas.'
  },
  {
    id: 4,
    title: 'Reconocimiento de Imágenes',
    description: 'Sistema de clasificación y detección de objetos utilizando redes neuronales convolucionales.',
    detailedDescription: 'Modelo de visión por computadora entrenado con datasets personalizados para casos de uso específicos. Implementa arquitecturas state-of-the-art para detección y clasificación de objetos en tiempo real.',
    tags: ['PyTorch', 'OpenCV', 'YOLO'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=Vision+AI',
    category: 'Computer Vision',
    status: 'Prototipo',
    year: '2025',
    team: ['Computer Vision Engineers', 'ML Researchers', 'Software Engineers'],
    duration: '8 meses',
    features: [
      'Detección de objetos en tiempo real',
      'Clasificación multi-clase con alta precisión',
      'Segmentación semántica de imágenes',
      'API de inferencia optimizada',
      'Pipeline de entrenamiento personalizable'
    ],
    technologies: {
      frontend: ['React', 'WebRTC', 'Canvas API'],
      backend: ['Python', 'FastAPI', 'Docker'],
      ai: ['PyTorch', 'YOLO v8', 'OpenCV', 'Albumentations']
    },
    challenges: 'Optimización de modelos para inferencia rápida en dispositivos con recursos limitados.',
    results: 'Prototipo funcional con 92% de precisión y procesamiento de 30 FPS.'
  },
  {
    id: 5,
    title: 'Generador de Contenido IA',
    description: 'Herramienta que utiliza modelos de lenguaje para generar contenido creativo y técnico.',
    detailedDescription: 'Sistema integrado con LLMs para la generación automática de textos, código y documentación. Permite la creación de contenido de alta calidad de manera eficiente.',
    tags: ['GPT-4', 'LangChain', 'TypeScript'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=Content+AI',
    category: 'Generative AI',
    status: 'Beta',
    year: '2025',
    team: ['AI Engineers', 'Content Strategists', 'Full Stack Developers'],
    duration: '3 meses',
    features: [
      'Generación de artículos y blogs',
      'Creación automática de documentación técnica',
      'Generación de código con explicaciones',
      'Templates personalizables',
      'Control fino de tono y estilo'
    ],
    technologies: {
      frontend: ['React', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'TypeScript', 'PostgreSQL'],
      ai: ['GPT-4', 'LangChain', 'Prompt Engineering']
    },
    challenges: 'Garantizar calidad y coherencia en contenido generado automáticamente.',
    results: 'Beta pública con 500+ usuarios activos y 10,000+ contenidos generados.'
  },
  {
    id: 6,
    title: 'Sistema de Recomendaciones',
    description: 'Motor de recomendaciones personalizado basado en aprendizaje profundo y análisis de comportamiento.',
    detailedDescription: 'Algoritmo de filtrado colaborativo híbrido que aprende de las preferencias del usuario en tiempo real. Combina técnicas de content-based y collaborative filtering.',
    tags: ['Scikit-learn', 'Redis', 'FastAPI'],
    image: 'https://placehold.co/600x400/1a1a1a/orange?text=Recommender',
    category: 'Recommendation',
    status: 'En Desarrollo',
    year: '2024',
    team: ['ML Engineers', 'Backend Developers', 'Data Analysts'],
    duration: '4 meses',
    features: [
      'Recomendaciones personalizadas en tiempo real',
      'Filtrado colaborativo híbrido',
      'A/B testing integrado',
      'Análisis de comportamiento de usuario',
      'Escalable a millones de usuarios'
    ],
    technologies: {
      frontend: ['Vue.js', 'Vuex', 'TypeScript'],
      backend: ['FastAPI', 'Redis', 'PostgreSQL'],
      ai: ['Scikit-learn', 'Surprise', 'TensorFlow Recommenders']
    },
    challenges: 'Balancear personalización con diversidad en las recomendaciones (evitar filter bubbles).',
    results: 'Incremento del 45% en engagement y 30% en conversión.'
  }
];

// Encontrar el proyecto actual basado en el ID de la ruta
const project = computed(() => {
  const id = parseInt(route.params.id);
  return projectsDatabase.find(p => p.id === id);
});

// Redirigir si el proyecto no existe
onMounted(() => {
  if (!project.value) {
    router.push('/projects');
  }
  setTimeout(() => {
    showContent.value = true;
  }, 100);
});

const goBack = () => {
  router.push('/projects');
};
</script>

<template>
  <div v-if="project" class="relative">
    <!-- Blobs decorativos -->
    <div
      :class="[
        'hidden md:block bg-primary w-96 h-96 rounded-full blur-[160px] absolute left-[5%] top-0 transition-all duration-1000 ease-out',
        showContent ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>
    <div
      :class="[
        'hidden md:block bg-orange-600 w-64 h-64 rounded-full blur-[140px] absolute right-[10%] top-[40%] transition-all duration-1000 ease-out delay-300',
        showContent ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>

    <div class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4 pb-20 relative z-10">
      <!-- Botón de regreso -->
      <button
        @click="goBack"
        :class="[
          'group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300 mb-8',
          showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        ]"
      >
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span class="font-medium">Volver a Proyectos</span>
      </button>

      <!-- Hero Section -->
      <div
        :class="[
          'relative rounded-3xl overflow-hidden mb-12 transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <!-- Imagen de fondo -->
        <div class="aspect-[21/9] w-full relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover"
          />

          <!-- Contenido sobre la imagen -->
          <div class="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
            <!-- Badges superiores -->
            <div class="flex flex-wrap gap-3 mb-6">
              <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-orange-500/30 text-orange-400 text-sm font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
                {{ project.category }}
              </span>
              <span
                :class="[
                  'inline-flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-md border text-sm font-semibold',
                  project.status === 'Completado'
                    ? 'bg-green-500/20 border-green-500/30 text-green-400'
                    : project.status === 'Beta' || project.status === 'Prototipo'
                    ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                    : 'bg-orange-500/20 border-orange-500/30 text-orange-400'
                ]"
              >
                <div
                  :class="[
                    'w-2 h-2 rounded-full',
                    project.status === 'Completado' ? 'bg-green-400' : 'bg-orange-400 animate-pulse'
                  ]"
                ></div>
                {{ project.status }}
              </span>
            </div>

            <!-- Título -->
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ project.year }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ project.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid de contenido -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Columna principal -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Descripción detallada -->
          <div
            :class="[
              'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            style="transition-delay: 100ms"
          >
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Descripción del Proyecto
            </h2>
            <p class="text-gray-300 leading-relaxed text-lg">
              {{ project.detailedDescription }}
            </p>
          </div>

          <!-- Características principales -->
          <div
            :class="[
              'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            style="transition-delay: 200ms"
          >
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Características Principales
            </h2>
            <ul class="space-y-3">
              <li
                v-for="(feature, index) in project.features"
                :key="index"
                class="flex items-start gap-3 text-gray-300"
              >
                <svg class="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Stack tecnológico -->
          <div
            :class="[
              'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-800 ease-out',
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            style="transition-delay: 300ms"
          >
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              Stack Tecnológico
            </h2>

            <div class="space-y-6">
              <!-- Frontend -->
              <div>
                <h3 class="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">Frontend</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies.frontend"
                    :key="tech"
                    class="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Backend -->
              <div>
                <h3 class="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">Backend</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies.backend"
                    :key="tech"
                    class="px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- AI/ML -->
              <div>
                <h3 class="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">AI/ML</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies.ai"
                    :key="tech"
                    class="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Desafíos y Resultados -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              :class="[
                'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-800 ease-out',
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              ]"
              style="transition-delay: 400ms"
            >
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <h3 class="text-lg font-bold text-white">Desafíos</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                {{ project.challenges }}
              </p>
            </div>

            <div
              :class="[
                'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-800 ease-out',
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              ]"
              style="transition-delay: 450ms"
            >
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 class="text-lg font-bold text-white">Resultados</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                {{ project.results }}
              </p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Info del proyecto -->
          <div
            :class="[
              'bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-800 ease-out sticky top-24',
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            style="transition-delay: 100ms"
          >
            <h3 class="text-xl font-bold text-white mb-6">Información del Proyecto</h3>

            <div class="space-y-4">
              <!-- Categoría -->
              <div>
                <p class="text-gray-500 text-sm mb-1">Categoría</p>
                <p class="text-white font-medium">{{ project.category }}</p>
              </div>

              <!-- Estado -->
              <div>
                <p class="text-gray-500 text-sm mb-1">Estado</p>
                <span
                  :class="[
                    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold',
                    project.status === 'Completado'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'Beta' || project.status === 'Prototipo'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-orange-500/20 text-orange-400'
                  ]"
                >
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
                  <span
                    v-for="member in project.team"
                    :key="member"
                    class="px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg text-xs border border-white/10"
                  >
                    {{ member }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Tecnologías principales -->
            <div class="mt-6 pt-6 border-t border-white/10">
              <p class="text-gray-500 text-sm mb-3">Tecnologías Principales</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-lg text-sm font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-6 pt-6 border-t border-white/10">
              <button class="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
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
