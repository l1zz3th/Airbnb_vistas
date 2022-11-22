import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Usuario from '@/components/Usuario/Usuario'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },

    //Rutas para usuarios
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/Usuario/User.vue')
    },
    {
      path: '/editarUsuario',
      name: 'editarUsuario',
      component: () => import('../views/Usuario/editarUsuario.vue')
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
      component: () => import('../views/lugar/Lugares.vue')
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
