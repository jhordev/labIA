<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const showContent = ref(false);
const selectedCategory = ref('Todos');

// Activar animaciones cuando se muestra la vista
const activateAnimations = () => {
  showContent.value = false;
  setTimeout(() => {
    showContent.value = true;
  }, 50);
};

// Función para navegar al detalle del blog
const viewBlogDetail = (blogId) => {
  router.push(`/blog/${blogId}`);
};

const categories = ref([
  { name: 'Todos', count: 9 },
  { name: 'Machine Learning', count: 3 },
  { name: 'IA Generativa', count: 2 },
  { name: 'Computer Vision', count: 2 },
  { name: 'NLP', count: 1 },
  { name: 'Ética', count: 1 }
]);

const posts = ref([
  {
    id: 1,
    title: 'El Futuro de la IA Generativa',
    excerpt: 'Exploramos cómo los modelos de lenguaje grandes están transformando la creación de contenido y la programación.',
    content: 'Los avances en IA generativa están revolucionando múltiples industrias, desde la creación de contenido hasta el desarrollo de software.',
    date: '10 Dic, 2024',
    author: {
      name: 'Dra. Elena Torres',
      role: 'Research Lead',
      avatar: 'https://ui-avatars.com/api/?name=Elena+Torres&background=FF7A01&color=fff'
    },
    category: 'IA Generativa',
    tags: ['GPT-4', 'LLMs', 'Creatividad'],
    readTime: '5 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=Generative+AI',
    featured: true,
    views: 1250
  },
  {
    id: 2,
    title: 'Ética en la Inteligencia Artificial',
    excerpt: 'Un análisis profundo sobre los desafíos éticos que enfrentamos al implementar soluciones de IA en la sociedad.',
    content: 'La implementación responsable de IA requiere considerar aspectos éticos fundamentales como privacidad, sesgo y transparencia.',
    date: '05 Dic, 2024',
    author: {
      name: 'MSc. Carlos Ruiz',
      role: 'Ethics Advisor',
      avatar: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=FF7A01&color=fff'
    },
    category: 'Ética',
    tags: ['Ética', 'Privacidad', 'Regulación'],
    readTime: '8 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=AI+Ethics',
    featured: false,
    views: 980
  },
  {
    id: 3,
    title: 'Visión por Computadora en la Industria',
    excerpt: 'Casos de uso reales donde la visión por computadora está optimizando procesos de manufactura y seguridad.',
    content: 'La visión por computadora permite automatizar inspecciones de calidad, mejorar la seguridad industrial y optimizar procesos.',
    date: '28 Nov, 2024',
    author: {
      name: 'Ing. Ana López',
      role: 'CV Engineer',
      avatar: 'https://ui-avatars.com/api/?name=Ana+Lopez&background=FF7A01&color=fff'
    },
    category: 'Computer Vision',
    tags: ['YOLO', 'OpenCV', 'Industria 4.0'],
    readTime: '6 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=Computer+Vision',
    featured: false,
    views: 756
  },
  {
    id: 4,
    title: 'Transfer Learning: Optimizando Modelos',
    excerpt: 'Aprende cómo el transfer learning puede reducir drásticamente el tiempo y recursos necesarios para entrenar modelos.',
    content: 'El transfer learning permite reutilizar conocimiento de modelos pre-entrenados, acelerando el desarrollo de soluciones de IA.',
    date: '20 Nov, 2024',
    author: {
      name: 'Dr. Miguel Ángel Vargas',
      role: 'ML Researcher',
      avatar: 'https://ui-avatars.com/api/?name=Miguel+Vargas&background=FF7A01&color=fff'
    },
    category: 'Machine Learning',
    tags: ['Transfer Learning', 'Deep Learning', 'Optimización'],
    readTime: '7 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=Transfer+Learning',
    featured: false,
    views: 892
  },
  {
    id: 5,
    title: 'Procesamiento de Lenguaje Natural en 2024',
    excerpt: 'Las últimas tendencias en NLP: desde transformers hasta modelos multimodales.',
    content: 'El NLP ha evolucionado significativamente con la introducción de arquitecturas transformer y modelos multimodales.',
    date: '15 Nov, 2024',
    author: {
      name: 'Lic. Patricia Mendoza',
      role: 'NLP Specialist',
      avatar: 'https://ui-avatars.com/api/?name=Patricia+Mendoza&background=FF7A01&color=fff'
    },
    category: 'NLP',
    tags: ['Transformers', 'BERT', 'Multimodal'],
    readTime: '10 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=NLP+2024',
    featured: false,
    views: 1105
  },
  {
    id: 6,
    title: 'Redes Neuronales Convolucionales Explicadas',
    excerpt: 'Una guía completa sobre CNNs: arquitectura, funcionamiento y aplicaciones prácticas.',
    content: 'Las CNNs son la base de la visión por computadora moderna, permitiendo el reconocimiento y clasificación de imágenes.',
    date: '08 Nov, 2024',
    author: {
      name: 'Ing. Roberto Silva',
      role: 'Deep Learning Engineer',
      avatar: 'https://ui-avatars.com/api/?name=Roberto+Silva&background=FF7A01&color=fff'
    },
    category: 'Computer Vision',
    tags: ['CNN', 'Deep Learning', 'PyTorch'],
    readTime: '12 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=CNN+Guide',
    featured: false,
    views: 1340
  },
  {
    id: 7,
    title: 'AutoML: Democratizando el Machine Learning',
    excerpt: 'Cómo las herramientas de AutoML están haciendo la IA más accesible para todos.',
    content: 'AutoML automatiza el proceso de selección de modelos y optimización de hiperparámetros, democratizando el acceso a la IA.',
    date: '01 Nov, 2024',
    author: {
      name: 'Dr. Fernando Campos',
      role: 'AI Architect',
      avatar: 'https://ui-avatars.com/api/?name=Fernando+Campos&background=FF7A01&color=fff'
    },
    category: 'Machine Learning',
    tags: ['AutoML', 'Accesibilidad', 'Automatización'],
    readTime: '6 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=AutoML',
    featured: false,
    views: 645
  },
  {
    id: 8,
    title: 'Prompt Engineering: Arte y Ciencia',
    excerpt: 'Técnicas avanzadas para obtener los mejores resultados de modelos de lenguaje grandes.',
    content: 'El prompt engineering es crucial para aprovechar al máximo las capacidades de los LLMs modernos.',
    date: '25 Oct, 2024',
    author: {
      name: 'Dra. Elena Torres',
      role: 'Research Lead',
      avatar: 'https://ui-avatars.com/api/?name=Elena+Torres&background=FF7A01&color=fff'
    },
    category: 'IA Generativa',
    tags: ['Prompts', 'LLMs', 'Técnicas'],
    readTime: '8 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=Prompt+Engineering',
    featured: false,
    views: 1580
  },
  {
    id: 9,
    title: 'Reinforcement Learning en Robótica',
    excerpt: 'Aplicaciones prácticas del aprendizaje por refuerzo en sistemas robóticos autónomos.',
    content: 'El reinforcement learning permite que los robots aprendan tareas complejas mediante ensayo y error en entornos simulados.',
    date: '18 Oct, 2024',
    author: {
      name: 'Dr. Miguel Ángel Vargas',
      role: 'ML Researcher',
      avatar: 'https://ui-avatars.com/api/?name=Miguel+Vargas&background=FF7A01&color=fff'
    },
    category: 'Machine Learning',
    tags: ['RL', 'Robótica', 'Autonomía'],
    readTime: '9 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=RL+Robotics',
    featured: false,
    views: 723
  }
]);

