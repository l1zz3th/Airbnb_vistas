import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    //Ruta para usuario
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    },

    //Ruta para cliente
    {
      path: '/cliente',
      name: 'cliente',
      component: () => import('../views/Clientes.vue')
    },

    //Ruta para lugar
    {
      path: '/lugar',
      name: 'lugar',
      component: () => import('../views/Lugares.vue')
    },

    //Ruta para reserva
    {
      path: '/reserva',
      name: 'reserva',
      component: () => import('../views/Reserva.vue')
    }

  ]
})

export default router
