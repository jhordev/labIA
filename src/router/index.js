import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas
import Home from '@/view/Home.vue'
import About from '@/view/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