// Filtrar posts por categoría
const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return posts.value.filter(p => !p.featured);
  }
  return posts.value.filter(p => !p.featured && p.category === selectedCategory.value);
});

// Post destacado
const featuredPost = computed(() => posts.value.find(p => p.featured));

onMounted(() => {
  activateAnimations();
});

// Observar cambios en la ruta para reactivar animaciones
watch(() => route.path, (newPath) => {
  if (newPath === '/blog') {
    activateAnimations();
  }
});
</script>

<template>
  <div class="relative">
    <!-- Blobs decorativos -->
    <div
      :class="[
        'hidden md:block bg-primary w-72 h-72 rounded-full blur-[150px] absolute left-[5%] top-10 transition-all duration-1000 ease-out',
        showContent ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>
    <div
      :class="[
        'hidden md:block bg-orange-600 w-56 h-56 rounded-full blur-[130px] absolute right-[10%] top-[50%] transition-all duration-1000 ease-out delay-300',
        showContent ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>

    <div class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4 pb-20 relative z-10">
      <!-- Header Section -->
      <div
        :class="[
          'mb-12 transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        ]"
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          <span class="text-orange-400 font-semibold text-sm uppercase tracking-wider">Publicaciones</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Blog
          <span class="relative inline-block">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Tecnológico
            </span>
            <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400/0 via-orange-500/50 to-orange-600/0 rounded-full"></div>
          </span>
        </h1>

        <p class="text-gray-400 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Artículos, investigaciones y noticias sobre el fascinante mundo de la Inteligencia Artificial.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap gap-6 mt-8">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span class="text-gray-300 text-sm">
              <span class="font-bold text-white">{{ posts.length }}</span> Artículos Publicados
            </span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-gray-300 text-sm">
              <span class="font-bold text-white">{{ categories.length - 1 }}</span> Categorías
            </span>
          </div>
        </div>
      </div>

      <!-- Post Destacado -->
      <div
        v-if="featuredPost"
        @click="viewBlogDetail(featuredPost.id)"
        :class="[
          'relative rounded-3xl overflow-hidden mb-12 group cursor-pointer transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
        style="transition-delay: 100ms"
      >
        <!-- Imagen de fondo -->
        <div class="aspect-[21/9] md:aspect-[3/1] w-full relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10"></div>
          <img
            :src="featuredPost.image"
            :alt="featuredPost.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <!-- Contenido sobre la imagen -->
          <div class="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
            <!-- Category badge -->
            <div class="mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-400 text-sm font-semibold">
                {{ featuredPost.category }}
              </span>
            </div>

            <!-- Título -->
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight group-hover:text-orange-400 transition-colors">
              {{ featuredPost.title }}
            </h2>

            <!-- Excerpt -->
            <p class="text-xl text-gray-300 max-w-3xl mb-6">
              {{ featuredPost.excerpt }}
            </p>

            <!-- Meta info -->
            <div class="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <!-- Author -->
              <div class="flex items-center gap-3">
                <img :src="featuredPost.author.avatar" :alt="featuredPost.author.name" class="w-10 h-10 rounded-full border-2 border-orange-500" />
                <div>
                  <p class="text-white font-medium">{{ featuredPost.author.name }}</p>
                  <p class="text-xs text-gray-500">{{ featuredPost.author.role }}</p>
                </div>
              </div>
              <!-- Date -->
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ featuredPost.date }}</span>
              </div>
              <!-- Read time -->
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ featuredPost.readTime }} lectura</span>
              </div>
              <!-- Views -->
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <span>{{ featuredPost.views }} vistas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros de categorías -->
      <div
        :class="[
          'mb-10 transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
        style="transition-delay: 200ms"
      >
        <div class="flex flex-wrap gap-3">
          <button
            v-for="category in categories"
            :key="category.name"
            @click="selectedCategory = category.name"
            :class="[
              'px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300',
              selectedCategory === category.name
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:border-orange-500/50 hover:text-orange-400'
            ]"
          >
            {{ category.name }}
            <span class="ml-1.5 text-xs opacity-75">({{ category.count }})</span>
          </button>
        </div>
      </div>

      <!-- Grid de Posts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          @click="viewBlogDetail(post.id)"
          :class="[
            'group relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 cursor-pointer flex flex-col',
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 100 + 300}ms` }"
        >
          <!-- Glow effect on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-600/10 transition-all duration-500 rounded-3xl"></div>

          <!-- Top gradient line -->
          <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- Imagen -->
          <div class="aspect-video w-full overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <!-- Category badge -->
            <div class="absolute top-4 left-4 z-20">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-orange-500/30 text-orange-400 text-xs font-semibold">
                {{ post.category }}
              </span>
            </div>
          </div>

          <!-- Contenido -->
          <div class="p-6 flex-1 flex flex-col relative z-20">
            <!-- Meta info -->
            <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ post.date }}</span>
              </div>
              <span class="w-1 h-1 rounded-full bg-gray-600"></span>
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ post.readTime }}</span>
              </div>
            </div>

            <!-- Título -->
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 leading-tight">
              {{ post.title }}
            </h3>

            <!-- Excerpt -->
            <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
              {{ post.excerpt }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                class="text-xs px-2 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/10"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-white/5">
              <!-- Author -->
              <div class="flex items-center gap-2">
                <img :src="post.author.avatar" :alt="post.author.name" class="w-8 h-8 rounded-full border border-white/10" />
                <div class="text-xs">
                  <p class="text-white font-medium">{{ post.author.name }}</p>
                  <p class="text-gray-500">{{ post.author.role }}</p>
                </div>
              </div>

              <!-- Read button -->
              <button class="group/btn flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition-all duration-300">
                <span class="group-hover/btn:translate-x-0.5 transition-transform duration-300">Leer</span>
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Shine effect -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div class="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine"></div>
          </div>
        </article>
      </div>

      <!-- Newsletter CTA -->
      <div
        :class="[
          'mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-transparent border border-orange-500/20 backdrop-blur-sm transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
        style="transition-delay: 800ms"
      >
        <div class="max-w-2xl mx-auto text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6">
            <svg class="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Suscríbete a nuestro Newsletter
          </h2>
          <p class="text-gray-400 text-lg mb-6">
            Recibe las últimas noticias y artículos sobre IA directamente en tu correo
          </p>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
            <button class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              Suscribirme
            </button>
          </div>
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
