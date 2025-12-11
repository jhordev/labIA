<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const showContent = ref(false);

// Base de datos completa de posts (misma que en BlogView)
const posts = ref([
  {
    id: 1,
    title: 'El Futuro de la IA Generativa',
    excerpt: 'Exploramos cómo los modelos de lenguaje grandes están transformando la creación de contenido y la programación.',
    content: `La inteligencia artificial generativa está revolucionando la forma en que creamos contenido, desarrollamos software y resolvemos problemas complejos. En este artículo, exploramos las tendencias más importantes y el impacto futuro de esta tecnología.`,
    fullContent: [
      {
        type: 'text',
        content: 'La inteligencia artificial generativa ha experimentado un crecimiento exponencial en los últimos años, transformando radicalmente múltiples industrias. Desde la creación de contenido hasta el desarrollo de software, los modelos de lenguaje grandes (LLMs) están redefiniendo lo que es posible en el campo de la IA.'
      },
      {
        type: 'heading',
        content: 'La Revolución de los Modelos de Lenguaje'
      },
      {
        type: 'text',
        content: 'Los modelos como GPT-4, Claude, y otros LLMs de última generación han demostrado capacidades sorprendentes en tareas que van desde la generación de código hasta la creación de contenido creativo. Estos modelos no solo comprenden el lenguaje natural con una precisión sin precedentes, sino que también pueden razonar, planificar y resolver problemas complejos.'
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=LLM+Architecture',
        alt: 'Arquitectura de Modelos de Lenguaje Grande',
        caption: 'Visualización de la arquitectura transformer utilizada en LLMs modernos'
      },
      {
        type: 'heading',
        content: 'Aplicaciones Prácticas en la Industria'
      },
      {
        type: 'text',
        content: 'Las aplicaciones de la IA generativa se extienden a numerosos sectores:'
      },
      {
        type: 'list',
        items: [
          'Desarrollo de software: Asistentes de código que mejoran la productividad',
          'Creación de contenido: Generación automática de artículos, guiones y material educativo',
          'Diseño y arte: Creación de imágenes, música y diseños originales',
          'Atención al cliente: Chatbots inteligentes que proporcionan soporte 24/7',
          'Investigación científica: Aceleración del descubrimiento de fármacos y análisis de datos'
        ]
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/aircAruvnKk',
        title: 'Introducción a las Redes Neuronales',
        caption: 'Video educativo sobre los fundamentos de las redes neuronales'
      },
      {
        type: 'heading',
        content: 'Desafíos y Consideraciones Éticas'
      },
      {
        type: 'text',
        content: 'A pesar de su potencial, la IA generativa también presenta desafíos significativos. La desinformación, el sesgo algorítmico, y las preocupaciones sobre derechos de autor son temas críticos que la industria debe abordar. Es fundamental desarrollar marcos éticos robustos y regulaciones apropiadas para garantizar el uso responsable de estas tecnologías.'
      },
      {
        type: 'quote',
        content: 'La IA generativa no reemplazará a los humanos, pero los humanos que usan IA generativa reemplazarán a los que no lo hacen.',
        author: 'Dr. Andrew Ng'
      },
      {
        type: 'heading',
        content: 'El Futuro: Modelos Multimodales'
      },
      {
        type: 'text',
        content: 'La próxima frontera de la IA generativa son los modelos multimodales, capaces de procesar y generar contenido en múltiples formatos: texto, imagen, audio y video simultáneamente. Esta convergencia abrirá nuevas posibilidades en educación, entretenimiento y comunicación.'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Ejemplo de uso de un LLM con LangChain
from langchain import OpenAI, LLMChain, PromptTemplate

# Inicializar el modelo
llm = OpenAI(temperature=0.7)

# Crear un template de prompt
template = """
Eres un asistente experto en IA generativa.
Pregunta: {question}
Respuesta detallada:
"""

prompt = PromptTemplate(template=template, input_variables=["question"])
chain = LLMChain(llm=llm, prompt=prompt)

# Ejecutar la cadena
response = chain.run(question="¿Cómo funcionan los transformers?")
print(response)`,
        caption: 'Ejemplo de implementación de un LLM con LangChain'
      },
      {
        type: 'text',
        content: 'A medida que continuamos explorando las capacidades de la IA generativa, es crucial mantener un equilibrio entre innovación y responsabilidad. El futuro promete avances extraordinarios, pero depende de nosotros asegurar que estos desarrollos beneficien a toda la humanidad.'
      }
    ],
    date: '10 Dic, 2024',
    author: {
      name: 'Dra. Elena Torres',
      role: 'Research Lead',
      avatar: 'https://ui-avatars.com/api/?name=Elena+Torres&background=FF7A01&color=fff',
      bio: 'Investigadora principal en IA generativa con más de 10 años de experiencia en aprendizaje automático y procesamiento de lenguaje natural.'
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
    fullContent: [
      {
        type: 'text',
        content: 'La inteligencia artificial está transformando nuestra sociedad a un ritmo sin precedentes, pero con este poder viene una gran responsabilidad. Los desafíos éticos en la IA no son meramente teóricos; tienen implicaciones reales y profundas en la vida de las personas.'
      },
      {
        type: 'heading',
        content: 'Privacidad y Protección de Datos'
      },
      {
        type: 'text',
        content: 'Los sistemas de IA modernos requieren grandes cantidades de datos para funcionar efectivamente. Esto plantea preguntas críticas sobre cómo se recopilan, almacenan y utilizan estos datos. El balance entre la innovación y la privacidad individual es uno de los desafíos más importantes de nuestra era.'
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=AI+Ethics',
        alt: 'Conceptos de Ética en IA',
        caption: 'Los pilares fundamentales de la ética en inteligencia artificial'
      },
      {
        type: 'heading',
        content: 'Sesgo Algorítmico y Justicia'
      },
      {
        type: 'text',
        content: 'Los algoritmos de IA pueden perpetuar y amplificar sesgos existentes en los datos de entrenamiento. Es crucial desarrollar metodologías para detectar, medir y mitigar estos sesgos para garantizar sistemas justos e imparciales.'
      },
      {
        type: 'quote',
        content: 'La ética en IA no es un problema técnico que pueda resolverse únicamente con código. Requiere un enfoque multidisciplinario que incluya perspectivas sociales, legales y filosóficas.',
        author: 'MSc. Carlos Ruiz'
      }
    ],
    date: '05 Dic, 2024',
    author: {
      name: 'MSc. Carlos Ruiz',
      role: 'Ethics Advisor',
      avatar: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=FF7A01&color=fff',
      bio: 'Asesor en ética de IA con especialización en filosofía de la tecnología y políticas públicas.'
    },
    category: 'Ética',
    tags: ['Ética', 'Privacidad', 'Regulación'],
    readTime: '8 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=AI+Ethics',
    featured: false,
    views: 980
  }
]);

// Obtener el post actual basado en el ID de la ruta
const currentPost = computed(() => {
  const id = parseInt(route.params.id);
  return posts.value.find(p => p.id === id);
});

// Posts relacionados (excluir el actual)
const relatedPosts = computed(() => {
  if (!currentPost.value) return [];
  return posts.value
    .filter(p => p.id !== currentPost.value.id && p.category === currentPost.value.category)
    .slice(0, 3);
});

const goBack = () => {
  router.push({ name: 'Blog' });
};

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 100);
});
</script>

<template>
  <div v-if="currentPost" class="relative">
    <!-- Blobs decorativos -->
    <div
      :class="[
        'hidden md:block bg-primary w-72 h-72 rounded-full blur-[150px] absolute left-[5%] top-10 transition-all duration-1000 ease-out',
        showContent ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>
    <div
      :class="[
        'hidden md:block bg-orange-600 w-56 h-56 rounded-full blur-[130px] absolute right-[10%] top-[60%] transition-all duration-1000 ease-out delay-300',
        showContent ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>

    <div class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4 pb-20 relative z-10">
      <!-- Back Button -->
      <button
        @click="goBack"
        :class="[
          'group mb-8 flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        ]"
      >
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="font-medium">Volver al Blog</span>
      </button>

      <!-- Hero Image -->
      <div
        :class="[
          'relative rounded-3xl overflow-hidden mb-8 transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
        style="transition-delay: 100ms"
      >
        <div class="aspect-[21/9] w-full relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <img
            :src="currentPost.image"
            :alt="currentPost.title"
            class="w-full h-full object-cover"
          />

          <!-- Category Badge -->
          <div class="absolute top-6 left-6 z-20">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-400 text-sm font-semibold">
              {{ currentPost.category }}
            </span>
          </div>
        </div>
      </div>

      <!-- Article Header -->
      <article
        :class="[
          'transition-all duration-800 ease-out',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
        style="transition-delay: 200ms"
      >
        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          {{ currentPost.title }}
        </h1>

        <!-- Excerpt -->
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          {{ currentPost.excerpt }}
        </p>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-white/10">
          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              :src="currentPost.author.avatar"
              :alt="currentPost.author.name"
              class="w-12 h-12 rounded-full border-2 border-orange-500"
            />
            <div>
              <p class="text-white font-semibold">{{ currentPost.author.name }}</p>
              <p class="text-sm text-gray-500">{{ currentPost.author.role }}</p>
            </div>
          </div>

          <div class="hidden sm:block h-8 w-px bg-white/10"></div>

          <!-- Date -->
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm">{{ currentPost.date }}</span>
          </div>

          <!-- Read Time -->
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm">{{ currentPost.readTime }} lectura</span>
          </div>

          <!-- Views -->
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <span class="text-sm">{{ currentPost.views }} vistas</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-12">
          <span
            v-for="tag in currentPost.tags"
            :key="tag"
            class="px-3 py-1.5 rounded-lg bg-white/5 text-orange-400 border border-orange-500/20 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Article Content -->
        <div class="prose prose-invert prose-lg max-w-none">
          <template v-for="(block, index) in currentPost.fullContent" :key="index">
            <!-- Text Block -->
            <p v-if="block.type === 'text'" class="text-gray-300 leading-relaxed mb-6">
              {{ block.content }}
            </p>

            <!-- Heading Block -->
            <h2 v-else-if="block.type === 'heading'" class="text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
              {{ block.content }}
            </h2>

            <!-- Image Block -->
            <figure v-else-if="block.type === 'image'" class="my-10">
              <div class="rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-4">
                <img
                  :src="block.src"
                  :alt="block.alt"
                  class="w-full h-auto rounded-xl"
                />
              </div>
              <figcaption v-if="block.caption" class="text-center text-sm text-gray-500 mt-4">
                {{ block.caption }}
              </figcaption>
            </figure>

            <!-- Video Block -->
            <figure v-else-if="block.type === 'video'" class="my-10">
              <div class="rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-4">
                <div class="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    :src="block.src"
                    :title="block.title"
                    class="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <figcaption v-if="block.caption" class="text-center text-sm text-gray-500 mt-4">
                {{ block.caption }}
              </figcaption>
            </figure>

            <!-- List Block -->
            <ul v-else-if="block.type === 'list'" class="space-y-3 mb-6 ml-6">
              <li
                v-for="(item, i) in block.items"
                :key="i"
                class="text-gray-300 flex items-start gap-3"
              >
                <svg class="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>

            <!-- Quote Block -->
            <blockquote v-else-if="block.type === 'quote'" class="my-10 p-6 border-l-4 border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent rounded-r-2xl">
              <p class="text-xl text-white italic mb-3">
                "{{ block.content }}"
              </p>
              <cite v-if="block.author" class="text-sm text-orange-400 not-italic font-semibold">
                — {{ block.author }}
              </cite>
            </blockquote>

            <!-- Code Block -->
            <figure v-else-if="block.type === 'code'" class="my-10">
              <div class="rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-white/10">
                <div class="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                  <span class="text-xs text-gray-400 font-mono uppercase">{{ block.language }}</span>
                  <button class="text-xs text-orange-400 hover:text-orange-300 transition-colors">
                    Copiar código
                  </button>
                </div>
                <pre class="p-4 overflow-x-auto"><code class="text-sm text-gray-300 font-mono">{{ block.content }}</code></pre>
              </div>
              <figcaption v-if="block.caption" class="text-center text-sm text-gray-500 mt-4">
                {{ block.caption }}
              </figcaption>
            </figure>
          </template>
        </div>

        <!-- Author Bio -->
        <div class="mt-16 p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10">
          <div class="flex items-start gap-4">
            <img
              :src="currentPost.author.avatar"
              :alt="currentPost.author.name"
              class="w-16 h-16 rounded-full border-2 border-orange-500"
            />
            <div>
              <p class="text-sm text-orange-400 font-semibold mb-1">Sobre el autor</p>
              <p class="text-white font-bold text-lg mb-2">{{ currentPost.author.name }}</p>
              <p class="text-gray-400 text-sm leading-relaxed">{{ currentPost.author.bio }}</p>
            </div>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      <div v-if="relatedPosts.length > 0" class="mt-20">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-bold text-white">Artículos Relacionados</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="post in relatedPosts"
            :key="post.id"
            @click="router.push(`/blog/${post.id}`)"
            class="group cursor-pointer bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500"
          >
            <div class="aspect-video w-full overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-sm text-gray-400 line-clamp-2">{{ post.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not Found State -->
  <div v-else class="max-w-[960px] mx-auto mt-20 px-4 pb-20 text-center">
    <h1 class="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
    <p class="text-gray-400 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
    <button
      @click="goBack"
      class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300"
    >
      Volver al Blog
    </button>
  </div>
</template>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Scroll suave */
* {
  scroll-behavior: smooth;
}

/* Code block styling */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
}
</style>
