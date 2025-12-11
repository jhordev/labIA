import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas
import Home from '@/view/Home.vue'
import ProjectsView from '@/view/ProjectsView.vue'
import ProjectDetailView from '@/view/ProjectDetailView.vue'
import BlogView from '@/view/BlogView.vue'
import BlogDetailView from '@/view/BlogDetailView.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/projects', name: 'Projects', component: ProjectsView },
    { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetailView },
    { path: '/blog', name: 'Blog', component: BlogView },
    { path: '/blog/:id', name: 'BlogDetail', component: BlogDetailView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Si hay una posición guardada, vuelve a ella
        if (savedPosition) {
            return savedPosition
        }
        // Si hay un hash, desplázate al elemento
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        // Por defecto, desplázate al inicio
        return { top: 0, behavior: 'smooth' }
    },
})

export default router
