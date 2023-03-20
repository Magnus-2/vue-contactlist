import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '../views/Users.vue'
import AddUsers from '../views/AddUsers.vue'
import UpdateUsers from '../views/UpdateUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    // {
    //   path: '/:catchAll(.*)',
    //   redirect: '/'
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/addusers',
      name: 'AddUsers',
      component: AddUsers

    },
    {
      path: '/updateusers/:userid',
      name: 'UpdateUsers',
      component: UpdateUsers

    }

  ]
})

export default router
