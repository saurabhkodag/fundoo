import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Signup/Signup.vue'
// import Home from '@/components/Signup/Signup.vue'
import Signin from '../views/Signin/Signin.vue'
import forgetEmail from '../views/ForgetEmail/forget.vue'
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
  },
  {
    path: '/forgetemail',
    name: 'forgetemail',
    component:forgetEmail
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
