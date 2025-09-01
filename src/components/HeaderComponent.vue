<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import capsule from "@/assets/capsule.svg"
import CapsuleIcon from "@/components/Icons/CapsuleIcon.vue";

const open = ref(false)
const panelRef = ref(null)
const firstLinkRef = ref(null)

// Array dinámico de items del menú
const menuItems = ref([
  { name: 'Inicio', href: '#', active: true },
  { name: 'Proyectos', href: '#', active: false, hidden: true },
  { name: 'Blog', href: '#', active: false, hidden: true },
])

// Función para agregar item
const addMenuItem = (item) => {
  menuItems.value.push(item)
}

// Función para remover item
const removeMenuItem = (index) => {
  menuItems.value.splice(index, 1)
}

// Función para actualizar item
const updateMenuItem = (index, updates) => {
  menuItems.value[index] = { ...menuItems.value[index], ...updates }
}

// Función para marcar item como activo
const setActiveItem = (index) => {
  menuItems.value.forEach((item, i) => {
    item.active = i === index
  })
}

const openMenu = async () => {
  open.value = true
  await nextTick()
  firstLinkRef.value?.focus()
}

const closeMenu = () => {
  open.value = false
}

const toggleMenu = () => (open.value ? closeMenu() : openMenu())

// Bloquea scroll del body al abrir el panel
watch(open, (v) => {
  document.documentElement.style.overflow = v ? 'hidden' : ''
})

// Cerrar con ESC
const onKeydown = (e) => {
  if (e.key === 'Escape' && open.value) closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="w-full px-4 mt-6">
    <!-- Contenedor principal -->
    <div class="max-w-[960px] mx-auto bg-gradient-to-b from-[#FF7A01] to-[#FF7A01]/0 rounded-full p-[1px]">
      <div
          class=" rounded-full bg-secondary
             shadow-[0_0_40px_-12px_rgba(249,115,22,0.45)]
             backdrop-blur-xl px-5 sm:pr-[35px] sm:pl-[15px]"
      >
        <div class="flex items-center h-[76px] justify-between py-3">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2">
            <CapsuleIcon/>
            <span class="text-white font-bold text-[16px] md:text-[20px] tracking-wide">LABORATORIO IA UCSS</span>
          </a>

          <!-- Nav Desktop -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
            <template v-for="(item, index) in menuItems" :key="index">
              <!-- Item oculto -->
              <div
                  v-if="item.hidden"
                  :class="[
                    'relative opacity-50 cursor-not-allowed',
                    item.active ? 'text-orange-400' : 'text-white'
                  ]"
              >
                <span class="text-gray-500">{{ item.name }}</span>
                <div class="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                  Pronto
                </div>
              </div>

              <!-- Link con dropdown -->
              <button
                  v-else-if="item.hasDropdown"
                  :class="[
                    'hover:text-orange-300 transition-colors inline-flex items-center gap-1',
                    item.active ? 'text-orange-400' : 'text-white'
                  ]"
                  aria-haspopup="true"
                  @click="setActiveItem(index)"
              >
                {{ item.name }}
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
                </svg>
              </button>

              <!-- Link normal -->
              <a
                  v-else
                  :href="item.href"
                  :class="[
                    'hover:text-orange-300 transition-colors',
                    item.active ? 'text-orange-400' : 'text-white'
                  ]"
                  @click="setActiveItem(index)"
              >
                {{ item.name }}
              </a>
            </template>
          </nav>

          <!-- Botón móvil -->
          <button
              @click="toggleMenu"
              class="md:hidden text-white p-2 rounded-full ring-1 ring-white/10 hover:ring-white/20 transition"
              :aria-expanded="open"
              aria-controls="mobile-drawer"
              aria-label="Abrir menú"
          >
            <svg v-if="!open" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>


    <!-- ===== Drawer móvil (derecha -> izquierda) ===== -->
    <!-- Overlay -->
    <Transition
        enter-active-class="motion-safe:transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="motion-safe:transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-show="open"
          class="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px]"
          @click="closeMenu"
          aria-hidden="true"
      />
    </Transition>

    <!-- Panel -->
    <Transition
        enter-active-class="motion-safe:transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="motion-safe:transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
    >
      <aside
          v-show="open"
          id="mobile-drawer"
          ref="panelRef"
          class="fixed top-0 right-0 z-50 h-screen w-[80%] max-w-sm
               bg-black/90 border-l border-orange-500/30 backdrop-blur-xl
               shadow-[0_0_40px_-12px_rgba(249,115,22,0.45)]"
          role="dialog"
          aria-modal="true"
      >
        <!-- Header drawer -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div class="flex items-center gap-1">
            <CapsuleIcon/>
            <span class="text-white font-bold text-[16px] md:text-[18px] tracking-wide">CÁPSULAS IA</span>
          </div>
          <button
              @click="closeMenu"
              class="text-white/90 hover:text-white rounded-full p-2 ring-1 ring-white/10 hover:ring-white/20 transition"
              aria-label="Cerrar menú"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Links -->
        <nav class="px-5 py-4 flex flex-col gap-3 text-base font-medium">
          <template v-for="(item, index) in menuItems" :key="index">
            <!-- Item oculto en móvil -->
            <div
                v-if="item.hidden"
                class="relative opacity-50 cursor-not-allowed bg-gray-800/30 rounded-full py-2.5 px-4"
            >
              <span class="text-gray-500">{{ item.name }}</span>
              <div class="absolute top-1 right-3 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                Pronto
              </div>
            </div>

            <!-- Item normal en móvil -->
            <a
                v-else
                :ref="index === 0 ? 'firstLinkRef' : undefined"
                :href="item.href"
                :class="[
                  'bg-white/5 hover:bg-white/10 rounded-full py-2.5 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400/40',
                  item.active ? 'text-orange-300 focus:ring-orange-400/40' : 'text-white focus:ring-orange-400/30'
                ]"
                @click="closeMenu(); setActiveItem(index)"
            >
              {{ item.name }}
            </a>
          </template>
        </nav>

        <!-- Footer drawer (opcional) -->
        <div class="mt-auto px-5 py-6 border-t border-white/10 text-white/60 text-sm">
          © {{ new Date().getFullYear() }} Cápsulas IA · UCSS
        </div>
      </aside>
    </Transition>
  </header>
</template>

<style scoped>
/* Glow extra en hover del contenedor principal */
div:hover:is(.max-w-7xl){
  box-shadow: 0 0 50px -18px rgba(249,115,22,.55);
}
</style>