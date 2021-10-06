import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Signup/Signup.vue'
// import Home from '@/components/Signup/Signup.vue'
import Signin from '../views/Signin/Signin.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signin',
    name: 'Signin',
    component:Signin
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
